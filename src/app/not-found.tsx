import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-custom py-24 md:py-32">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">404</h1>
        <h2 className="text-2xl font-medium mb-8">Page Not Found</h2>
        <p className="mb-8 text-light-gray">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center h-12 px-8 border border-dark-gray text-dark-gray hover:bg-dark-gray hover:text-white transition-colors uppercase text-sm tracking-wider font-medium"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
