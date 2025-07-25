"use client";
import Image from "next/image";

const watches = [
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

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="relative w-full h-[240px] sm:h-[400px] md:h-[600px] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/video-03.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </section>

      {/* PREMIUM WATCHES */}
      <section className="px-4 sm:px-8">
  <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Premium Watches</h2>
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
          <h2 className="text-xs sm:text-sm text-gray-600 mb-1">Brand Watch</h2>
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