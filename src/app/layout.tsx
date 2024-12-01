import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700']
});

export const metadata: Metadata = {
  title: "otp-form",
  description: "otp-form task for dubz company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-full min-h-screen grid place-content-center ${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}
