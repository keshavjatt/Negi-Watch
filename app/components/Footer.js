"use client";
import dynamic from "next/dynamic";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaPinterestP,
  FaHouse,
  FaUser,
} from "react-icons/fa6";
import Link from "next/link";

// Dynamic import Lottie Player (SSR disabled)
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export default function Footer() {
  return (
    <footer className="relative bg-[#f3f1e9] text-gray-900 px-8 py-12 text-sm mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mb-8">
        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-2">NEWSLETTER SIGN-UP</h3>
          <p className="mb-4 mt-8">
            Get insider information about exclusive offers, events and more.
          </p>
          <div className="flex border-b border-black w-full">
            <input
              type="email"
              placeholder="Your Email Address…"
              className="bg-transparent outline-none w-full py-1"
            />
            <button className="text-black font-semibold">SUBSCRIBE</button>
          </div>
        </div>

        {/* Information */}
        <div className="sm:ml-27">
          <h3 className="font-semibold mb-2">INFORMATION</h3>
          <ul className="space-y-1 text-gray-700 mt-8">
            <li>
              <Link href="/comingsoon">Shipping</Link>
            </li>
            <li>
              <Link href="/comingsoon">Warranty & Authenticity</Link>
            </li>
            <li>
              <Link href="/comingsoon">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/comingsoon">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/comingsoon">Sustainability</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="sm:ml-27">
          <h3 className="font-semibold mb-2">SERVICES</h3>
          <ul className="space-y-1 text-gray-700 mt-8">
            <li>
              <Link href="/comingsoon">Sale</Link>
            </li>
            <li>
              <Link href="/comingsoon">Quick Ship</Link>
            </li>
            <li>
              <Link href="/comingsoon">New Designs</Link>
            </li>
            <li>
              <Link href="/comingsoon">Protection Plan</Link>
            </li>
            <li>
              <Link href="/comingsoon">Gift Cards</Link>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div className="sm:ml-27">
          <h3 className="font-semibold mb-2">HELP</h3>
          <ul className="space-y-1 text-gray-700 mt-8">
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/comingsoon">About Us</Link>
            </li>
            <li>
              <Link href="/comingsoon">Reviews</Link>
            </li>
            <li>
              <Link href="/comingsoon">Terms of Service</Link>
            </li>
            <li>
              <Link href="/comingsoon">Refund Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-6 pt-6 pb-2 -mb-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-700">
        <div>© 2025. All Rights Reserved</div>
        <div className="flex items-center gap-4 text-base">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPinterestP />
          </a>
        </div>
      </div>

      {/* WhatsApp Lottie - Bottom Left */}
      <a
        href="https://wa.me/9315994129"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:block fixed bottom-4 left-4 z-50 w-14 h-14 sm:w-20 sm:h-20"
      >
        <Player
          autoplay
          loop
          src="/lootiefile-animation/whatsapp-animation.json"
          style={{ width: "100%", height: "100%" }}
        />
      </a>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 py-2 flex justify-around items-center text-xs text-gray-800 sm:hidden z-50">
        <Link href="/" className="flex flex-col items-center">
          <FaHouse className="text-xl mb-1" />
          <span>Home</span>
        </Link>

        <Link href="/login" className="flex flex-col items-center">
          <FaUser className="text-xl mb-1" />
          <span>My Account</span>
        </Link>
      </div>
    </footer>
  );
}
