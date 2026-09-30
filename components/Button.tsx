import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./Button.module.css";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "nav";
  children: React.ReactNode;
  className?: string;
};

export function Button({
  href,
  variant = "primary",
  children,
  className,
}: ButtonProps) {
  const variantClass = {
    primary: styles.primary,
    secondary: styles.secondary,
    nav: styles.nav,
  }[variant];

  const showArrow = variant !== "secondary";

  return (
    <Link
      href={href}
      prefetch={false}
      className={[styles.button, variantClass, className]
        .filter(Boolean)
        .join(" ")}
    >
      <span>{children}</span>
      {showArrow ? (
        <ArrowRight className={styles.arrow} size={16} strokeWidth={2.25} aria-hidden="true" />
      ) : null}
    </Link>
  );
}
