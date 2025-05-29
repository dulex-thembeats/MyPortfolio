"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DribbblePage() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "All" },
    { href: "/ellie-from-actively", label: "Ellie from Actively" },
    { href: "/cohabz", label: "Cohabz" },
    { href: "/dribbble", label: "Case Study — Artstation" },
    { href: "/stitcher", label: "Case Study — Overcast" },
  ];

  return (
    <div className="container-custom py-12 md:py-24">
      {/* Header */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
        ArtStation — Case Study
        </h1>
        <p className="italic text-gray-500 mb-4">— Written 2024 —</p>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
        A discovery case study for the designer community ArtStation. My goal of this
          exercise was to discover new opportunities for the platform. I've created a
          PDF that samples how I approach new products or features.

        </p>
      </section>

      {/* Image */}
      <section className="mb-2 md:mb-24 max-w-2xl mx-auto">
        <div className="flex flex-col items-center">
          <Link href="#" className="mb-2 border border-black hover:shadow-md transition-shadow">
            <div className="relative w-[500px] h-[400px] bg-gray-100">
              <Image
                src="https://res.cloudinary.com/lexlab/image/upload/c_crop,h_638/v1748525332/ArtStation_-_Case_Study_v7ltpy.png"
                alt="Overcast Case Study"
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </div>
      </section>

      {/* View PDF Button */}
      <section className="mb-12 text-center">
        <a
          href="/dribbble-case-study.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-600 hover:text-white transition-colors"
        >
          VIEW PDF →
        </a>
      </section>

      {/* Footer Links */}
      <footer className="text-center text-sm text-gray-500 space-x-2">
        {navLinks.map((link, index) => (
          <span key={link.href}>
            <Link href={link.href}>
              <span
                className={`hover:underline ${
                  pathname === link.href ? "text-black font-medium underline" : ""
                }`}
              >
                {link.label}
              </span>
            </Link>
            {index < navLinks.length - 1 && <span> • </span>}
          </span>
        ))}
      </footer>
    </div>
  );
}
