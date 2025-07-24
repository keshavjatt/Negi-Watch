import { FaSearch, FaShoppingBag, FaPhoneAlt, FaTruck } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full text-sm font-medium z-50">
      {/* Top Bar (Desktop Only) */}
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

      {/* Main Navbar (Sticky) */}
      <nav className="bg-white shadow-sm z-50 sticky top-0">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold tracking-wide">NEGI</div>

          <ul className="hidden lg:flex gap-6 uppercase text-[13px]">
            <li className="relative group cursor-pointer">
              HOME
              <span className="absolute left-0 bottom-[-6px] w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </li>
            <li className="cursor-pointer">SHOP</li>
            <li className="cursor-pointer">PRODUCTS</li>
            <li className="cursor-pointer">BLOG</li>
            <li className="cursor-pointer">PAGE</li>
          </ul>

          <div className="flex items-center gap-6 text-lg">
            <FaSearch className="cursor-pointer" title="Search" />
            <div className="relative cursor-pointer">
              <FaShoppingBag />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
