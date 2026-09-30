import { MainNav } from "./MainNav";
import { UtilityNav } from "./UtilityNav";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <UtilityNav />
      <MainNav />
    </header>
  );
}
