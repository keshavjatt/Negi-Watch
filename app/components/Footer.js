"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f3f1e9] text-gray-900 px-8 py-12 text-sm mt-16">
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
        <div>
          <h3 className="font-semibold mb-2">INFORMATION</h3>
          <ul className="space-y-1 text-gray-700 mt-8">
            <li>
              <Link href="/commingsoon">Shipping</Link>
            </li>
            <li>
              <Link href="/commingsoon">Warranty & Authenticity</Link>
            </li>
            <li>
              <Link href="/commingsoon">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/commingsoon">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/commingsoon">Sustainability</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-2">SERVICES</h3>
          <ul className="space-y-1 text-gray-700 mt-8">
            <li>
              <Link href="/commingsoon">Sale</Link>
            </li>
            <li>
              <Link href="/commingsoon">Quick Ship</Link>
            </li>
            <li>
              <Link href="/commingsoon">New Designs</Link>
            </li>
            <li>
              <Link href="/commingsoon">Protection Plan</Link>
            </li>
            <li>
              <Link href="/commingsoon">Gift Cards</Link>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold mb-2">HELP</h3>
          <ul className="space-y-1 text-gray-700 mt-8">
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/commingsoon">About Us</Link>
            </li>
            <li>
              <Link href="/commingsoon">Reviews</Link>
            </li>
            <li>
              <Link href="/commingsoon">Terms of Service</Link>
            </li>
            <li>
              <Link href="/commingsoon">Refund Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-6 pt-6 pb-2 -mb-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-700">
        <div>© 2025. All Rights Reserved</div>

        {/* Right - Social Icons */}
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
    </footer>
  );
}
