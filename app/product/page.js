"use client";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const watches = [
  {
    src: "/images/rolex-02.jpg",
    name: "Rolex is an integrated and independent Swiss watch manufacture",
    old: 85000,
    price: 50000,
    desc: "Rolex watches symbolize prestige, precision, and timeless elegance. Crafted in Switzerland, they are built to last and admired worldwide for their iconic design and mechanical innovation.",
  },
  {
    src: "/images/casio.jpg",
    name: "Casio is most commonly known for making durable and reliable electronic products",
    old: 19000,
    price: 10000,
    desc: "Casio watches offer digital precision and rugged durability, perfect for everyday use. Known for innovation and value, Casio blends tech and style effortlessly.",
  },
  {
    src: "/images/gshock.jpg",
    name: "G-Shock watches are known for their exceptional durability, ruggedness, and innovative features",
    old: 21995,
    price: 10000,
    desc: "G-Shock is the go-to watch for extreme conditions, built to resist shocks, water, and time. A must-have for adventurers and sports lovers.",
  },
  {
    src: "/images/pathek-philippe.jpg",
    name: "Patek Philippe SA is a Swiss luxury watchmaker and clock manufacturer",
    old: 700000,
    price: 30000,
    desc: "Patek Philippe stands for heritage and exclusivity. Each timepiece is a masterpiece of engineering, often passed down generations as a legacy.",
  },
  {
    src: "/images/invicta.jpg",
    name: "Many Invicta models feature robust specifications such as high water resistance",
    old: 96890,
    price: 50000,
    desc: "Invicta watches offer bold styling and solid performance. Built for modern wearers who seek adventure with a splash of luxury.",
  },
  {
    src: "/images/jacob&co.jpg",
    name: "Jacob & Co. watches are known for their bold designs and high-end materials",
    old: 89976,
    price: 50000,
    desc: "Jacob & Co. is for those who love extravagance. These watches blend art, gems, and timekeeping like no other.",
  },
  {
    src: "/images/frederique-constant.jpg",
    name: "Frederique Constant is known for its classical and refined timepieces of exceptional value",
    old: 99500,
    price: 25000,
    desc: "Frederique Constant blends classical elegance with affordability. A perfect choice for refined taste at a reasonable price.",
  },
  {
    src: "/images/nebula.jpg",
    name: "Nebula is India's first solid gold watch brand from Titan Company Ltd",
    old: 99424,
    price: 40000,
    desc: "Nebula watches exude heritage and richness. As Titan’s premium offering, they combine gold craftsmanship with timeless tradition.",
  },
];

export default function ProductPage() {
  const [current, setCurrent] = useState(0);
  const total = watches.length;

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const product = watches[current];

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <div
        className="relative h-40 md:h-72 lg:h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/banner.jpg')" }}
      >
        <div className="p-6 rounded-md text-center">
          <h1 className="text-4xl font-bold uppercase tracking-widest">
            Product
          </h1>
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
            <Image
              src={product.src}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-[480px] object-cover rounded-lg"
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
                <span className="line-through text-gray-500">
                  ₹{product.old.toLocaleString("en-IN")}
                </span>
              </p>
              <p className="text-xl font-semibold text-black">
                Now: ₹{product.price.toLocaleString("en-IN")}
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
