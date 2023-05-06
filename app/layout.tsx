import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title:
    "Frontend Mentor | Huddle landing page with single introductory section",
  description: "Coded By Galih Arizza",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-mobileDesktopBackgroundImage bg-no-repeat bg-chViolet md:bg-desktopBackgroundImage md:bg-cover">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
