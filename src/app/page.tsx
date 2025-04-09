"use client"; // This marks the file as a client-side component

import { useState, useEffect } from "react";
import AOS from "aos";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(10, 10);
    setCurrentYear(new Date().getFullYear());
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing function
      once: true, // Run animation only once
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="fixed w-full top-0 left-0 bg-blue-900 text-white shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-2">
            <Link href="#" className="flex items-center">
              <Image
                src={"/logo.ico"} // Replace with your logo path
                alt="Company Logo"
                width={500}
                height={500}
                className="w-14 h-10 object-contain"
              />
            </Link>
            <Link href="#" className="text-2xl font-bold">
              SparkleClean
            </Link>
          </div>
          <ul className="flex space-x-6">
            <li>
              <Link href="#services" className="hover:text-blue-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-blue-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#galary" className="hover:text-blue-300">
                Galary
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="bg-blue-100 py-24 px-4 text-center mt-16"
        data-aos="fade-up"
        style={{ backgroundImage: "url('/background.jpg')" }} // Replace with your background image
      >
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900">
          Sparkling Clean, Every Time
        </h1>
        <p className="text-lg md:text-xl mt-4 text-blue-800">
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
          <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-blue-50 p-6 rounded shadow hover:shadow-lg transition"
              data-aos="fade-right"
            >
              <h3 className="text-xl font-semibold mb-2">Home Cleaning</h3>
              <p className="text-gray-700">
                Regular or deep cleaning for your home.
              </p>
            </div>
            <div
              className="bg-blue-50 p-6 rounded shadow hover:shadow-lg transition"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold mb-2">Office Cleaning</h3>
              <p className="text-gray-700">
                Maintain a spotless and productive workspace.
              </p>
            </div>
            <div
              className="bg-blue-50 p-6 rounded shadow hover:shadow-lg transition"
              data-aos="fade-left"
            >
              <h3 className="text-xl font-semibold mb-2">Move In/Out</h3>
              <p className="text-gray-700">
                Make your move stress-free with a thorough clean.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-white p-6 rounded shadow hover:shadow-lg transition"
              data-aos="fade-right"
            >
              <p className="text-gray-700 italic">
                "SparkleClean made my house look brand new! I couldn't be more
                pleased with their service. Highly recommend!"
              </p>
              <p className="mt-4 font-semibold">John Doe</p>
            </div>
            <div
              className="bg-white p-6 rounded shadow hover:shadow-lg transition"
              data-aos="fade-up"
            >
              <p className="text-gray-700 italic">
                "Amazing team! They handled my office cleaning professionally
                and efficiently. Definitely hiring again."
              </p>
              <p className="mt-4 font-semibold">Jane Smith</p>
            </div>
            <div
              className="bg-white p-6 rounded shadow hover:shadow-lg transition"
              data-aos="fade-left"
            >
              <p className="text-gray-700 italic">
                "The move-out cleaning was perfect! They did all the tough work,
                and I got my full deposit back!"
              </p>
              <p className="mt-4 font-semibold">Tom Green</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">
            Affordable Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-blue-50 p-6 rounded shadow hover:shadow-lg transition"
              data-aos="fade-right"
            >
              <h3 className="text-xl font-semibold mb-2">Basic Cleaning</h3>
              <p className="text-gray-700">$99</p>
              <p className="text-gray-700">
                Ideal for small homes or light office cleaning.
              </p>
            </div>
            <div
              className="bg-blue-50 p-6 rounded shadow hover:shadow-lg transition"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold mb-2">Deep Cleaning</h3>
              <p className="text-gray-700">$199</p>
              <p className="text-gray-700">
                Thorough cleaning for homes or offices requiring extra care.
              </p>
            </div>
            <div
              className="bg-blue-50 p-6 rounded shadow hover:shadow-lg transition"
              data-aos="fade-left"
            >
              <h3 className="text-xl font-semibold mb-2">Move In/Out</h3>
              <p className="text-gray-700">$299</p>
              <p className="text-gray-700">
                Complete cleaning for homes or offices during a move.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-blue-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-700">
            With over 10 years of experience, SparkleClean brings
            professionalism, reliability, and quality service to every job. We
            use eco-friendly products and guarantee satisfaction with every
            clean.
          </p>
        </div>
      </section>

      {/* Galary Section */}
      <section id="galary" className="bg-white-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
            Our Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Image
              src={"/cleaning1.jpg"}
              alt="Cleaning Example 1"
              className="rounded shadow-lg"
              data-aos="fade-right"
              width={500}
              height={500}
            />
            <Image
              src={"/cleaning2.jpg"}
              alt="Cleaning Example 2"
              className="rounded shadow-lg"
              data-aos="fade-up"
              width={500}
              height={500}
            />
            <Image
              src={"/cleaning3.jpg"}
              alt="Cleaning Example 3"
              className="rounded shadow-lg"
              data-aos="fade-left"
              width={500}
              height={500}
              style={{ height: "85%", width: "100%" }}
            />
            <Image
              src={"/cleaning3.jpg"}
              alt="Cleaning Example 3"
              className="rounded shadow-lg"
              data-aos="fade-left"
              width={500}
              height={500}
              style={{ height: "85%", width: "100%" }}
            />
            <Image
              src={"/cleaning1.jpg"}
              alt="Cleaning Example 3"
              className="rounded shadow-lg"
              data-aos="fade-left"
              width={500}
              height={500}
              style={{ height: "85%", width: "100%" }}
            />
            <Image
              src={"/cleaning2.jpg"}
              alt="Cleaning Example 3"
              className="rounded shadow-lg"
              data-aos="fade-left"
              width={500}
              height={500}
              style={{ height: "85%", width: "100%" }}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
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
      <footer
        className="bg-blue-900 text-white py-6 text-center"
        suppressHydrationWarning={true}
      >
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://facebook.com" className="hover:text-blue-300">
            Facebook
          </a>
          <a href="https://twitter.com" className="hover:text-blue-300">
            Twitter
          </a>
          <a href="https://instagram.com" className="hover:text-blue-300">
            Instagram
          </a>
        </div>
        &copy; {currentYear} SparkleClean. All rights reserved.
      </footer>
    </div>
  );
}
