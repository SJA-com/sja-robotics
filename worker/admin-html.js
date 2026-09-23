// Admin page for waitlist sign-ups. Served at /admin/waitlist by worker/waitlist.js.
// The admin key is kept in sessionStorage and sent as X-Admin-Key; nothing sensitive is in this page.

const ADMIN_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex">
<title>Waitlist Admin — SJA Robotics</title>
<style>
  :root { --bg:#070912; --fg:#e4e4e7; --accent:#4C57C8; --surface:#0C0F1C; --surface2:#141830; --border:#23284A; --dim:#8b8fa8; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: system-ui, -apple-system, 'Segoe UI', sans-serif; background: var(--bg); color: var(--fg); min-height: 100vh; }
  main { max-width: 1100px; margin: 0 auto; padding: 32px 16px; }
  h1 { font-size: 24px; margin-bottom: 4px; }
  .sub { color: var(--dim); font-size: 14px; margin-bottom: 24px; }
  .card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 16px; }
  form { display: flex; gap: 8px; max-width: 420px; }
  input, select { flex: 1; background: var(--surface2); border: 1px solid var(--border); border-radius: 8px; padding: 10px 12px; color: var(--fg); font: inherit; min-width: 0; }
  button { background: var(--accent); color: #fff; border: none; border-radius: 8px; padding: 10px 16px; font: inherit; font-weight: 600; cursor: pointer; }
  button.ghost { background: transparent; border: 1px solid var(--border); color: var(--fg); }
  .kpis { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px; margin-bottom: 16px; }
  .kpi .l { font-size: 11px; text-transform: uppercase; letter-spacing: .5px; color: var(--dim); }
  .kpi .v { font-size: 28px; font-weight: 700; margin-top: 4px; font-variant-numeric: tabular-nums; }
  .bar { display: flex; gap: 8px; align-items: center; justify-content: space-between; margin-bottom: 12px; flex-wrap: wrap; }
  .scroll { overflow-x: auto; }
  table { width: 100%; border-collapse: collapse; font-size: 13px; }
  th { text-align: left; color: var(--dim); font-weight: 600; padding: 8px; border-bottom: 1px solid var(--border); white-space: nowrap; }
  td { padding: 8px; border-bottom: 1px solid #ffffff0a; vertical-align: top; }
  td.note { max-width: 320px; color: var(--dim); }
  .err { color: #f87171; font-size: 13px; margin-top: 8px; }
  .hidden { display: none; }
</style>
</head>
<body>
<main>
  <h1>Waitlist sign-ups</h1>
  <p class="sub">SJA Robotics · Fari, MOUS, SAM and Autonomous</p>

  <div id="login" class="card">
    <form id="login-form">
      <input id="key" type="password" placeholder="Admin key" autocomplete="current-password" required>
      <button>Open</button>
    </form>
    <p id="login-err" class="err hidden"></p>
  </div>

  <div id="data" class="hidden">
    <div class="kpis" id="kpis"></div>
    <div class="card">
      <div class="bar">
        <select id="filter" style="max-width:220px"><option value="">All products</option></select>
        <div style="display:flex;gap:8px">
          <button class="ghost" id="refresh">Refresh</button>
          <button id="csv">Download CSV</button>
          <button class="ghost" id="logout">Lock</button>
        </div>
      </div>
      <div class="scroll"><table><thead><tr>
        <th>Date</th><th>Product</th><th>Name</th><th>Email</th><th>Company</th><th>Country</th><th>Note</th>
      </tr></thead><tbody id="rows"></tbody></table></div>
    </div>
  </div>
</main>
<script>
(function () {
  var data = null;
  var $ = function (id) { return document.getElementById(id); };
  function getKey() { try { return sessionStorage.getItem("wl.key") || ""; } catch (e) { return ""; } }
  function setKey(k) { try { k ? sessionStorage.setItem("wl.key", k) : sessionStorage.removeItem("wl.key"); } catch (e) {} }
  function cell(text, cls) { var td = document.createElement("td"); td.textContent = text || ""; if (cls) td.className = cls; return td; }

  function load() {
    return fetch("/api/waitlist", { headers: { "X-Admin-Key": getKey() } }).then(function (r) {
      if (r.status === 401) throw new Error("Wrong admin key.");
      if (!r.ok) throw new Error("Could not load sign-ups.");
      return r.json();
    }).then(function (d) {
      data = d;
      $("login").classList.add("hidden");
      $("data").classList.remove("hidden");
      render();
    });
  }

  function render() {
    var k = $("kpis"); k.innerHTML = "";
    var items = [["Total", data.total]].concat(Object.keys(data.byProduct).sort().map(function (p) { return [p, data.byProduct[p]]; }));
    items.forEach(function (it) {
      var d = document.createElement("div"); d.className = "card kpi";
      var l = document.createElement("div"); l.className = "l"; l.textContent = it[0];
      var v = document.createElement("div"); v.className = "v"; v.textContent = it[1];
      d.appendChild(l); d.appendChild(v); k.appendChild(d);
    });
    var sel = $("filter"), current = sel.value;
    sel.length = 1;
    Object.keys(data.byProduct).sort().forEach(function (p) { var o = document.createElement("option"); o.value = p; o.textContent = p; sel.appendChild(o); });
    sel.value = current;
    var tb = $("rows"); tb.innerHTML = "";
    rows().forEach(function (e) {
      var tr = document.createElement("tr");
      tr.appendChild(cell(new Date(e.created).toLocaleString()));
      tr.appendChild(cell(e.product));
      tr.appendChild(cell(e.name));
      tr.appendChild(cell(e.email));
      tr.appendChild(cell(e.company));
      tr.appendChild(cell(e.country));
      tr.appendChild(cell(e.note, "note"));
      tb.appendChild(tr);
    });
  }

  function rows() { var f = $("filter").value; return data.entries.filter(function (e) { return !f || e.product === f; }); }

  function csv() {
    var cols = ["created", "product", "name", "email", "company", "country", "page", "note"];
    var q = function (v) { v = String(v == null ? "" : v); return /[",\\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
    var lines = [cols.join(",")].concat(rows().map(function (e) { return cols.map(function (c) { return q(e[c]); }).join(","); }));
    var a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([lines.join("\\n")], { type: "text/csv" }));
    a.download = "waitlist-" + new Date().toISOString().slice(0, 10) + ".csv";
    a.click();
  }

  $("login-form").onsubmit = function (e) {
    e.preventDefault();
    setKey($("key").value);
    load().catch(function (err) { setKey(""); $("login-err").textContent = err.message; $("login-err").classList.remove("hidden"); });
  };
  $("refresh").onclick = function () { load(); };
  $("csv").onclick = csv;
  $("filter").onchange = render;
  $("logout").onclick = function () { setKey(""); location.reload(); };
  if (getKey()) load().catch(function () { setKey(""); });
})();
</script>
</body>
</html>`;

export default ADMIN_HTML;
