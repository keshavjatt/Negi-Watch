"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaSearch, FaShoppingBag } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SHOP", href: "/shop" },
    { name: "PRODUCTS", href: "/product" },
    { name: "BLOG", href: "/blog" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="w-full text-sm sticky top-0 font-medium z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          NEGI
        </Link>

        {/* Desktop Navbar */}
        <ul className="hidden lg:flex gap-6 uppercase text-[13px]">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group cursor-pointer">
              <Link
                href={link.href}
                className={`transition-all duration-300 ${
                  pathname === link.href
                    ? "text-black font-semibold"
                    : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
              <span
                className={`absolute left-0 bottom-[-6px] h-[2px] w-full bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${
                  pathname === link.href ? "scale-x-100" : ""
                }`}
              />
            </li>
          ))}
        </ul>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          {/* Desktop Only - Search & Cart */}
          <div className="hidden lg:flex items-center gap-6 text-lg">
            <FaSearch className="cursor-pointer" title="Search" />
            <div className="relative cursor-pointer">
              <FaShoppingBag />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </div>
          </div>

          {/* Mobile Only - Search, Cart, Hamburger */}
          <div className="flex lg:hidden items-center gap-4 text-lg">
            <FaSearch className="cursor-pointer" title="Search" />
            <div className="relative cursor-pointer">
              <FaShoppingBag />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </div>
            <button onClick={() => setIsMobileMenuOpen(true)}>
              <FaBars className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <FaTimes className="text-xl" />
          </button>
        </div>

        <ul className="flex flex-col p-6 gap-4 uppercase text-[14px]">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block transition-all duration-300 ${
                  pathname === link.href
                    ? "text-black font-semibold"
                    : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay when menu open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}