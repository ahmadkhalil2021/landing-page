"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(10, 10);
    setCurrentYear(new Date().getFullYear());
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans min-w-screen">
      {/* Navbar */}
      <nav className="w-full min-w-screen top-0 left-0 bg-blue-900 text-white shadow-md z-40">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-2">
            <Link href="#" className="flex items-center">
              <Image
                src="/logo.ico"
                alt="Company Logo"
                width={56}
                height={40}
                className="object-contain"
              />
            </Link>
            <Link href="#" className="text-xl sm:text-2xl font-bold">
              SparkleClean
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {["services", "about", "galary", "contact"].map((item) => (
              <li key={item}>
                <Link href={`#${item}`} className="hover:text-blue-300">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden bg-blue-800 px-4 pb-4 space-y-2">
            {["services", "about", "galary", "contact"].map((item) => (
              <li key={item}>
                <Link href={`#${item}`} className="block py-2 hover:text-blue-300">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className="bg-blue-100 bg-cover bg-center py-20 md:py-28 px-4 text-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
        data-aos="fade-up"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-blue-900">
          Sparkling Clean, Every Time
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-4 text-blue-800">
          Trusted Cleaning Services for Homes & Offices
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition"
          data-aos="zoom-in"
        >
          Get a Free Quote
        </a>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12" data-aos="fade-up">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Home Cleaning", text: "Regular or deep cleaning for your home." },
              { title: "Office Cleaning", text: "Maintain a spotless and productive workspace." },
              { title: "Move In/Out", text: "Make your move stress-free with a thorough clean." },
            ].map((service, i) => (
              <div
                key={service.title}
                className="bg-blue-50 p-6 rounded shadow hover:shadow-lg transition"
                data-aos={["fade-right", "fade-up", "fade-left"][i]}
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12" data-aos="fade-up">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                text: `"SparkleClean made my house look brand new! I couldn't be more pleased with their service."`,
                name: "John Doe",
              },
              {
                text: `"Amazing team! They handled my office cleaning professionally and efficiently."`,
                name: "Jane Smith",
              },
              {
                text: `"The move-out cleaning was perfect! I got my full deposit back!"`,
                name: "Tom Green",
              },
            ].map((testimony, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded shadow hover:shadow-lg transition"
                data-aos={["fade-right", "fade-up", "fade-left"][i]}
              >
                <p className="text-gray-700 italic">{testimony.text}</p>
                <p className="mt-4 font-semibold">{testimony.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12" data-aos="fade-up">
            Affordable Pricing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Basic Cleaning", price: "$99", desc: "Ideal for small homes or light office cleaning." },
              { title: "Deep Cleaning", price: "$199", desc: "Thorough cleaning needing extra care." },
              { title: "Move In/Out", price: "$299", desc: "Complete cleaning during a move." },
            ].map((plan, i) => (
              <div
                key={plan.title}
                className="bg-blue-50 p-6 rounded shadow hover:shadow-lg transition"
                data-aos={["fade-right", "fade-up", "fade-left"][i]}
              >
                <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                <p className="text-gray-700 font-bold">{plan.price}</p>
                <p className="text-gray-700">{plan.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="bg-blue-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6" data-aos="fade-up">
            Why Choose Us?
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            With over 10 years of experience, SparkleClean brings professionalism, reliability, and quality service to every job. We use eco-friendly products and guarantee satisfaction with every clean.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section id="galary" className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6" data-aos="fade-up">
            Our Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {["cleaning1.jpg", "cleaning2.jpg", "cleaning3.jpg", "cleaning3.jpg", "cleaning1.jpg", "cleaning2.jpg"].map((img, i) => (
              <Image
                key={i}
                src={`/${img}`}
                alt={`Cleaning Example ${i + 1}`}
                width={500}
                height={500}
                className="w-full object-cover rounded shadow-lg h-64"
                data-aos={i % 3 === 0 ? "fade-right" : i % 3 === 1 ? "fade-up" : "fade-left"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6" data-aos="fade-up">
            Contact Us
          </h2>
          <p className="mb-6">Ready to make your space sparkle? Let’s talk!</p>
          <form className="grid grid-cols-1 gap-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-3 rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-3 rounded"
              required
            />
            <textarea
              placeholder="How can we help?"
              rows={4}
              className="border border-gray-300 p-3 rounded"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {["facebook", "twitter", "instagram"].map((platform) => (
            <a
              key={platform}
              href={`https://${platform}.com`}
              className="hover:text-blue-300 capitalize"
            >
              {platform}
            </a>
          ))}
        </div>
        &copy; {currentYear} SparkleClean. All rights reserved.
      </footer>
    </div>
  );
}