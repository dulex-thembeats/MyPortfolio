import Link from "next/link";
import Image from "next/image";
import { Zap } from "lucide-react";

const portfolioItems = [
  {
    id: "ellie",
    title: "Ellie from Actively",
    icon: <Zap size={70} strokeWidth={3} color="white" className="drop-shadow-md" />,
    href: "/ellie",
    bgColor: "bg-teal"
  },
  {
    id: "cohabz",
    title: "Cohabz",
    icon: (
      <svg width="80" height="70" viewBox="0 0 100 100" className="text-white">
        <path
          fill="currentColor"
          d="M20 80 L50 20 L80 80 Z"
        />
      </svg>
    ),
    href: "/cohabz",
    bgColor: "bg-pink"
  },
  {
    id: "dribbble",
    title: "Case Study: Dribbble",
    icon: (
      <svg width="100" height="60" viewBox="0 0 100 100" className="text-[#f48fb1]">
        <circle cx="50" cy="50" r="45" fill="transparent" stroke="currentColor" strokeWidth="4" />
        <path
          fill="transparent"
          stroke="currentColor"
          strokeWidth="4"
          d="M25 50 C25 37 37 25 50 25 C63 25 75 37 75 50 C75 63 63 75 50 75 C37 75 25 63 25 50"
        />
        <path
          fill="transparent"
          stroke="currentColor"
          strokeWidth="4"
          d="M75 25 C63 37 37 37 25 25"
        />
        <path
          fill="transparent"
          stroke="currentColor"
          strokeWidth="4"
          d="M75 75 C63 63 37 63 25 75"
        />
      </svg>
    ),
    href: "/dribbble",
    bgColor: "bg-light-pink"
  },
  {
    id: "stitcher",
    title: "Case Study: Stitcher",
    icon: (
      <Image
        src="https://ext.same-assets.com/579272258/4272343917.png"
        alt="Stitcher Logo"
        width={150}
        height={60}
        className="object-contain"
      />
    ),
    href: "/stitcher",
    bgColor: "bg-black"
  }
];

export default function Home() {
  return (
    <div className="container-custom py-12 md:py-24">
      <section className="mb-16 md:mb-24">
        <h1 className="text-3xl md:text-5xl mb-12 md:mb-16 max-w-4xl mx-auto text-center leading-tight">
          — Muhammad is a Product Manager with a maker’s mindset, a tinkerer, technophile, and gadget lover based in Nigeria...
          </h1>
      </section>

      <section className="mb-16 md:mb-24">
        <div className="grid grid-cols-2 gap-0 max-w-4xl mx-auto overflow-hidden">
          {portfolioItems.map((item) => (
            <Link key={item.id} href={item.href} className="block">
              <div className={`${item.bgColor} h-40 md:h-56 flex items-center justify-center`}>
                {item.icon}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16 md:mb-24 max-w-3xl mx-auto">
        <blockquote className="text-lg md:text-xl leading-relaxed text-center italic">
          "[Muhammad] consistently exhibits exceptional technical acumen and a remarkable ability to devise effective solutions to complex challenges. His dedication to excellence is reflected not only in the quality of his work but also in his commitment to supporting colleagues and fostering a collaborative team environment. He is frequently recognized for his leadership, professionalism, and the positive influence he brings to every project. With his unique combination of technical proficiency and strategic thinking, Muhammad is a valuable asset to any organization and is poised to make a meaningful impact wherever he contributes
          <footer className="mt-6 text-light-gray not-italic text-sm">
            — Abdullahi Bature, Co-Founder @ Schoola, Curri-AI (Direct Manager).
          </footer>
        </blockquote>
      </section>

      <section className="flex justify-center">
        <Link
          href="/about"
          className="inline-flex items-center justify-center h-12 px-8 py-4 border border-dark-gray text-dark-gray hover:bg-dark-gray hover:text-white transition-colors uppercase text-sm tracking-wider font-medium"
        >
          ABOUT + CONNECT
        </Link>
      </section>
    </div>
  );
}
