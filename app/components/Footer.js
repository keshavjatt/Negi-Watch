import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa6";

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
              <a href="#">Shipping</a>
            </li>
            <li>
              <a href="#">Warranty & Authenticity</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Sustainability</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-2">SERVICES</h3>
          <ul className="space-y-1 text-gray-700 mt-8">
            <li>
              <a href="#">Sale</a>
            </li>
            <li>
              <a href="#">Quick Ship</a>
            </li>
            <li>
              <a href="#">New Designs</a>
            </li>
            <li>
              <a href="#">Protection Plan</a>
            </li>
            <li>
              <a href="#">Gift Cards</a>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold mb-2">HELP</h3>
          <ul className="space-y-1 text-gray-700 mt-8">
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Refund Policy</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-6 pt-6 pb-2 -mb-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-700">
        <div>© 2025. All Rights Reserved</div>

        {/* Right - Social Icons */}
        <div className="flex items-center gap-4 text-base">
          <FaFacebookF />
          <FaInstagram />
          <FaXTwitter />
          <FaYoutube />
          <FaPinterestP />
        </div>
      </div>
    </footer>
  );
}
