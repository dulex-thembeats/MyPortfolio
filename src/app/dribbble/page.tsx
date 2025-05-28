import Image from "next/image";
import Link from "next/link";

export default function DribbblePage() {
  return (
    <div className="container-custom py-12 md:py-24">
      <section className="mb-16 md:mb-24">
        <h1 className="text-3xl md:text-5xl mb-6 mx-auto text-center">
          Case Study: Dribbble
        </h1>
        <p className="mt-8 max-w-3xl mx-auto text-center">
          A design exploration case study of the popular design community platform.
        </p>
      </section>

      <section className="mb-16 md:mb-24">
        <div className="bg-light-pink p-12 rounded-md flex justify-center">
          <div className="relative w-full max-w-3xl h-[400px]">
            <Image
              src="https://ext.same-assets.com/579272258/2717589449.jpeg"
              alt="Dribbble Case Study"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mb-8 md:mb-16">
        <Link
          href="/"
          className="inline-flex items-center justify-center h-12 px-8 border border-dark-gray text-dark-gray hover:bg-dark-gray hover:text-white transition-colors uppercase text-sm tracking-wider font-medium"
        >
          Back to Work
        </Link>
      </section>
    </div>
  );
}
