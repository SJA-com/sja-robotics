import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | SJA Robotics",
  description: "How SJA Robotics handles data in MOUS, Fari and on robotics.sjapathway.com, and how to delete it.",
};

const CONTACT = "sja.affu765@gmail.com";
const UPDATED = "23 September 2026";

const sections: { id: string; title: string; body: React.ReactNode }[] = [
  {
    id: "who",
    title: "Who we are",
    body: (
      <p>
        SJA Robotics is part of SJA Pathway. This policy covers robotics.sjapathway.com and our products MOUS (an AI
        receptionist for businesses, including its WhatsApp channel) and Fari (a personal AI companion). Contact us at{" "}
        <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
      </p>
    ),
  },
  {
    id: "collect",
    title: "What we collect",
    body: (
      <ul>
        <li>
          <strong>MOUS customers</strong> (people who message a business that uses MOUS, on the web or WhatsApp): the
          messages you send and the replies, your WhatsApp phone number if you use WhatsApp, booking details you give
          (such as name, phone, date and time), any image or PDF you share, and automatic notes such as the detected
          language, mood and whether the conversation was handed to a person.
        </li>
        <li>
          <strong>Businesses using MOUS:</strong> the business profile you enter (name, hours, services, prices,
          policies, hand-off number) and conversation statistics for your agent.
        </li>
        <li>
          <strong>Fari users:</strong> the facts, tasks, emergency contacts, preferences and mood notes Fari saves for
          you, and your recent conversations. Fari identifies you by a random ID stored in your browser; we do not
          ask for your name or email.
        </li>
        <li>
          <strong>Waitlist:</strong> the name, email, company and note you submit.
        </li>
        <li>
          <strong>Technical data:</strong> approximate country (from your network, used for local emergency numbers
          and abuse protection) and standard request logs kept by our hosting provider.
        </li>
      </ul>
    ),
  },
  {
    id: "use",
    title: "How we use it",
    body: (
      <ul>
        <li>To answer your messages, take bookings and remember what you asked Fari to remember.</li>
        <li>To show a business its own conversations, bookings and statistics.</li>
        <li>To prevent abuse (rate limits) and keep the service working.</li>
        <li>To contact you about early access if you joined the waitlist.</li>
      </ul>
    ),
  },
  {
    id: "share",
    title: "Who processes it",
    body: (
      <>
        <p>We do not sell personal data or use it for advertising. We use these service providers to run the products:</p>
        <ul>
          <li><strong>Cloudflare</strong> — hosting and short-term storage.</li>
          <li><strong>Supabase</strong> — our database.</li>
          <li>
            <strong>OpenRouter</strong> and the AI model providers it routes to — to generate replies. Message content is
            sent to them for that purpose only.
          </li>
          <li><strong>Meta (WhatsApp)</strong> — to receive and deliver WhatsApp messages.</li>
          <li>Free public data services for prayer times and weather, which receive only a city or location, never your messages.</li>
        </ul>
        <p>A business that uses MOUS can see the conversations its customers have with its agent.</p>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: (
      <ul>
        <li>MOUS daily statistics, transcripts and bookings in short-term storage: up to 90 days.</li>
        <li>WhatsApp conversation context: up to 30 days.</li>
        <li>MOUS conversation records in our database: until the business or the customer asks us to delete them.</li>
        <li>Fari memory and conversations: until you delete them (see below).</li>
        <li>Waitlist entries: until the product launches or you ask us to remove them.</li>
      </ul>
    ),
  },
  {
    id: "data-deletion",
    title: "Deleting your data",
    body: (
      <ul>
        <li>
          <strong>Fari:</strong> open Fari and click <em>Forget everything</em>. This deletes your memory, tasks,
          contacts, preferences and conversation records from our systems.
        </li>
        <li>
          <strong>MOUS (including WhatsApp):</strong> email <a href={`mailto:${CONTACT}`}>{CONTACT}</a> with the
          subject &quot;Delete my data&quot; and the phone number or business name involved. We delete it within 30 days
          and confirm by email.
        </li>
        <li>
          <strong>Waitlist:</strong> email us and we remove your entry.
        </li>
      </ul>
    ),
  },
  {
    id: "safety",
    title: "Health and emergency information",
    body: (
      <p>
        Fari can give general health and first-aid guidance. It is not a doctor and does not contact emergency services
        for you. In an emergency, call your local emergency number.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: <p>Our products are not intended for children under 13, and we do not knowingly collect their data.</p>,
  },
  {
    id: "changes",
    title: "Changes",
    body: <p>We will update this page if our practices change and show the date of the latest version at the top.</p>,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16 [&_a]:text-accent-3 [&_a:hover]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_p]:leading-relaxed [&_li]:leading-relaxed">
          <p className="text-xs font-mono tracking-widest text-accent-3 uppercase mb-3">Legal</p>
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-foreground/50 mb-10">Last updated {UPDATED}</p>
          <nav aria-label="Contents" className="mb-10 text-sm text-foreground/70">
            <ol className="list-decimal pl-5 space-y-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="space-y-10 text-foreground/80">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="text-xl font-semibold text-foreground mb-3">{s.title}</h2>
                {s.body}
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
