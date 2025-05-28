"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Work", href: "/" },
  { name: "My Resume", href: "/resume" },
  { name: "About + Connect", href: "/about" },
  { name: "|", href: "#", className: "mx-1 opacity-30 cursor-default" },
  { name: "Mentorship", href: "/mentorship" },
  { name: "Resume Reviews", href: "/resume-reviews" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`py-5 md:py-6 transition-all duration-300 ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Link href="/" className="text-lg md:text-xl font-bold uppercase tracking-wide">
              Muhammad Abdulkadir
            </Link>
            <span className="hidden md:inline-block text-sm text-light-gray ml-2">
              Product Manager Portfolio
            </span>
          </div>

          <div className="flex items-center text-sm space-x-4 md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${link.className || ""} nav-link ${
                  pathname === link.href ? "font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
