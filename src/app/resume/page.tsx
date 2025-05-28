import Link from "next/link";
import Image from "next/image";

export default function ResumePage() {
  return (
    <div className="container-custom py-12 md:py-24">
      <section className="mb-16 md:mb-24">
        <h1 className="text-3xl md:text-5xl mb-12 md:mb-16 mx-auto text-center">
          My Resume
        </h1>
      </section>

      <section className="mb-16 md:mb-24 max-w-2xl mx-auto">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-8 text-center">Resume in PDF Format:</h3>

          <Link href="#" className="mb-4 border border-dark-gray hover:shadow-md transition-shadow">
            <div className="relative w-[400px] h-[500px] bg-gray-100">
              <Image
                src="https://res.cloudinary.com/lexlab/image/upload/v1747067855/Muhammad_Abdulkadir-_CV.png_nwsbmv.png"
                alt="Mark Progano Resume"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          <Link
  href="/your-pdf-file.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center h-12 px-8 border border-dark-gray text-dark-gray hover:bg-dark-gray hover:text-white transition-colors uppercase text-sm tracking-wider font-medium"
>
  View as PDF
</Link>


          <p className="mt-4 text-sm text-light-gray">
            Updated Late 2024
          </p>
        </div>
      </section>

      <section className="mb-16 md:mb-24 max-w-3xl mx-auto">
        <blockquote className="text-lg md:text-xl leading-relaxed text-center italic">
        "Even with a full plate of responsibilities, Muhammad is someone you can always count on. His depth of knowledge—especially in technology—is remarkable, and he has a rare gift for translating complex ideas into clear, actionable insights. As a manager, he's meticulous and thoughtful, yet easygoing and a genuine pleasure to work with. One of his standout qualities is his ability to challenge assumptions in a way that sparks fresh thinking and leads to stronger outcomes.
          <footer className="mt-6 text-light-gray not-italic text-sm">
            — Nasir Mustapha, Founder; ITCentral.
          </footer>
        </blockquote>
      </section>
    </div>
  );
}
