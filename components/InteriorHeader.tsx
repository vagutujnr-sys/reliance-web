import Image from "next/image";
import Link from "next/link";
import logo from "../main_logo.png";
import { Button } from "./Button";
import { primaryLinks, utilityLinks } from "./navigation";
import styles from "./InteriorHeader.module.css";

export function InteriorHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Reliance Mobility Solutions, home">
          <Image src={logo} alt="" priority sizes="54px" className={styles.logo} />
          <span className={styles.brandText}>
            <span className={styles.brandName}>Reliance</span>
            <span className={styles.brandDescriptor}>Mobility Solutions</span>
          </span>
        </Link>
        <nav className={styles.primary} aria-label="Primary">
          {primaryLinks.map((link) => (
            <Link key={link.href} href={link.href} prefetch={false}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Button href="/vehicle-imports" variant="nav" className={styles.cta}>
          Start Your Import
        </Button>
      </div>
      <nav className={styles.utility} aria-label="Customer information">
        <div className={styles.utilityInner}>
          <span className={styles.location}>Zimbabwean Mobility · Global Reach</span>
          <div className={styles.utilityLinks}>
            {utilityLinks.map((link) => (
              <Link key={link.href} href={link.href} prefetch={false}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}