import Header from "./components/Header";
import Footer from "./components/Footer";
import {  FaPhoneAlt, FaTruck } from "react-icons/fa";
import "./globals.css";

export const metadata = {
  title: "Negi Watches",
  description: "Premium watches collection",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col  min-h-screen font-sans antialiased">
              <div className="hidden md:flex justify-between items-center px-6 py-2 bg-black text-white">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-[13px]" />
                  <span>Need Help? +91 9315994129</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaTruck className="text-[16px]" />
                  <span>Free Standard Shipping On Orders Above ₹999 India only</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <a href="#" className="hover:underline">
                    Login
                  </a>{" "}
                  /{" "}
                  <a href="#" className="hover:underline">
                    Register
                  </a>
                </div>
              </div>
        
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}