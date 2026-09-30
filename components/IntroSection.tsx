import styles from "./IntroSection.module.css";

const stages = [
  {
    number: "01",
    title: "Source",
    text: "Access established international vehicle suppliers.",
  },
  {
    number: "02",
    title: "Import",
    text: "Reliance helps facilitate the journey into Zimbabwe.",
  },
  {
    number: "03",
    title: "Follow",
    text: "Stay connected to progress, payments and journey updates.",
  },
];

export function IntroSection() {
  return (
    <section className={styles.section} aria-labelledby="import-heading">
      <div className={styles.inner}>
        <div className={styles.layout}>
          <h2 id="import-heading" className={styles.heading}>
            <span className={styles.line}>Importing a Vehicle</span>{" "}
            <span className={styles.line}>Shouldn&apos;t Leave You</span>{" "}
            <span className={`${styles.line} ${styles.accent}`}>In the Dark.</span>
          </h2>
          <p className={styles.copy}>
            Buying a vehicle internationally is a major financial commitment. Reliance
            Mobility Solutions provides a clearer import experience by helping customers
            follow the journey from vehicle sourcing through to arrival in Zimbabwe.
          </p>
        </div>
        <ol className={styles.stages}>
          {stages.map((stage) => (
            <li key={stage.number} className={styles.stage}>
              <p className={styles.number}>{stage.number}</p>
              <h3 className={styles.title}>{stage.title}</h3>
              <p className={styles.text}>{stage.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
