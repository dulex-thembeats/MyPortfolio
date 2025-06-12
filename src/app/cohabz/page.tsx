"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BlockBeaconPage() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "All" },
    { href: "/ellie", label: "Fitsync AI" },
    { href: "/cohabz", label: "BlockBeacon" },
    { href: "/dribbble", label: "Case Study — ArtStation" },
    { href: "/stitcher", label: "Case Study — OverCast" },
  ];

  return (
    <div className="w-full px-4 md:px-8 py-12 md:py-24 flex flex-col items-center">
      <section className="mb-16 md:mb-24 w-full max-w-5xl text-center">
        <h1 className="text-3xl md:text-5xl mb-6">BlockBeacon</h1>
        <p className="text-light-gray italic">— Written 2025 —</p>
        <p className="mt-8 text-light-gray">A peer-powered NYC rental discovery tool.</p>
        <p className="text-light-gray">
          Tips, reviews, and transparency for newcomers — from real neighbors.
        </p>
      </section>

      <section className="mb-16 md:mb-24 w-full max-w-xl text-left">
        <h2 className="text-2xl font-bold mb-6">MY ROLE</h2>
        <p className="mb-4 text-light-gray">
          As the solo PM and researcher, I led concept development, market validation, early design sprints, and community interviews. I helped shape the initial MVP scope, wrote the PRD, and coordinated with our contract devs and UX partner.
        </p>
        <p className="text-light-gray">
          The goal: build a fast, trust-first site to help people feel confident renting in NYC.
        </p>
      </section>

      <section className="mb-16 md:mb-24 w-full flex flex-col md:flex-row items-start gap-8 max-w-5xl">
        <div className="w-full max-w-xl md:w-1/2">
          <Image
            src="/blockbeacon-preview.png"
            alt="BlockBeacon Screenshot"
            width={600}
            height={400}
            className="rounded-md shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-xl font-bold mb-4">PRODUCT</h2>
          <p className="mb-4 text-gray-600">
            BlockBeacon is a social-driven NYC neighborhood guide built to empower renters. Instead of relying on outdated broker listings, users can explore real reviews and tips from locals — covering noise, landlord behavior, hidden gems, and safety.
          </p>
          <p className="text-gray-600">
            Visitors can explore by borough, building, or street. Locals can contribute anonymously and "pay it forward" to help the next wave of renters. A map-based interface keeps it intuitive and browsable.
          </p>
        </div>
      </section>

      <section className="mb-16 md:mb-24 w-full max-w-xl text-left">
        <h2 className="text-2xl font-bold mb-6">INSIGHT</h2>
        <p className="mb-4 text-light-gray">
          NYC’s rental market is a black box — especially for newcomers. But locals know what it’s really like to live at that address. We believed giving them a voice could create networked trust, ease moving anxiety, and cut through shady listings.
        </p>
        <p className="text-light-gray">
          Early testers loved the idea of helping others dodge bad landlords or find vibrant blocks. We leaned into lightweight contribution and reward systems.
        </p>
      </section>

      <section className="mb-16 md:mb-24 w-full max-w-xl text-left">
        <h2 className="text-2xl font-bold mb-6">FEATURES</h2>
        <ul className="list-disc pl-6 space-y-2 text-light-gray">
          <li>Search by building, street, or borough</li>
          <li>Contribute anonymous reviews (good + bad)</li>
          <li>Browse interactive map with real photos and flags</li>
          <li>Bookmark neighborhoods and follow local contributors</li>
          <li>Upvote helpful tips or landlord red flags</li>
        </ul>
      </section>

      <section className="mb-16 md:mb-24 w-full max-w-xl text-left">
        <h2 className="text-2xl font-bold mb-6">KEY TAKEAWAYS</h2>
        <ul className="list-disc pl-6 space-y-2 text-light-gray">
          <li>Renting is emotional. Transparency helps users feel in control.</li>
          <li>Early community-building is critical. We seeded the app by hand with real stories from Reddit and subleases groups.</li>
          <li>Trust-first UX (moderation, anonymity, kindness cues) boosted post volume.</li>
          <li>Success came from giving people a reason to contribute, not just browse.</li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-500 space-x-2 mt-8">
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
