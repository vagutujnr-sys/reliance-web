import Link from "next/link";
import { utilityLinks } from "./navigation";
import styles from "./UtilityNav.module.css";

export function UtilityNav() {
  return (
    <div className={styles.bar}>
      <p className={styles.tagline}>
        <span className={styles.taglineFull}>Zimbabwean Mobility • Global Reach</span>
        <span className={styles.taglineShort}>Zimbabwe • Global</span>
      </p>
      <nav aria-label="Utility" className={styles.nav}>
        <ul className={styles.list}>
          {utilityLinks.map((link) => (
            <li key={link.href} className={link.accent ? undefined : styles.standardItem}>
              <Link
                href={link.href}
                prefetch={false}
                className={link.accent ? styles.accent : styles.link}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
