"use client";
import Image from "next/image";

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

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="relative w-full h-[240px] sm:h-[400px] md:h-[600px] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/video-02.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </section>

      {/* PREMIUM WATCHES */}
      <section className="px-4 sm:px-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
          Premium Watches
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {watches.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-md sm:rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow duration-300"
            >
              <div className="overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.name}
                  width={400}
                  height={400}
                  className="w-full h-40 sm:h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 sm:p-4">
                <h2 className="text-xs sm:text-sm text-gray-600 mb-1">
                  Brand Watch
                </h2>
                <p className="text-sm sm:text-md font-semibold text-gray-800 line-clamp-2">
                  {item.name}
                </p>
                <div className="mt-1 sm:mt-2">
                  <span className="text-black font-semibold text-base sm:text-lg mr-2">
                    ₹{item.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-gray-500 line-through text-sm sm:text-base">
                    ₹{item.old.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* CARD 1 */}
          <div className="relative h-48 group overflow-hidden">
            <Image
              src="/images/new-arrivals.jpg"
              alt="New Arrivals"
              fill
              className="object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <button className="bg-white px-4 py-2 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                NEW ARRIVALS
              </button>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative h-48 group overflow-hidden">
            <Image
              src="/images/for-men.jpg"
              alt="For Men"
              fill
              className="object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <button className="bg-white px-4 py-2 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                FOR MEN
              </button>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="relative h-48 group overflow-hidden">
            <Image
              src="/images/for-women.jpg"
              alt="For Women"
              fill
              className="object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <button className="bg-white px-4 py-2 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                FOR WOMEN
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
