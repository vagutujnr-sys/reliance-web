"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { X } from "lucide-react";
import styles from "./CarHireDrawer.module.css";

const WHATSAPP_NUMBER = "263772594478";
const WHATSAPP_DISPLAY = "+263 77 259 4478";
const LOGO_URL = "https://www.reliancemobility.co.zw/main_logo.png";

const vehicles = [
  { id: "hatchback", name: "City hatchback", note: "Short trips and city driving" },
  { id: "sedan", name: "Sedan", note: "Everyday travel for up to four people" },
  { id: "suv", name: "SUV", note: "More space for passengers and luggage" },
  { id: "double-cab", name: "Double cab", note: "Work, family and longer road trips" },
  { id: "executive", name: "Executive sedan", note: "A quieter car for business travel" },
  { id: "minibus", name: "Minibus", note: "Groups that need extra seats" },
];

type Quote = {
  name: string;
  phone: string;
  when: string;
  days: string;
  vehicle: string;
};

function formatWhen(isoDate: string) {
  const date = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(date.getTime())) {
    return isoDate;
  }
  return date.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function quoteMessage(quote: Quote) {
  const dayCount = Number(quote.days);
  const duration = dayCount === 1 ? "1 day" : `${quote.days} days`;

  return [
    LOGO_URL,
    "",
    "*Reliance Mobility Solutions*",
    "Car hire quick quote",
    "",
    `Name: ${quote.name}`,
    `Phone: ${quote.phone}`,
    `Vehicle: ${quote.vehicle}`,
    `From: ${formatWhen(quote.when)}`,
    `Duration: ${duration}`,
    "",
    "_Driving possibilities. Delivering trust._",
  ].join("\n");
}

function openWhatsApp(quote: Quote) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(quoteMessage(quote))}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function CarHireDrawer() {
  const [open, setOpen] = useState(false);
  const [quote, setQuote] = useState<Quote | null>(null);
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  function close() {
    setOpen(false);
    openerRef.current?.focus();
  }

  useEffect(() => {
    function onClick(event: MouseEvent) {
      const anchor = (event.target as Element | null)?.closest?.('a[href="/car-hire"]');
      if (!anchor) {
        return;
      }
      event.preventDefault();
      openerRef.current = anchor as HTMLElement;
      setQuote(null);
      setOpen(true);
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("input, button")?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }
      const items = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>("a, button, input, select, textarea"),
      ).filter((item) => !item.hasAttribute("disabled"));
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

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const vehicleId = String(data.get("vehicle") ?? "");
    const vehicle = vehicles.find((item) => item.id === vehicleId);
    const nextQuote = {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      when: String(data.get("when") ?? ""),
      days: String(data.get("days") ?? ""),
      vehicle: vehicle?.name ?? "",
    };
    setQuote(nextQuote);
    openWhatsApp(nextQuote);
  }

  const selectedVehicle = quote ? vehicles.find((item) => item.name === quote.vehicle) : undefined;

  return (
    <div className={open ? styles.rootOpen : styles.root} hidden={!open}>
      <button type="button" className={styles.backdrop} aria-label="Close car hire" onClick={close} />
      <div
        ref={panelRef}
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <header className={styles.header}>
          <div>
            <p className={styles.kicker}>Reliance Car Hire</p>
            <h2 id={titleId}>Quick quote</h2>
          </div>
          <button type="button" className={styles.close} onClick={close} aria-label="Close car hire">
            <X size={20} aria-hidden="true" />
          </button>
        </header>

        <div className={styles.body}>
          <p className={styles.intro}>
            Reliance can arrange a hire vehicle in Zimbabwe for the period you need it.
            Tell us when you want it, how long you need it, and which vehicle suits the
            trip. This is a quote request, not a booking, and no price is shown until
            the quote is confirmed.
          </p>

          {quote ? (
            <div className={styles.success} role="status">
              <h3>Quote opened in WhatsApp</h3>
              <p>
                {quote.name}, your request for a {quote.vehicle} from {formatWhen(quote.when)}{" "}
                for {quote.days} {quote.days === "1" ? "day" : "days"} is addressed to{" "}
                {WHATSAPP_DISPLAY}. Send the message in WhatsApp to finish the request.
              </p>
              <p className={styles.note}>
                {selectedVehicle?.note}. Nothing is reserved and no charge is made from
                this form.
              </p>
              <button type="button" className={styles.submit} onClick={() => openWhatsApp(quote)}>
                Open WhatsApp again
              </button>
              <button type="button" className={styles.secondary} onClick={() => setQuote(null)}>
                Make another request
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={onSubmit}>
              <label className={styles.field}>
                <span>Your name</span>
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label className={styles.field}>
                <span>Phone number</span>
                <input name="phone" type="tel" autoComplete="tel" required />
              </label>
              <label className={styles.field}>
                <span>When do you want it?</span>
                <input name="when" type="date" required />
              </label>
              <label className={styles.field}>
                <span>For how long?</span>
                <input name="days" type="number" min={1} max={90} inputMode="numeric" placeholder="Number of days" required />
              </label>

              <fieldset className={styles.vehicles}>
                <legend>Choose a vehicle</legend>
                {vehicles.map((vehicle) => (
                  <label key={vehicle.id} className={styles.vehicle}>
                    <input type="radio" name="vehicle" value={vehicle.id} required />
                    <span>
                      <span className={styles.vehicleName}>{vehicle.name}</span>
                      <span className={styles.vehicleNote}>{vehicle.note}</span>
                    </span>
                  </label>
                ))}
              </fieldset>

              <button type="submit" className={styles.submit}>
                Send quote on WhatsApp
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
