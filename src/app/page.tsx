import Link from "next/link";
import Image from "next/image";
import { Zap } from "lucide-react";

const portfolioItems = [
  {
    id: "ellie",
    title: "FitSync AI",
    icon: <Zap size={70} strokeWidth={3} color="white" className="drop-shadow-md" />,
    href: "/ellie",
    bgColor: "bg-teal"
  },
  {
    id: "cohabz",
    title: "BlockBeacon",
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
    title: "Case Study: ArtStation",
    icon: (
      <Image
        src="https://res.cloudinary.com/lexlab/image/upload/v1748524703/ArtStation_logo_tukkno.png"
        alt="Stitcher Logo"
        width={150}
        height={60}
        className="object-contain"
      />
    ),
    href: "/dribbble",
    bgColor: "bg-light-pink"
  },
  {
    id: "stitcher",
    title: "Case Study: Overcast",
    icon: (
      <Image
        src="https://res.cloudinary.com/lexlab/image/upload/v1748524700/Overcast_logo_nr02l4.svg"
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
            <div
  className={`${item.bgColor} h-40 md:h-56 flex items-center justify-center relative group transition-all duration-300 cursor-pointer group-hover:scale-105`}
>
  {/* Icon (hide on hover) */}
  <div className="absolute group-hover:opacity-0 transition-opacity duration-300">
    {item.icon}
  </div>

  {/* Text (show on hover) */}
  <div className="opacity-0 group-hover:opacity-100 text-white text-2xl md:text-3xl font-medium transition-opacity duration-300 text-center px-4">
    {item.title}
  </div>
</div>

            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16 md:mb-24 max-w-3xl mx-auto">
        <blockquote className="text-lg md:text-xl leading-relaxed text-center italic">
          "[Muhammad] consistently exhibits exceptional technical acumen and a remarkable ability to devise effective solutions to complex challenges. His dedication to excellence is reflected not only in the quality of his work but also in his commitment to supporting colleagues and fostering a collaborative team environment. He is frequently recognized for his leadership, professionalism, and the positive influence he brings to every project. With his unique combination of technical proficiency and strategic thinking, Muhammad is a valuable asset to any organization and is poised to make a meaningful impact wherever he contributes.
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
