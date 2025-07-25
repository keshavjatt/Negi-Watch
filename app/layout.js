import Header from "./components/Header";
import Footer from "./components/Footer";
import { FaPhoneAlt, FaTruck } from "react-icons/fa";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Negi Store",
  description: "Modern watch store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="flex flex-col  min-h-screen font-sans antialiased">
        {/* Top Bar */}
        <div className="hidden md:flex justify-between items-center px-6 py-2 bg-black text-white text-sm">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-sm" />
            <a href="tel:+919315994129" className="no-underline">
              Need Help? +91 9315994129
            </a>
          </div>

          <div className="flex items-center gap-2">
            <FaTruck className="text-sm" />
            <span>Free Standard Shipping On Orders Above ₹999 India only</span>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/login" className="no-underline">
              Login
            </Link>
            /
            <Link href="/register" className="no-underline">
              Register
            </Link>
          </div>
        </div>

        <Header />
          <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
