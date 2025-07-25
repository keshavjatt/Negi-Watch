"use client";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

const products = [
  {
    src: "/images/img-01.jpg",
    name: "Sonata Analog Black Dial Men's Watch",
    old: 1999,
    price: 1299,
    desc: "The Sonata Analog Black Dial Men's Watch blends style and durability. Crafted for the modern man, it features a bold dial, water resistance, and precision timekeeping — perfect for both casual and formal wear.",
  },
  {
    src: "/images/img-02.jpg",
    name: "Titan Neo Iv Analog Men's Watch",
    old: 4499,
    price: 2999,
    desc: "The Titan Neo Iv combines elegance and toughness with its stainless steel build and stylish design. A premium accessory that reflects your unique taste in timepieces.",
  },
  {
    src: "/images/img-03.jpg",
    name: "Fastrack Casual Analog Watch for Men",
    old: 3295,
    price: 2499,
    desc: "Stay ahead of the trend with Fastrack’s Casual Analog Watch. Sporty, affordable, and reliable — it’s your everyday companion with a touch of youthfulness and energy.",
  },
  {
    src: "/images/img-04.jpg",
    name: "Timex Expedition Analog-Digital Watch",
    old: 5995,
    price: 4199,
    desc: "Built for adventure, the Timex Expedition features both analog and digital displays, rugged design, and water resistance. A must-have for the outdoorsy man.",
  },
];

export default function ProductPage() {
  const [current, setCurrent] = useState(0);
  const total = products.length;

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const product = products[current];

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <div
        className="relative h-40 md:h-72 lg:h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/banner.jpg')" }}
      >
        <div className="p-6 rounded-md text-center">
          <h1 className="text-4xl font-bold uppercase tracking-widest">Product</h1>
          <p className="mt-2 text-sm">
            <Link href="/">
              <span className="text-gray-700 cursor-pointer hover:text-black">
                Home
              </span>
            </Link>{" "}
            / <span className="text-black font-medium">Product</span>
          </p>
        </div>
      </div>

      {/* Product Display Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 mt-17">
        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
          {/* Image & Arrows */}
          <div className="relative md:w-1/2 w-full">
            <img
              src={product.src}
              alt={product.name}
              className="w-full h-120 object-cover rounded-lg"
            />

            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-white border border-black text-black rounded-full p-2 hover:bg-black hover:text-white transition-all cursor-pointer"
            >
              <FaArrowLeft className="text-lg" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-white border border-black text-black rounded-full p-2 hover:bg-black hover:text-white transition-all cursor-pointer"
            >
              <FaArrowRight className="text-lg" />
            </button>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="mt-4 text-gray-700">{product.desc}</p>
            <div className="mt-4">
              <p className="text-lg text-gray-600">
                Old Price:{" "}
                <span className="line-through text-gray">₹{product.old}</span>
              </p>
              <p className="text-xl font-semibold text-black">
                Now: ₹{product.price}
              </p>
            </div>
            <button className="mt-6 flex items-center gap-2 px-6 py-2 border border-black text-black bg-white rounded-full hover:bg-black hover:text-white transition-all cursor-pointer">
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}