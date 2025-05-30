import Image from "next/image";
import Link from "next/link";

export default function ElliePage() {
  return (
    <div className="container-custom py-12 md:py-24">
      <section className="mb-16 md:mb-24">
        <h1 className="text-3xl md:text-5xl mb-6 mx-auto text-center">
          Ellie from Actively
        </h1>
        <p className="text-center text-light-gray italic">— Written 2018 —</p>
        <p className="mt-8 max-w-3xl mx-auto text-center">
          An AI-powered booking assistant for fitness classes and wellness experiences. The assistant is capable of booking, canceling, and rescheduling activities through text message conversations and with smart assistants.
        </p>
      </section>

      <section className="mb-16 md:mb-24">
        <div className="bg-teal p-12 rounded-md flex justify-center">
          <div className="relative w-full max-w-3xl h-[400px]">
            <Image
              src="https://ext.same-assets.com/2607913019/2480636310.png"
              alt="Ellie from Actively"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mb-16 md:mb-24">
        <h2 className="text-2xl font-bold mb-6">MY ROLE</h2>
        <p className="mb-4">
          As Product Manager for the assistant, I worked with our multidisciplinary team to take the assistant from conception to launch. I conducted research, user interviews, managed customer onboarding, oversaw AI training, and worked closely with the CEO, product designer and lead engineer.
        </p>
        <p>
          As the technical co-founder for Actively, I had additional responsibilities including product ownership, writing copy, and aiding in fundraising.
        </p>
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
