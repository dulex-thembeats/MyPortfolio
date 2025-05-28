import Link from "next/link";

export default function MentorshipPage() {
  return (
    <div className="container-custom py-12 md:py-24">
      <section className="mb-16 md:mb-24">
        <h1 className="text-3xl md:text-5xl mb-8 mx-auto text-center">
          Mentorship
        </h1>
      </section>

      <section className="mb-16 md:mb-24 max-w-3xl mx-auto">
        <div className="text-center">
          <p className="mb-6">
            I offer mentorship to aspiring product managers and those looking to advance in their product management careers.
          </p>
          <Link
            href="mailto:mark@mprogano.com"
            className="inline-flex items-center justify-center h-12 px-8 border border-dark-gray text-dark-gray hover:bg-dark-gray hover:text-white transition-colors uppercase text-sm tracking-wider font-medium"
          >
            Contact for Mentorship
          </Link>
        </div>
      </section>
    </div>
  );
}
