"use client";
import Image from "next/image";
import Link from "next/link";

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
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <div
        className="relative h-40 md:h-72 lg:h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/banner.jpg')" }}
      >
        <div className="p-6 rounded-md text-center">
          <h1 className="text-4xl font-bold uppercase tracking-widest">Blog</h1>
          <p className="mt-2 text-sm">
            <Link href="/">
              <span className="text-gray-700 cursor-pointer hover:text-black">
                Home
              </span>
            </Link>{" "}
            / <span className="text-black font-medium">Blog</span>
          </p>
        </div>
      </div>

      {/* Blog List Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16 mt-17">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start gap-6"
          >
            {/* Image Section with fixed width */}
            <div className="w-80 flex-shrink-0">
              <Image
                src={product.src}
                alt={product.name}
                width={320}
                height={260}
                className="w-80 h-64 object-cover rounded-lg"
              />
            </div>

            {/* Content Section fills remaining space */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-semibold mb-3">{product.name}</h2>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                Explore the premium feel of the <strong>{product.name}</strong>.
                Designed with quality and elegance, it’s perfect for every stylish man.
                Ideal for gifting or enhancing your personal style.
              </p>
              <div className="flex justify-center md:justify-start items-center gap-4">
                <span className="text-xl font-bold text-black">
                  ₹{product.price}
                </span>
                <span className="line-through text-gray-500">
                  ₹{product.old}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}