import Image from "next/image";
import Link from "next/link";

export default function StitcherPage() {
  return (
    <div className="container-custom py-12 md:py-24">
      <section className="mb-16 md:mb-24">
        <h1 className="text-3xl md:text-5xl mb-6 mx-auto text-center">
          Case Study: Stitcher
        </h1>
        <p className="mt-8 max-w-3xl mx-auto text-center">
          A case study of the popular podcast platform, exploring user experience and feature optimization.
        </p>
      </section>

      <section className="mb-16 md:mb-24">
        <div className="bg-dark-gray p-12 rounded-md flex justify-center">
          <div className="relative w-full max-w-3xl h-[400px]">
            <Image
              src="https://ext.same-assets.com/579272258/4272343917.png"
              alt="Stitcher Case Study"
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
