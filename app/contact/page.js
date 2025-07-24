"use client";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <div
        className="relative h-40 md:h-72 lg:h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/banner.jpg')" }}
      >
        <div className="p-6 rounded-md text-center">
          <h1 className="text-4xl font-bold uppercase tracking-widest">Contact</h1>
          <p className="mt-2 text-sm">
            <Link href="/">
              <span className="text-gray-700 cursor-pointer hover:text-black">
                Home
              </span>
            </Link>{" "}
            / <span className="text-black font-medium">Contact</span>
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-8xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Form */}
          <div>
            <h2 className="text-xl font-bold mb-6">CONTACT US</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full p-4 bg-gray-100 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="w-full p-4 bg-gray-100 focus:outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Number Phone *"
                className="w-full p-4 bg-gray-100 focus:outline-none"
              />
              <textarea
                placeholder="Your Message *"
                className="w-full p-4 h-52 bg-gray-100 resize-none focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-white border border-black text-black w-40 p-2 hover:bg-black hover:text-white transition-all cursor-pointer"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="bg-white shadow-md p-8">
            <h3 className="text-md font-bold mb-4 uppercase">Need more information?</h3>
            <p className="text-sm text-gray-600 mb-6">
              There’s no place like home. To help you make yours perfect, our stores are open,
              we’re delivering as normal, our online store is available 24/7, and our customer
              service team is ready
            </p>

            <div className="mb-4">
              <h4 className="font-semibold uppercase text-sm mb-1">Address</h4>
              <p className="text-sm text-gray-700">Tughlakabad Extention, New Delhi - 110019</p>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold uppercase text-sm mb-1">Phone</h4>
              <a
                href="tel:+919315994129"
                className="text-sm"
              >
                +91 9315994129
              </a>
            </div>

            <div>
              <h4 className="font-semibold uppercase text-sm mb-1">Email</h4>
              <a
                href="mailto:support@negi.com"
                className="text-sm"
              >
                support@negi.com
              </a>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28008.555357723384!2d77.25433149999999!3d28.507311850000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1d167d43d1f%3A0x7b6f0ee593dfef!2sTughlakabad%20Extension%2C%20New%20Delhi%2C%20Delhi%20110019!5e0!3m2!1sen!2sin!4v1721836160857!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="border-2 border-gray-200 rounded-lg shadow-md"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}