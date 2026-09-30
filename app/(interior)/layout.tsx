import { InteriorHeader } from "@/components/InteriorHeader";

export default function InteriorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <InteriorHeader />
      {children}
    </>
  );
}