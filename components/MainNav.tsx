"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import logo from "../main_logo.png";
import { Button } from "./Button";
import { primaryLinks, utilityLinks } from "./navigation";
import styles from "./MainNav.module.css";

export function MainNav() {
  const [open, setOpen] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  function closeMenu() {
    setOpen(false);
    toggleRef.current?.focus();
  }

  useEffect(() => {
    if (!open) {
      return;
    }

    const frame = frameRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusables = frame?.querySelectorAll<HTMLElement>("a, button") ?? [];
    focusables[1]?.focus({ preventScroll: true });

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab" || !frame) {
        return;
      }

      const items = Array.from(frame.querySelectorAll<HTMLElement>("a, button"));
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) {
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className={styles.wrap} ref={frameRef}>
      {open ? <div className={styles.backdrop} onClick={closeMenu} aria-hidden="true" /> : null}
      <div className={styles.bar}>
        <Link href="/" className={styles.logoLink} aria-label="Reliance Mobility Solutions, home">
          <span className={styles.logoFloat}>
            <Image
              src={logo}
              alt=""
              priority
              sizes="108px"
              className={styles.logoImage}
            />
          </span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.list}>
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} prefetch={false} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button href="/vehicle-imports" variant="nav" className={styles.desktopCta}>
            Start Your Import
          </Button>
          <button
            ref={toggleRef}
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            <span className={styles.srOnly}>{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={menuId}
          className={styles.panel}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <nav aria-label="Primary mobile">
            <ul className={styles.panelList}>
              {primaryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} prefetch={false} className={styles.panelLink} onClick={closeMenu}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className={styles.panelUtility}>
            {utilityLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  prefetch={false}
                  className={link.accent ? styles.panelAccent : styles.panelMeta}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="/vehicle-imports" variant="primary" className={styles.panelCta}>
            Start Your Import
          </Button>
        </div>
      ) : null}
    </div>
  );
}
