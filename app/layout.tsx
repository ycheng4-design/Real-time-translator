import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accessible Real-Time Translator",
  description: "Accessible translation interface with real-time transcription controls"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-slate-900">
        {children}
      </body>
    </html>
  );
}
