import { Globe2, ShieldCheck, UsersRound } from "lucide-react";
import styles from "./TrustStrip.module.css";

const items = [
  {
    title: "Trusted Sourcing",
    text: "From Japan",
    icon: ShieldCheck,
  },
  {
    title: "Clear Process",
    text: "From Purchase to Delivery",
    icon: Globe2,
  },
  {
    title: "Ongoing Support",
    text: "Even After Delivery",
    icon: UsersRound,
  },
];

export function TrustStrip() {
  return (
    <ul className={styles.list}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.title} className={styles.item}>
            <Icon className={styles.icon} size={28} strokeWidth={1.6} aria-hidden="true" />
            <div>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.text}>{item.text}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
