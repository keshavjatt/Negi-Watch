"use client";
import Link from "next/link";

export default function ShopPage() {
  const products = [
    {
      src: "/images/img-01.jpg",
      name: "Sonata Analog Black Dial Men's Watch",
      old: 1999,
      price: 1299,
    },
    {
      src: "/images/img-02.jpg",
      name: "Titan Neo Iv Analog Men's Watch",
      old: 4499,
      price: 2999,
    },
    {
      src: "/images/img-03.jpg",
      name: "Fastrack Casual Analog Watch for Men",
      old: 3295,
      price: 2499,
    },
    {
      src: "/images/img-04.jpg",
      name: "Timex Expedition Analog-Digital Watch",
      old: 5995,
      price: 4199,
    },
    {
      src: "/images/img-01.jpg",
      name: "Sonata Analog Black Dial Men's Watch",
      old: 1999,
      price: 1299,
    },
    {
      src: "/images/img-02.jpg",
      name: "Titan Neo Iv Analog Men's Watch",
      old: 4499,
      price: 2999,
    },
    {
      src: "/images/img-03.jpg",
      name: "Fastrack Casual Analog Watch for Men",
      old: 3295,
      price: 2499,
    },
    {
      src: "/images/img-04.jpg",
      name: "Timex Expedition Analog-Digital Watch",
      old: 5995,
      price: 4199,
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
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h2 className="text-sm text-gray-600 mb-1">Brand Watch</h2>
                <p className="text-md font-semibold text-gray-800">
                  {item.name}
                </p>
                <div className="mt-2">
                  <span className="text-black font-semibold text-lg mr-2">
                    ₹{item.price}
                  </span>
                  <span className="text-gray-500 line-through">
                    ₹{item.old}
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
