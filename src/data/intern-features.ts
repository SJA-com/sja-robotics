// Open feature ideas for interns working on Fari and MOUS.
// Each item names where in the codebase to start so an intern can pick it up cold.

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type FeatureIdea = {
  id: string;
  title: string;
  detail: string;
  category: string;
  difficulty: Difficulty;
  skills: string[];
  startHere: string;
};

export type ProductBacklog = {
  product: "Fari" | "MOUS";
  tagline: string;
  demo: string;
  repo: string;
  stack: string;
  features: FeatureIdea[];
};

export const fariBacklog: ProductBacklog = {
  product: "Fari",
  tagline: "Arabic-first personal AI companion with permanent memory and 5 modes",
  demo: "https://robotics.sjapathway.com/fari/",
  repo: "https://github.com/sja-thedude/Fari",
  stack: "Python on Cloudflare Workers (Pyodide) · OpenRouter · Workers KV",
  features: [
    // Voice & language
    { id: "F-01", title: "Streaming replies", detail: "Stream tokens from OpenRouter to the browser (SSE) so replies appear word by word instead of all at once.", category: "Voice & Language", difficulty: "Advanced", skills: ["Python", "SSE", "Workers"], startHere: "worker.py → llm_complete()" },
    { id: "F-02", title: "Natural neural voice", detail: "Add an optional neural TTS voice (e.g. ElevenLabs or Workers AI) with a warm Arabic and English voice, falling back to browser speech.", category: "Voice & Language", difficulty: "Intermediate", skills: ["APIs", "Audio"], startHere: "fari_ui.py → say()" },
    { id: "F-03", title: "Server-side speech-to-text", detail: "Transcribe recorded audio with Whisper on Workers AI so voice input works in Firefox and gets better Arabic accuracy.", category: "Voice & Language", difficulty: "Intermediate", skills: ["Workers AI", "MediaRecorder"], startHere: "fari_ui.py → listen()" },
    { id: "F-04", title: "Arabic UI review", detail: "Have a native speaker review every Arabic string in the interface, fix phrasing and add missing translations.", category: "Voice & Language", difficulty: "Beginner", skills: ["Arabic", "UX writing"], startHere: "fari_ui.py → T.ar" },
    { id: "F-05", title: "Dialect badge", detail: "Detect Gulf, Egyptian, Levantine, Maghrebi or MSA in the user's message and show it as a tag on each reply.", category: "Voice & Language", difficulty: "Intermediate", skills: ["Prompting", "NLP"], startHere: "worker.py → system_prompt()" },
    { id: "F-06", title: "Arabizi support", detail: "Understand Franco-Arabic (\"7abibi, kifak?\") and reply in the user's preferred script.", category: "Voice & Language", difficulty: "Intermediate", skills: ["Prompting", "Evaluation"], startHere: "worker.py → LANG_RULES" },
    { id: "F-07", title: "More languages", detail: "Add Urdu, Hindi, French and Turkish to the language switcher, UI strings and voice input.", category: "Voice & Language", difficulty: "Beginner", skills: ["i18n", "JavaScript"], startHere: "fari_ui.py → T" },
    { id: "F-08", title: "\"Hey Fari\" wake word", detail: "Hands-free mode that listens for a wake word, then starts a voice conversation.", category: "Voice & Language", difficulty: "Advanced", skills: ["Web Audio", "ML"], startHere: "fari_ui.py → voice section" },

    // Memory
    { id: "F-09", title: "Memory categories", detail: "Tag remembered facts as personal, health, preferences or people, and add filters and icons in the memory panel.", category: "Memory", difficulty: "Beginner", skills: ["Python", "JavaScript"], startHere: "worker.py → apply_memory_updates()" },
    { id: "F-10", title: "Semantic memory search", detail: "Store facts as embeddings in Vectorize and retrieve only the relevant ones per message, so memory can grow past 80 facts.", category: "Memory", difficulty: "Advanced", skills: ["Embeddings", "Vectorize"], startHere: "worker.py → load_memory()" },
    { id: "F-11", title: "Ask before remembering", detail: "Optional privacy setting: Fari asks \"Should I remember this?\" before saving sensitive facts.", category: "Memory", difficulty: "Intermediate", skills: ["UX", "Prompting"], startHere: "worker.py → system_prompt() MEMORY RULES" },
    { id: "F-12", title: "Chat history sync", detail: "Save conversation history server-side (KV or D1) so chats follow the user across devices, not just memory facts.", category: "Memory", difficulty: "Intermediate", skills: ["D1", "Python"], startHere: "worker.py → ai_chat()" },
    { id: "F-13", title: "User accounts", detail: "Sign in with email magic link or Google so memory belongs to a real account instead of a browser ID.", category: "Memory", difficulty: "Advanced", skills: ["Auth", "Security"], startHere: "worker.py → handle_memory()" },
    { id: "F-14", title: "Import memory", detail: "Restore memory from the exported JSON file, completing the data-ownership story.", category: "Memory", difficulty: "Beginner", skills: ["JavaScript", "Python"], startHere: "fari_ui.py → b-export handler" },
    { id: "F-15", title: "Memory compaction", detail: "When facts get close to the limit, summarise and merge older ones with a cheap model instead of dropping them.", category: "Memory", difficulty: "Intermediate", skills: ["Prompting", "Python"], startHere: "worker.py → MAX_FACTS" },
    { id: "F-16", title: "Important dates", detail: "Recognise birthdays and anniversaries in memory and greet the user on the day.", category: "Memory", difficulty: "Intermediate", skills: ["Dates", "Python"], startHere: "worker.py → system_prompt()" },

    // Modes
    { id: "F-17", title: "Medication schedule", detail: "Health mode: track medicines with times and show today's schedule with check-offs.", category: "Health & Emergency", difficulty: "Intermediate", skills: ["Python", "UI"], startHere: "worker.py → MODES['health']" },
    { id: "F-18", title: "Triage card", detail: "Turn symptom conversations into a structured card: self-care, see a GP, or urgent, with reasons.", category: "Health & Emergency", difficulty: "Intermediate", skills: ["Prompting", "UI"], startHere: "worker.py → ai_chat() JSON schema" },
    { id: "F-19", title: "Vitals log & charts", detail: "Let users log blood pressure, sugar and weight and see trends over time.", category: "Health & Emergency", difficulty: "Intermediate", skills: ["Charts", "KV"], startHere: "New /vitals endpoint in worker.py" },
    { id: "F-20", title: "Nearby clinics & pharmacies", detail: "Use geolocation and a maps API to suggest the nearest open clinic or pharmacy.", category: "Health & Emergency", difficulty: "Intermediate", skills: ["Maps API", "Geolocation"], startHere: "fari_ui.py" },
    { id: "F-21", title: "Share my location", detail: "Emergency mode: one tap sends the user's live location to chosen contacts via WhatsApp or SMS links.", category: "Health & Emergency", difficulty: "Intermediate", skills: ["Geolocation", "JavaScript"], startHere: "fari_ui.py → #sos" },
    { id: "F-22", title: "Country-aware emergency numbers", detail: "Use Cloudflare's CF-IPCountry header to show the right emergency numbers first.", category: "Health & Emergency", difficulty: "Beginner", skills: ["Python", "Workers"], startHere: "worker.py → on_fetch()" },
    { id: "F-23", title: "Offline first-aid cards", detail: "Cache CPR, choking, burns and bleeding guides with a service worker so they work with no signal.", category: "Health & Emergency", difficulty: "Intermediate", skills: ["PWA", "Service Worker"], startHere: "fari_ui.py" },
    { id: "F-24", title: "Emergency contacts", detail: "Manage trusted contacts in memory and let Emergency mode reach them in one tap.", category: "Health & Emergency", difficulty: "Beginner", skills: ["UI", "Python"], startHere: "worker.py → handle_memory()" },
    { id: "F-25", title: "Real camera integration (spike)", detail: "Research connecting home cameras (RTSP/ONVIF via a local hub) so Security mode can show live alerts.", category: "Modes", difficulty: "Advanced", skills: ["IoT", "Networking"], startHere: "worker.py → MODES['security']" },
    { id: "F-26", title: "Scam message checker", detail: "Paste an SMS or email and get a verdict card with highlighted red flags.", category: "Modes", difficulty: "Beginner", skills: ["Prompting", "UI"], startHere: "worker.py → MODES['security']" },
    { id: "F-27", title: "Password breach check", detail: "Check passwords safely against Have I Been Pwned using k-anonymity (never send the full password).", category: "Modes", difficulty: "Intermediate", skills: ["Security", "Crypto"], startHere: "New endpoint in worker.py" },
    { id: "F-28", title: "Real reminders", detail: "Web Push notifications driven by Cron Triggers so tasks with due times actually notify the user.", category: "Modes", difficulty: "Advanced", skills: ["Web Push", "Cron Triggers"], startHere: "worker.py → tasks" },
    { id: "F-29", title: "Google Calendar", detail: "Read and create calendar events from Assistant mode with OAuth.", category: "Modes", difficulty: "Advanced", skills: ["OAuth", "Google APIs"], startHere: "worker.py → MODES['assistant']" },
    { id: "F-30", title: "Open draft in Gmail/Outlook", detail: "Detect drafted emails and add a button that opens them pre-filled in the user's mail app.", category: "Modes", difficulty: "Beginner", skills: ["JavaScript"], startHere: "fari_ui.py → addFari()" },
    { id: "F-31", title: "Prayer times (opt-in)", detail: "Show prayer times for the user's city (Aladhan API) with optional reminders.", category: "Modes", difficulty: "Beginner", skills: ["APIs", "UI"], startHere: "fari_ui.py" },
    { id: "F-32", title: "Hijri calendar", detail: "Hijri and Gregorian date conversion plus Ramadan and Eid awareness in replies.", category: "Modes", difficulty: "Beginner", skills: ["Dates", "Python"], startHere: "worker.py → system_prompt() now" },
    { id: "F-33", title: "Mood journal", detail: "Companion mode daily check-in that logs mood and shows a weekly mood chart.", category: "Modes", difficulty: "Intermediate", skills: ["Charts", "KV"], startHere: "worker.py → SentimentAnalyzer" },
    { id: "F-34", title: "Personality sliders", detail: "Let users tune Fari's warmth, humour and formality and save it per user.", category: "Modes", difficulty: "Beginner", skills: ["UI", "Prompting"], startHere: "worker.py → Personality / system_prompt()" },

    // AI & routing
    { id: "F-35", title: "Per-route model table", detail: "Configure a different cheap model per route (e.g. code vs. conversation) in wrangler vars, with a cost ceiling.", category: "AI & Routing", difficulty: "Intermediate", skills: ["Python", "LLMs"], startHere: "worker.py → ROUTES / model_list()" },
    { id: "F-36", title: "Web search with citations", detail: "Give the Knowledge & Research route live search results and show sources under the answer.", category: "AI & Routing", difficulty: "Intermediate", skills: ["Search APIs", "Prompting"], startHere: "worker.py → route_for()" },
    { id: "F-37", title: "Tool calling", detail: "Replace JSON-only output with real function calls (weather, currency, calculator, unit conversion).", category: "AI & Routing", difficulty: "Advanced", skills: ["LLM tools", "Python"], startHere: "worker.py → ai_chat()" },
    { id: "F-38", title: "Image generation", detail: "Let the Creative route generate images with the cheapest image model.", category: "AI & Routing", difficulty: "Intermediate", skills: ["APIs", "UI"], startHere: "worker.py → ROUTES['creative']" },
    { id: "F-39", title: "Evaluation suite", detail: "50 English and Arabic test prompts with expected behaviours, run automatically before each deploy.", category: "AI & Routing", difficulty: "Intermediate", skills: ["Testing", "Python"], startHere: "tests/" },
    { id: "F-40", title: "Cost dashboard", detail: "Record token usage and cost from each OpenRouter response and chart daily spend.", category: "AI & Routing", difficulty: "Intermediate", skills: ["KV", "Charts"], startHere: "worker.py → llm_complete()" },

    // Platform & quality
    { id: "F-41", title: "Split worker into modules", detail: "Break worker.py into llm.py, memory.py, routes.py and ui.py with pytest unit tests.", category: "Platform & Quality", difficulty: "Intermediate", skills: ["Python", "Refactoring"], startHere: "worker.py" },
    { id: "F-42", title: "Global rate limiting", detail: "Replace the per-isolate limiter with Cloudflare's Rate Limiting binding or a Durable Object.", category: "Platform & Quality", difficulty: "Intermediate", skills: ["Workers", "Security"], startHere: "worker.py → rate_limited()" },
    { id: "F-43", title: "Bot protection", detail: "Add Cloudflare Turnstile to the chat so bots can't spend the AI budget.", category: "Platform & Quality", difficulty: "Beginner", skills: ["Turnstile", "JavaScript"], startHere: "fari_ui.py → send()" },
    { id: "F-44", title: "Installable app (PWA)", detail: "Manifest, icons and offline shell so Fari installs on phones like a native app.", category: "Platform & Quality", difficulty: "Beginner", skills: ["PWA"], startHere: "fari_ui.py" },
    { id: "F-45", title: "Accessibility pass", detail: "Keyboard navigation, ARIA live region for new replies, focus states and contrast fixes.", category: "Platform & Quality", difficulty: "Beginner", skills: ["a11y", "HTML"], startHere: "fari_ui.py" },
    { id: "F-46", title: "Light theme", detail: "Add a light theme that follows the system setting, with a toggle.", category: "Platform & Quality", difficulty: "Beginner", skills: ["CSS"], startHere: "fari_ui.py → :root" },
    { id: "F-47", title: "Share a conversation", detail: "Export a chat as a clean image or a read-only share link.", category: "Platform & Quality", difficulty: "Intermediate", skills: ["Canvas", "KV"], startHere: "fari_ui.py" },
    { id: "F-48", title: "Atiana robot API", detail: "A /robot endpoint the Atiana simulator can call so Fari becomes the robot's voice and brain.", category: "Platform & Quality", difficulty: "Advanced", skills: ["APIs", "Robotics"], startHere: "worker.py + atiana repo" },
    { id: "F-49", title: "Usage analytics", detail: "Anonymous stats on modes, routes and languages used, shown on an admin page.", category: "Platform & Quality", difficulty: "Intermediate", skills: ["KV", "Charts"], startHere: "worker.py → ai_chat()" },
    { id: "F-50", title: "Mobile app", detail: "Wrap Fari in Capacitor or React Native with native microphone and notifications.", category: "Platform & Quality", difficulty: "Advanced", skills: ["Mobile", "Capacitor"], startHere: "New repo" },
  ],
};

export const mousBacklog: ProductBacklog = {
  product: "MOUS",
  tagline: "Dialect-aware AI voice and WhatsApp agent for businesses",
  demo: "https://robotics.sjapathway.com/mous/",
  repo: "https://github.com/sja-thedude/Mous",
  stack: "JavaScript on Cloudflare Workers · OpenRouter · Workers KV · WhatsApp Cloud API",
  features: [
    // Voice & telephony
    { id: "M-01", title: "Real phone number", detail: "Connect a Twilio or Vonage number: speech-to-text → MOUS → text-to-speech, so customers can actually call.", category: "Voice & Telephony", difficulty: "Advanced", skills: ["Telephony", "Webhooks"], startHere: "worker/src/agent.js → respond()" },
    { id: "M-02", title: "Low-latency voice pipeline", detail: "Stream audio over WebSockets with interim transcripts and streamed replies for sub-second turn-taking.", category: "Voice & Telephony", difficulty: "Advanced", skills: ["WebSockets", "Audio"], startHere: "worker/src/index.js" },
    { id: "M-03", title: "Custom business voices", detail: "Neural voices (ElevenLabs or Azure) with a voice picker per business — the \"Custom voice\" promise.", category: "Voice & Telephony", difficulty: "Intermediate", skills: ["TTS APIs"], startHere: "worker/src/app.html → say()" },
    { id: "M-04", title: "Barge-in", detail: "In call mode, stop speaking as soon as the caller starts talking.", category: "Voice & Telephony", difficulty: "Intermediate", skills: ["Web Audio"], startHere: "worker/src/app.html → listen()/say()" },
    { id: "M-05", title: "Whisper transcription", detail: "Server-side speech-to-text for Firefox and better Arabic dialect accuracy.", category: "Voice & Telephony", difficulty: "Intermediate", skills: ["Workers AI"], startHere: "worker/src/index.js → new /api/transcribe" },
    { id: "M-06", title: "Call transcripts", detail: "Save full call transcripts and show them in the dashboard.", category: "Voice & Telephony", difficulty: "Intermediate", skills: ["D1", "UI"], startHere: "worker/src/analytics.js" },
    { id: "M-07", title: "Keypad menu fallback", detail: "\"Press 1 for reservations\" DTMF menu for noisy lines or callers who prefer buttons.", category: "Voice & Telephony", difficulty: "Intermediate", skills: ["Telephony"], startHere: "worker/src/agent.js" },

    // WhatsApp & channels
    { id: "M-08", title: "WhatsApp go-live guide", detail: "Test the webhook end-to-end with Meta's sandbox number and write a step-by-step setup guide.", category: "WhatsApp & Channels", difficulty: "Beginner", skills: ["Meta API", "Docs"], startHere: "worker/src/whatsapp.js" },
    { id: "M-09", title: "WhatsApp voice notes", detail: "Transcribe incoming voice notes and reply to them like text.", category: "WhatsApp & Channels", difficulty: "Intermediate", skills: ["Audio", "Workers AI"], startHere: "worker/src/whatsapp.js → handleMessage()" },
    { id: "M-10", title: "Interactive buttons", detail: "Use WhatsApp buttons and list messages to confirm bookings in one tap.", category: "WhatsApp & Channels", difficulty: "Intermediate", skills: ["Meta API"], startHere: "worker/src/whatsapp.js → sendText()" },
    { id: "M-11", title: "Booking reminders", detail: "Send approved WhatsApp template messages 24 hours before a booking.", category: "WhatsApp & Channels", difficulty: "Intermediate", skills: ["Cron Triggers", "Meta API"], startHere: "worker/src/whatsapp.js" },
    { id: "M-12", title: "Instagram & Messenger", detail: "Add Instagram DMs and Facebook Messenger with the same webhook pattern.", category: "WhatsApp & Channels", difficulty: "Intermediate", skills: ["Meta API"], startHere: "worker/src/whatsapp.js" },
    { id: "M-13", title: "One customer, every channel", detail: "Link calls and WhatsApp by phone number so MOUS remembers the customer across channels.", category: "WhatsApp & Channels", difficulty: "Intermediate", skills: ["KV", "Data modelling"], startHere: "worker/src/whatsapp.js → historyKey" },

    // Business setup
    { id: "M-14", title: "Business accounts", detail: "Sign-up and login where each business gets its own saved agent (multi-tenant, D1).", category: "Business Setup", difficulty: "Advanced", skills: ["Auth", "D1"], startHere: "worker/src/index.js" },
    { id: "M-15", title: "Public agent link", detail: "A shareable /a/<business-id> page so real customers chat with a configured agent.", category: "Business Setup", difficulty: "Intermediate", skills: ["Workers", "KV"], startHere: "worker/src/index.js" },
    { id: "M-16", title: "Website chat widget", detail: "A one-line <script> embed businesses paste into their own website.", category: "Business Setup", difficulty: "Intermediate", skills: ["JavaScript", "Widgets"], startHere: "New worker/src/widget.js" },
    { id: "M-17", title: "Menu/price list upload", detail: "Upload a PDF or photo of a menu and auto-fill the business information box.", category: "Business Setup", difficulty: "Intermediate", skills: ["Vision models", "UI"], startHere: "worker/src/app.html → setup form" },
    { id: "M-18", title: "Knowledge base (RAG)", detail: "Many documents per business with retrieval from Vectorize instead of one 4,000-character box.", category: "Business Setup", difficulty: "Advanced", skills: ["Embeddings", "Vectorize"], startHere: "worker/src/prompts.js → systemPrompt()" },
    { id: "M-19", title: "Opening-hours editor", detail: "Per-day hours editor with \"open now\" logic instead of free text.", category: "Business Setup", difficulty: "Beginner", skills: ["UI", "Dates"], startHere: "worker/src/app.html" },
    { id: "M-20", title: "Holiday & Ramadan hours", detail: "A calendar of special hours for Ramadan, Eid, Christmas and public holidays.", category: "Business Setup", difficulty: "Beginner", skills: ["UI", "Dates"], startHere: "worker/src/prompts.js → CULTURES" },
    { id: "M-21", title: "More templates", detail: "Hotel, salon, gym, school, pharmacy and car-rental templates with realistic sample data.", category: "Business Setup", difficulty: "Beginner", skills: ["Content", "JavaScript"], startHere: "worker/src/app.html → TEMPLATES" },
    { id: "M-22", title: "Branding", detail: "Business logo and brand colour on the agent page.", category: "Business Setup", difficulty: "Beginner", skills: ["CSS"], startHere: "worker/src/app.html" },

    // Bookings & integrations
    { id: "M-23", title: "Bookings database", detail: "Store confirmed bookings in D1 and list them in the dashboard.", category: "Bookings & Integrations", difficulty: "Intermediate", skills: ["D1", "SQL"], startHere: "worker/src/analytics.js → recordTurn()" },
    { id: "M-24", title: "Real availability", detail: "Check slots and capacity before confirming a reservation.", category: "Bookings & Integrations", difficulty: "Advanced", skills: ["Scheduling", "D1"], startHere: "worker/src/agent.js" },
    { id: "M-25", title: "Calendar sync", detail: "Push appointments to Google Calendar or Calendly.", category: "Bookings & Integrations", difficulty: "Intermediate", skills: ["OAuth", "APIs"], startHere: "worker/src/agent.js" },
    { id: "M-26", title: "Customer confirmations", detail: "Send an SMS or WhatsApp confirmation after each booking.", category: "Bookings & Integrations", difficulty: "Intermediate", skills: ["Messaging APIs"], startHere: "worker/src/whatsapp.js" },
    { id: "M-27", title: "Owner email alerts", detail: "Email the business owner on new bookings and escalations.", category: "Bookings & Integrations", difficulty: "Beginner", skills: ["Email APIs"], startHere: "worker/src/index.js → handleChat()" },
    { id: "M-28", title: "Order status webhook", detail: "Let e-commerce businesses plug in their API so MOUS looks up real order status.", category: "Bookings & Integrations", difficulty: "Intermediate", skills: ["Webhooks", "Tool calling"], startHere: "worker/src/agent.js" },
    { id: "M-29", title: "Deposit payments", detail: "Payment links (Stripe, Tap or HyperPay) for reservation deposits.", category: "Bookings & Integrations", difficulty: "Advanced", skills: ["Payments"], startHere: "worker/src/agent.js" },
    { id: "M-30", title: "CRM export", detail: "Export contacts and conversations to HubSpot, Zoho or CSV.", category: "Bookings & Integrations", difficulty: "Intermediate", skills: ["APIs", "CSV"], startHere: "worker/src/analytics.js" },

    // Intelligence
    { id: "M-31", title: "Emotion timeline", detail: "Chart how the caller's mood changed over a conversation.", category: "Intelligence", difficulty: "Beginner", skills: ["Charts"], startHere: "worker/src/app.html → updateMood()" },
    { id: "M-32", title: "Live human takeover", detail: "When MOUS escalates, a staff member can take over the chat live from the dashboard.", category: "Intelligence", difficulty: "Advanced", skills: ["Durable Objects", "WebSockets"], startHere: "worker/src/index.js" },
    { id: "M-33", title: "Prayer-time awareness", detail: "Compute prayer times for the business's city and tell callers when the business pauses.", category: "Intelligence", difficulty: "Intermediate", skills: ["APIs", "Prompting"], startHere: "worker/src/prompts.js → CULTURES.muslim" },
    { id: "M-34", title: "Dialect test set", detail: "100 sentences per dialect to measure how accurately MOUS detects and mirrors each one.", category: "Intelligence", difficulty: "Intermediate", skills: ["Arabic", "Evaluation"], startHere: "worker/src/prompts.js → DIALECTS" },
    { id: "M-35", title: "Scanned document OCR", detail: "Use an OCR PDF engine for scanned Arabic invoices that have no text layer.", category: "Intelligence", difficulty: "Intermediate", skills: ["OCR", "APIs"], startHere: "worker/src/llm.js → plugins" },
    { id: "M-36", title: "Fact checker", detail: "A second cheap check that every price or hour in a reply really appears in the business info.", category: "Intelligence", difficulty: "Intermediate", skills: ["Prompting", "LLMs"], startHere: "worker/src/agent.js" },
    { id: "M-37", title: "Call summaries", detail: "Auto-generate a two-line summary of each conversation for the owner.", category: "Intelligence", difficulty: "Beginner", skills: ["Prompting"], startHere: "worker/src/analytics.js" },
    { id: "M-38", title: "Estimated CSAT", detail: "Score each call's customer satisfaction from emotion and outcome.", category: "Intelligence", difficulty: "Beginner", skills: ["Analytics"], startHere: "worker/src/analytics.js" },
    { id: "M-39", title: "Departments", detail: "Route between reception, billing and sales agents with different knowledge.", category: "Intelligence", difficulty: "Advanced", skills: ["Agents", "Prompting"], startHere: "worker/src/agent.js" },
    { id: "M-40", title: "Outbound reminder calls", detail: "MOUS calls customers to confirm or remind them of appointments.", category: "Intelligence", difficulty: "Advanced", skills: ["Telephony", "Cron Triggers"], startHere: "New worker/src/outbound.js" },

    // Dashboard
    { id: "M-41", title: "Dashboard login", detail: "Only the business owner can see their analytics.", category: "Dashboard & Analytics", difficulty: "Intermediate", skills: ["Auth"], startHere: "worker/src/dashboard.html" },
    { id: "M-42", title: "Per-business filter", detail: "Filter all analytics by business.", category: "Dashboard & Analytics", difficulty: "Beginner", skills: ["JavaScript"], startHere: "worker/src/dashboard.html" },
    { id: "M-43", title: "Export reports", detail: "Download analytics as CSV or a printable PDF report.", category: "Dashboard & Analytics", difficulty: "Beginner", skills: ["CSV", "Print CSS"], startHere: "worker/src/dashboard.html" },
    { id: "M-44", title: "Peak-hours heatmap", detail: "Show busiest days and hours so owners can staff up.", category: "Dashboard & Analytics", difficulty: "Beginner", skills: ["Charts"], startHere: "worker/src/analytics.js" },
    { id: "M-45", title: "Cost per conversation", detail: "Track OpenRouter token usage and cost for every conversation.", category: "Dashboard & Analytics", difficulty: "Intermediate", skills: ["KV", "Analytics"], startHere: "worker/src/llm.js → usage" },

    // Platform & quality
    { id: "M-46", title: "Abuse protection", detail: "Global rate limiting binding plus Turnstile so bots can't drain the AI budget.", category: "Platform & Quality", difficulty: "Intermediate", skills: ["Workers", "Security"], startHere: "worker/src/index.js → rateLimited()" },
    { id: "M-47", title: "Automated tests", detail: "Vitest + Miniflare tests for reply parsing, validation and WhatsApp signatures.", category: "Platform & Quality", difficulty: "Intermediate", skills: ["Testing", "JavaScript"], startHere: "worker/src/*.js" },
    { id: "M-48", title: "Arabic interface", detail: "Full right-to-left Arabic version of the MOUS interface.", category: "Platform & Quality", difficulty: "Beginner", skills: ["i18n", "CSS"], startHere: "worker/src/app.html" },
    { id: "M-49", title: "Mobile & accessibility polish", detail: "Screen-reader labels, keyboard use and small-screen layout fixes.", category: "Platform & Quality", difficulty: "Beginner", skills: ["a11y", "CSS"], startHere: "worker/src/app.html" },
    { id: "M-50", title: "Plans & billing", detail: "Waitlist and Stripe subscriptions for the Starter ($99) and Business ($199) plans.", category: "Platform & Quality", difficulty: "Advanced", skills: ["Stripe", "Auth"], startHere: "New billing worker" },
  ],
};
