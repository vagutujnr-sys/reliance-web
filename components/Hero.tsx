import Image from "next/image";
import hero from "../herobackground.png";
import { Button } from "./Button";
import { TrustStrip } from "./TrustStrip";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-label="Japan to Zimbabwe vehicle imports">
      <div className={styles.media}>
        <Image
          src={hero}
          alt="Vehicles lined up at a Japanese port beside a cargo ship, with Mount Fuji beyond the harbour."
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
      </div>
      <div className={styles.overlay} />
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span className={styles.dash} aria-hidden="true" />
            Japan to Zimbabwe
          </p>
          <h1 className={styles.headline}>
            <span className={styles.line}>Your Next Car</span>
            <span className={styles.line}>Is Closer Than</span>
            <span className={`${styles.line} ${styles.accent}`}>It Looks.</span>
          </h1>
          <p className={styles.lede}>
            Reliable vehicle imports from Japan to Zimbabwe.
            <br />
            Transparent. Trackable. Stress-free.
          </p>
          <div className={styles.actions}>
            <Button href="/vehicle-imports">Start Your Import</Button>
            <Button href="/track" variant="secondary">
              Track Your Journey
            </Button>
          </div>
        </div>
        <div className={styles.trust}>
          <TrustStrip />
        </div>
      </div>
    </section>
  );
}
