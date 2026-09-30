import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "./Button";
import styles from "./InteriorPage.module.css";

export type PageSection = {
  heading: string;
  body: string;
  items?: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type InteriorPageData = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  sections: PageSection[];
  faqs?: FaqItem[];
  action?: {
    label: string;
    href: string;
  };
};

export function InteriorPage({ page }: { page: InteriorPageData }) {
  return (
    <main id="main" className={styles.page}>
      <div className={styles.rule} aria-hidden="true" />
      <header className={styles.hero}>
        <p className={styles.eyebrow}><span aria-hidden="true" />{page.eyebrow}</p>
        <div className={styles.heroGrid}>
          <h1 className={styles.title}>{page.title}</h1>
          <p className={styles.description}>{page.description}</p>
        </div>
      </header>

      <div className={styles.content}>
        {page.slug === "track" ? <TrackPrompt /> : null}
        {page.slug === "faqs" && page.faqs ? (
          <section className={styles.faqs} aria-label="Frequently asked questions">
            {page.faqs.map((item, index) => (
              <details className={styles.faq} key={item.question}>
                <summary>
                  <span className={styles.faqNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <span>{item.question}</span>
                  <span className={styles.faqMark} aria-hidden="true">+</span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </section>
        ) : null}

        {page.sections.map((section, index) => (
          <section className={styles.section} key={section.heading}>
            <span className={styles.sectionIndex}>{String(index + 1).padStart(2, "0")}</span>
            <div className={styles.sectionCopy}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </div>
            {section.items?.length ? (
              <ul className={styles.items}>
                {section.items.map((item) => (
                  <li key={item}><Check size={17} aria-hidden="true" />{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        {page.action ? (
          <section className={styles.action} aria-label="Next step">
            <div>
              <p className={styles.actionKicker}>Your next step</p>
              <h2>Let&apos;s get moving.</h2>
            </div>
            <Button href={page.action.href}>{page.action.label}</Button>
          </section>
        ) : null}

        {page.slug !== "faqs" ? (
          <nav className={styles.related} aria-label="Related pages">
            <Link href="/how-it-works">How it works <ArrowRight size={15} aria-hidden="true" /></Link>
            <Link href="/faqs">Common questions <ArrowRight size={15} aria-hidden="true" /></Link>
          </nav>
        ) : null}
      </div>
    </main>
  );
}

function TrackPrompt() {
  return (
    <section className={styles.track} aria-labelledby="track-heading">
      <div>
        <p className={styles.actionKicker}>Journey support</p>
        <h2 id="track-heading">Ask for an update</h2>
        <p>Send your journey reference to Reliance on WhatsApp and the team can help with your latest progress.</p>
      </div>
      <form action="https://wa.me/263772594478" method="get" target="_blank" rel="noreferrer">
        <label htmlFor="journey-reference">Journey reference</label>
        <input id="journey-reference" name="text" type="text" placeholder="Enter your reference" required />
        <input type="hidden" name="text" value="Please help me with a journey update. My reference is:" />
        <button type="submit">Send inquiry <ArrowRight size={16} aria-hidden="true" /></button>
      </form>
    </section>
  );
}