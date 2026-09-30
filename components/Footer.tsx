import Image from "next/image";
import Link from "next/link";
import logo from "../main_logo.png";
import { primaryLinks, utilityLinks } from "./navigation";
import styles from "./Footer.module.css";

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.storeIcon}>
      <path fill="#00D2FF" d="M3.5 2.8c-.3.3-.5.8-.5 1.4v15.6c0 .6.2 1.1.5 1.4l.1.1 8.7-8.7v-.2L3.6 2.7l-.1.1z" />
      <path fill="#FFCE00" d="M16.2 14.7 12.3 10.8v.2l3.9 3.9.1-.1 2.2-1.3c.6-.4.6-1 0-1.4l-2.3-1.3-.1.1z" />
      <path fill="#FF3A44" d="M16.3 14.6 12.3 10.6 3.5 19.4c.4.4 1 .5 1.6.1l11.2-4.9z" />
      <path fill="#00F076" d="M16.3 9.4 5.1 4.5c-.6-.4-1.2-.3-1.6.1l8.8 8.8 3.9-3.9.1-.1z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.storeIcon}>
      <path
        fill="currentColor"
        d="M16.4 12.7c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.6.8-3.3.8s-1.7-.8-2.9-.8c-1.5 0-2.8.9-3.6 2.2-1.5 2.7-.4 6.6 1.1 8.8.7 1.1 1.6 2.3 2.7 2.2 1.1 0 1.5-.7 2.8-.7s1.7.7 2.9.7 1.9-1.1 2.6-2.1c.8-1.2 1.1-2.3 1.2-2.4-.1 0-2.2-.8-2.2-3.6zM14.7 6.7c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.6.6-1.1 1.6-.9 2.6 1 .1 1.9-.5 2.5-1.2z"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logoLink} aria-label="Reliance Mobility Solutions, home">
            <Image src={logo} alt="" width={72} height={72} className={styles.logo} />
          </Link>
          <p className={styles.name}>Reliance Mobility Solutions</p>
          <p className={styles.tagline}>
            Driving possibilities.
            <br />
            Delivering trust.
          </p>
        </div>

        <nav className={styles.links} aria-label="Footer">
          <p className={styles.heading}>Explore</p>
          <ul>
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} prefetch={false}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className={styles.links} aria-label="Customer information">
          <p className={styles.heading}>Customer</p>
          <ul>
            {utilityLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} prefetch={false}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.apps}>
          <p className={styles.heading}>Customer app</p>
          <a className={styles.badge} href="/mobile-app">
            <PlayIcon />
            <span>
              <span className={styles.badgeKicker}>Get it on</span>
              <span className={styles.badgeName}>Google Play</span>
            </span>
          </a>
          <span className={`${styles.badge} ${styles.badgeDimmed}`} aria-disabled="true">
            <AppleIcon />
            <span>
              <span className={styles.badgeKicker}>Download on the</span>
              <span className={styles.badgeName}>App Store</span>
            </span>
          </span>
          <p className={styles.comingSoon}>iOS coming soon</p>
        </div>
      </div>

      <div className={styles.disclaimer}>
        <p>
          Reliance Mobility Solutions helps customers source and import vehicles into
          Zimbabwe. This website explains the service and does not offer vehicles for
          sale. The vehicle owner is 100% responsible for the vehicle. Anything may
          happen while a vehicle is in transit, so owners are encouraged to arrange
          comprehensive cover for their vehicle. Reliance is here to ensure you get
          the best information to cover your vehicle whilst en route. Vehicle details,
          availability and supplier terms are confirmed during the import process. The
          Android customer app can be downloaded from Google Play. The iOS app has not
          been released.
        </p>
        <p className={styles.copy}>© 2026 Reliance Mobility Solutions</p>
        <p className={styles.credit}>Development &amp; Automation By Lloyd Gutu ( CodemathPHP )</p>
      </div>
    </footer>
  );
}
