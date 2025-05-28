import Link from "next/link";

export default function ResumeReviewsPage() {
  return (
    <div className="container-custom py-12 md:py-24">
      <section className="mb-16 md:mb-24">
        <h1 className="text-3xl md:text-5xl mb-8 mx-auto text-center">
          Resume Reviews
        </h1>
      </section>

      <section className="mb-16 md:mb-24 max-w-3xl mx-auto">
        <div className="text-center">
          <p className="mb-6">
            I offer professional resume reviews for product managers. Get personalized feedback to help you stand out in a competitive job market.
          </p>
          <div className="mb-12 p-6 bg-slate-50 rounded-md">
            <h3 className="text-xl font-bold mb-4">New Service:</h3>
            <p className="mb-4">
              I will review your Product Manager resume and provide detailed feedback on structure, content, and positioning to help you land your dream role.
            </p>
            <Link
              href="mailto:mark@mprogano.com?subject=Resume Review Request"
              className="inline-flex items-center justify-center h-12 px-8 border border-dark-gray text-dark-gray hover:bg-dark-gray hover:text-white transition-colors uppercase text-sm tracking-wider font-medium"
            >
              Request a Review
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
