import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  let navBar = ["services", "pricing", "about", "gallery", "contact"];

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed w-full top-0 left-0 bg-blue-900 text-white shadow-md z-40">
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
          aria-label="Toggle menu"
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
          {navBar.map((item) => (
            <li key={item}>
              <Link
                href={`#${item}`}
                className="hover:text-blue-300 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-blue-800 px-4 pb-4 space-y-2">
          {navBar.map((item) => (
            <li key={item}>
              <Link
                href={`#${item}`}
                className="block py-2 hover:text-blue-300 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
