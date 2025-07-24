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

      {/* Best Sellers */}
      <section className="px-8">
        <h2 className="text-2xl font-semibold mb-6">PREMIUM WATCHES</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {watches.map((w, i) => (
            <div key={i} className="space-y-2">
              <Image
                src={w.src}
                alt={w.name}
                width={300}
                height={300}
                className="object-cover"
              />
              <div className="text-sm font-medium">{w.name}</div>
              {/* Old Price */}
              <div className="text-sm text-gray-500 line-through">
                {w.old ? `₹${w.old.toLocaleString("en-IN")}` : ""}
              </div>
              {/* Current Price */}
              <div className="text-lg font-semibold">
                ₹{w.price.toLocaleString("en-IN")}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="relative h-48">
            <Image
              src="/images/new-arrivals.jpg"
              alt="New Arrivals"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <button className="bg-white px-4 py-2">NEW ARRIVALS</button>
            </div>
          </div>
          <div className="relative h-48">
            <Image
              src="/images/for-men.jpg"
              alt="For Men"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <button className="bg-white px-4 py-2">FOR MEN</button>
            </div>
          </div>
          <div className="relative h-48">
            <Image
              src="/images/for-women.jpg"
              alt="For Women"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <button className="bg-white px-4 py-2">FOR WOMEN</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
