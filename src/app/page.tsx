"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import Link from "next/link";
import Image from "next/image";
import WhatsappButton from "./component/whatsapp";
import NavBar from "./component/navBar";
import Contact from "./component/contact";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaRegWindowMaximize,
  FaTwitter,
} from "react-icons/fa";
import { GiOfficeChair, GiRedCarpet } from "react-icons/gi";
import { IoMoveOutline } from "react-icons/io5";

export default function Home() {
  let navBar = ["services", "pricing", "about", "gallery", "contact"];

  const [currentYear, setCurrentYear] = useState<number | null>(null);

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
    <div className="min-h-screen bg-white text-gray-800 font-sans overflow-x-hidden">
      {/* Navbar */}
      <NavBar />
      {/* Hero Section */}
      <section
        className="bg-blue-100 bg-cover bg-center pt-32 pb-20 px-4 text-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
        data-aos="fade-up"
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 mt-30">
            Sparkling Clean, Every Time
          </h1>
          <p className="text-lg sm:text-xl text-blue-800 mb-6">
            Trusted Cleaning Services for Homes & Offices
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors shadow-md"
            data-aos="zoom-in"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-8 text-center"
            data-aos="fade-up"
          >
            Our Services
          </h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-aos="fade-up"
          >
            {[
              {
                title: "Home Cleaning",
                text: "Regular or deep cleaning for your home.",
                icon: <FaHome />,
              },
              {
                title: "Office Cleaning",
                text: "Maintain a spotless and productive workspace.",
                icon: <GiOfficeChair />,
              },
              {
                title: "Move In/Out",
                text: "Make your move stress-free with a thorough clean.",
                icon: <IoMoveOutline />,
              },
              {
                title: "Carpet Cleaning",
                text: "Professional deep cleaning to revitalize your carpets and remove stubborn stains.",
                icon: <GiRedCarpet />,
              },
              {
                title: "Window Cleaning",
                text: "Streak-free cleaning for sparkling windows that let in maximum sunlight.",
                icon: <FaRegWindowMaximize />,
              },
            ].map((service, i) => (
              <div
                key={service.title}
                className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                data-aos={["fade-right", "fade-up", "fade-left"][i]}
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-8 text-center"
            data-aos="fade-up"
          >
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: `"SparkleClean made my house look brand new! I couldn't be more pleased with their service."`,
                name: "John Doe",
                rating: "★★★★★",
              },
              {
                text: `"Amazing team! They handled my office cleaning professionally and efficiently."`,
                name: "Jane Smith",
                rating: "★★★★★",
              },
              {
                text: `"The move-out cleaning was perfect! I got my full deposit back!"`,
                name: "Tom Green",
                rating: "★★★★☆",
              },
            ].map((testimony, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                data-aos={["fade-right", "fade-up", "fade-left"][i]}
              >
                <p className="text-gray-700 italic mb-4">"{testimony.text}"</p>
                <div className="text-yellow-400 mb-2">{testimony.rating}</div>
                <p className="font-semibold text-blue-900">{testimony.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-8 text-center"
            data-aos="fade-up"
          >
            Affordable Pricing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Basic Cleaning",
                price: "$99",
                desc: "Ideal for small homes or light office cleaning.",
                features: ["1-2 cleaners", "3 hours", "Standard equipment"],
              },
              {
                title: "Deep Cleaning",
                price: "$199",
                desc: "Thorough cleaning needing extra care.",
                features: ["2-3 cleaners", "5 hours", "Premium equipment"],
              },
              {
                title: "Move In/Out",
                price: "$299",
                desc: "Complete cleaning during a move.",
                features: ["3-4 cleaners", "Full day", "Specialized tools"],
              },
            ].map((plan, i) => (
              <div
                key={plan.title}
                className={`bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow `}
                data-aos={["fade-right", "fade-up", "fade-left"][i]}
              >
                <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                <p className="text-3xl font-bold text-blue-900 my-4">
                  {plan.price}
                </p>
                <p className="text-gray-700 mb-4">{plan.desc}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-16 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-6 text-center"
            data-aos="fade-up"
          >
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div data-aos="fade-right">
              <Image
                src="/about-image.webp"
                alt="Cleaning team"
                width={500}
                height={500}
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div data-aos="fade-left">
              <p className="text-gray-700 mb-4">
                With over 10 years of experience, SparkleClean brings
                professionalism, reliability, and quality service to every job.
              </p>
              <p className="text-gray-700 mb-4">
                We use eco-friendly products and guarantee satisfaction with
                every clean.
              </p>
              <ul className="space-y-3">
                {[
                  "✓ Fully insured and bonded",
                  "✓ Background-checked employees",
                  "✓ 24/7 customer support",
                  "✓ 100% satisfaction guarantee",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-blue-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-8 text-center"
            data-aos="fade-up"
          >
            Our Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "cleaning1.jpg",
              "cleaning2.jpg",
              "cleaning3.jpg",
              "cleaning2.jpg",
              "cleaning3.jpg",
              "cleaning1.jpg",
            ].map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                data-aos={
                  i % 3 === 0
                    ? "fade-right"
                    : i % 3 === 1
                    ? "fade-up"
                    : "fade-left"
                }
              >
                <Image
                  src={`/${img}`}
                  alt={`Cleaning Example ${i + 1}`}
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <Contact />

      {/* Whatsapp */}
      <WhatsappButton />

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">SparkleClean</h3>
              <p className="text-blue-200">
                Professional cleaning services for homes and businesses.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navBar.map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item}`}
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {[
                  "Home Cleaning",
                  "Office Cleaning",
                  "Move In/Out",
                  "Carpet Cleaning",
                  "Window Cleaning",
                ].map((service, i) => (
                  <li key={i}>
                    <a
                      href="#services"
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                {["facebook", "x", "instagram", "linkedin"].map((platform) => (
                  <a
                    key={platform}
                    href={`https://${platform}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-white transition-colors"
                    aria-label={platform}
                  >
                    <span className="sr-only">{platform}</span>
                    <span className="text-xl">
                      {platform === "facebook" ? (
                        <FaFacebook />
                      ) : platform === "x" ? (
                        <FaTwitter />
                      ) : platform === "instagram" ? (
                        <FaInstagram />
                      ) : (
                        <FaLinkedin />
                      )}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-6 text-center text-blue-200">
            &copy; {currentYear} SparkleClean. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
