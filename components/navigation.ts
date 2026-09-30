export type NavLink = {
  href: string;
  label: string;
  accent?: boolean;
};

export const primaryLinks: NavLink[] = [
  { href: "/vehicle-imports", label: "Vehicle Imports" },
  { href: "/car-hire", label: "Car Hire" },
  { href: "/mobile-app", label: "Mobile App" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const utilityLinks: NavLink[] = [
  { href: "/track", label: "Track Your Journey", accent: true },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/faqs", label: "FAQs" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy" },
];
