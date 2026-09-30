import type { InteriorPageData } from "@/components/InteriorPage";

export const pages: InteriorPageData[] = [
  {
    slug: "vehicle-imports",
    eyebrow: "Vehicle imports / Japan to Zimbabwe",
    title: "A clearer route to your next vehicle.",
    description: "Reliance helps customers source and import vehicles from Japan into Zimbabwe, with a process designed to make each stage easier to follow.",
    sections: [
      { heading: "Start with what matters to you", body: "Share the kind of vehicle you have in mind, your priorities and the questions you need answered. Vehicle details, availability and supplier terms are confirmed with you before you proceed.", items: ["Your vehicle requirements", "Supplier and vehicle details", "Costs and terms confirmed for your situation"] },
      { heading: "Understand the journey", body: "An international vehicle purchase involves several parties and stages. Reliance helps you understand the process and follow updates as your vehicle moves toward Zimbabwe.", items: ["Vehicle sourcing and purchase coordination", "Export and international transit", "Arrival and next steps in Zimbabwe"] },
      { heading: "Make informed decisions", body: "Import costs and timing depend on the vehicle and the arrangements involved. Review the details and applicable charges before committing, and arrange suitable cover for the vehicle while it is in transit." },
    ],
    action: { label: "Talk about an import", href: "/contact" },
  },
  {
    slug: "car-hire",
    eyebrow: "Car hire / Zimbabwe",
    title: "A vehicle for the days ahead.",
    description: "Tell us when you need a vehicle and what the trip calls for. Reliance can help arrange a hire option in Zimbabwe and confirm the quote with you.",
    sections: [
      { heading: "Choose what fits the trip", body: "From city travel to a group journey, share the kind of vehicle and space you need. Availability and the final quote are confirmed directly with you.", items: ["City hatchbacks and sedans", "SUVs and double cabs", "Executive sedans and minibuses"] },
      { heading: "Request a quick quote", body: "Send your name, phone number, preferred start date, duration and vehicle choice through the quote panel. It opens WhatsApp with your request prepared; send the message there to complete your enquiry." },
      { heading: "Wait for confirmation", body: "A quote request is not a booking and does not reserve a vehicle. Your dates, vehicle availability, price and any hire terms need to be confirmed before a booking is agreed." },
    ],
    action: { label: "Request a hire quote", href: "/car-hire" },
  },
  {
    slug: "mobile-app",
    eyebrow: "Customer app / Android",
    title: "Keep your journey in view.",
    description: "The Reliance Android app gives customers another way to stay connected to vehicle-import progress, payments and journey updates.",
    sections: [
      { heading: "Updates in one place", body: "Use the customer app to follow the information shared about your import journey. The details available depend on the progress and updates recorded for your vehicle." },
      { heading: "Already have an import underway?", body: "Contact Reliance if you need help accessing the app or have a question about the updates shown for your vehicle. Keep your journey reference handy when you get in touch." },
      { heading: "Available for Android", body: "The Android customer app is available through Google Play. The iOS app has not been released yet." },
    ],
    action: { label: "Ask about the customer app", href: "/contact" },
  },
  {
    slug: "about",
    eyebrow: "About Reliance Mobility Solutions",
    title: "Mobility, made more understandable.",
    description: "Reliance Mobility Solutions helps customers source and import vehicles into Zimbabwe, with clear communication through a major international purchase.",
    sections: [
      { heading: "A guide through the process", body: "Bringing a vehicle from another country can involve unfamiliar steps, decisions and costs. Reliance helps customers understand the process and stay informed from sourcing through to arrival." },
      { heading: "Clarity at every step", body: "We aim to explain what is known, what still needs confirmation and what happens next. Vehicle availability, supplier terms, import details and timing are confirmed for each customer's situation." },
      { heading: "Your vehicle remains yours", body: "The vehicle owner is responsible for the vehicle. Transit involves risk, so owners are encouraged to arrange comprehensive cover suitable for their vehicle and its journey." },
    ],
    action: { label: "See how it works", href: "/how-it-works" },
  },
  {
    slug: "contact",
    eyebrow: "Contact / Reliance Mobility Solutions",
    title: "Let’s talk about your journey.",
    description: "Have a question about importing a vehicle, a journey already underway, or arranging a hire vehicle? Get in touch with the Reliance team on WhatsApp.",
    sections: [
      { heading: "Message the team", body: "WhatsApp is the direct contact channel currently provided by Reliance. Include your name and a short description of what you need help with. For an existing import, include your journey reference.", items: ["WhatsApp: +263 77 259 4478", "Import and sourcing enquiries", "Journey progress and customer app support", "Car hire quote requests"] },
      { heading: "What to expect", body: "A message is an enquiry, not a confirmed booking, purchase or service agreement. Any vehicle details, availability, pricing and terms will be confirmed directly with you." },
    ],
    action: { label: "Message Reliance on WhatsApp", href: "https://wa.me/263772594478" },
  },
  {
    slug: "track",
    eyebrow: "Journey support / Vehicle imports",
    title: "Stay connected to the journey.",
    description: "Need a progress update? Send your journey reference to Reliance on WhatsApp. This page sends an enquiry to the team; it does not display live tracking data.",
    sections: [
      { heading: "Have your reference ready", body: "Use the reference provided for your import so the team can identify the right journey. If you do not have it, include the name and contact details used for your enquiry." },
      { heading: "Updates from the team", body: "Journey progress depends on updates available for your vehicle and the parties involved in its transit. The team can help explain the latest information they have." },
    ],
    action: { label: "Contact customer support", href: "/contact" },
  },
  {
    slug: "how-it-works",
    eyebrow: "How it works / From Japan to Zimbabwe",
    title: "A process you can follow.",
    description: "Every import is different, but a clear conversation and agreed next steps help make an international vehicle journey easier to navigate.",
    sections: [
      { heading: "Discuss your requirements", body: "Tell Reliance what vehicle you are looking for and what matters to you. The team can help you understand sourcing options and the information you need before deciding." },
      { heading: "Review the details", body: "Vehicle availability, supplier terms, costs and expected arrangements are confirmed for your specific import. Take time to review the information before committing to a purchase." },
      { heading: "Follow the import", body: "As the vehicle moves through the agreed process, stay in contact with Reliance for updates. The customer app and WhatsApp can help you follow information shared about your journey." },
      { heading: "Prepare for arrival", body: "Arrival and onward steps depend on your vehicle and import arrangements. Confirm the requirements and responsibilities that apply to your situation with the team." },
    ],
    action: { label: "Start a conversation", href: "/contact" },
  },
  {
    slug: "faqs",
    eyebrow: "Customer information / FAQs",
    title: "A few useful answers.",
    description: "Start here for common questions about vehicle imports, journey updates, the customer app and car hire.",
    sections: [
      { heading: "Still need a hand?", body: "Every vehicle and journey is different. Send your question to Reliance with any relevant reference so the team can respond to your situation." },
    ],
    faqs: [
      { question: "Where do imported vehicles come from?", answer: "Reliance helps customers source and import vehicles from Japan into Zimbabwe. Vehicle choice, availability and supplier terms are confirmed for each enquiry." },
      { question: "Can I see a live map of my vehicle?", answer: "This website does not provide live map tracking. Send your journey reference to Reliance on WhatsApp to ask for the latest progress update." },
      { question: "How do I follow my import?", answer: "Reliance shares progress information through the customer journey, including the Android app and direct support. The updates available depend on the information recorded for your vehicle." },
      { question: "Is the car hire quote a booking?", answer: "No. A quote request opens a WhatsApp message and does not reserve a vehicle. Dates, availability, price and hire terms must be confirmed before a booking is agreed." },
      { question: "Is there an iPhone app?", answer: "The Android customer app is available through Google Play. The iOS app has not been released yet." },
      { question: "Who is responsible for the vehicle in transit?", answer: "The vehicle owner is responsible for the vehicle. Transit involves risk, and owners are encouraged to arrange suitable comprehensive cover." },
    ],
  },
  {
    slug: "terms",
    eyebrow: "Customer information / Terms & conditions",
    title: "Terms for using this website.",
    description: "These general terms explain the purpose of this website and the limits of the information shown here. Specific service and supplier terms are confirmed directly with you.",
    sections: [
      { heading: "Website information", body: "This website describes Reliance Mobility Solutions and its vehicle sourcing, import support and car hire enquiries. It does not offer vehicles for sale. Information is general and is not a confirmed quote, availability statement or service agreement." },
      { heading: "Quotes and arrangements", body: "Vehicle details, availability, supplier terms, costs, timing and hire arrangements must be confirmed directly for your situation. Sending an enquiry does not create a purchase, booking or reservation." },
      { heading: "Vehicle ownership and transit", body: "The vehicle owner is responsible for the vehicle. A vehicle may be exposed to risks while in transit; owners are encouraged to arrange comprehensive cover appropriate to the vehicle and journey." },
      { heading: "Third-party services", body: "Links or communication tools such as WhatsApp and Google Play are provided for convenience and are subject to their own terms, availability and privacy practices." },
      { heading: "Questions", body: "If you need clarification about a particular import or hire arrangement, contact Reliance and request the terms that apply before you proceed." },
    ],
  },
  {
    slug: "privacy",
    eyebrow: "Customer information / Privacy",
    title: "Your information, handled with care.",
    description: "This notice explains what happens when you choose to contact Reliance through the enquiry tools on this website.",
    sections: [
      { heading: "Information you choose to send", body: "The car hire quote tool prepares a WhatsApp message containing the details you enter. The journey update tool prepares a WhatsApp enquiry containing the reference you provide. Nothing is sent from those tools until you choose to send the message in WhatsApp." },
      { heading: "How enquiries are used", body: "Information you send to Reliance can be used to respond to your question, discuss a quote or help with an existing journey. Do not include payment credentials or other sensitive information in a general enquiry." },
      { heading: "Third-party services", body: "When you open WhatsApp or Google Play, those services process information under their own privacy policies and terms. Review their notices before using their services." },
      { heading: "Questions about your information", body: "For questions about information you have shared with Reliance, contact the team on WhatsApp and describe your request. The appropriate response depends on the information and context involved." },
    ],
  },
];

export const pagesBySlug = Object.fromEntries(pages.map((page) => [page.slug, page])) as Record<string, InteriorPageData | undefined>;