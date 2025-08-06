"use client";
import Link from "next/link";
import Image from "next/image";

export default function ShopPage() {
  const watches = [
    {
      src: "/images/rolex-02.jpg",
      name: "Rolex is an integrated and independent Swiss watch manufacture",
      old: 85000,
      price: 50000,
    },
    {
      src: "/images/casio.jpg",
      name: "Casio is most commonly known for making durable and reliable electronic products",
      old: 19000,
      price: 10000,
    },
    {
      src: "/images/gshock.jpg",
      name: "G-Shock watches are known for their exceptional durability, ruggedness, and innovative features",
      old: 21995,
      price: 10000,
    },
    {
      src: "/images/pathek-philippe.jpg",
      name: "Patek Philippe SA is a Swiss luxury watchmaker and clock manufacturer",
      old: 700000,
      price: 30000,
    },
    {
      src: "/images/invicta.jpg",
      name: "Many Invicta models feature robust specifications such as high water resistance",
      old: 96890,
      price: 50000,
    },
    {
      src: "/images/jacob&co.jpg",
      name: "Jacob & Co. watches are known for their bold designs and high-end materials",
      old: 89976,
      price: 50000,
    },
    {
      src: "/images/frederique-constant.jpg",
      name: "Frederique Constant is known for its classical and refined timepieces of exceptional value",
      old: 99500,
      price: 25000,
    },
    {
      src: "/images/nebula.jpg",
      name: "Nebula is India's first solid gold watch brand from Titan Company Ltd",
      old: 99424,
      price: 40000,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <div
        className="relative h-40 md:h-72 lg:h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/banner.jpg')" }}
      >
        <div className="p-6 rounded-md text-center">
          <h1 className="text-4xl font-bold uppercase tracking-widest">Shop</h1>
          <p className="mt-2 text-sm">
            <Link href="/">
              <span className="text-gray-700 cursor-pointer hover:text-black">
                Home
              </span>
            </Link>{" "}
            / <span className="text-black font-medium">Shop</span>
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="p-8 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {watches.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow duration-300"
            >
              <div className="overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h2 className="text-sm text-gray-600 mb-1">Brand Watch</h2>
                <p className="text-md font-semibold text-gray-800 line-clamp-2">
                  {item.name}
                </p>
                <div className="mt-2">
                  <span className="text-black font-semibold text-lg mr-2">
                    ₹{item.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-gray-500 line-through">
                    ₹{item.old.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
