"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FitSyncPage() {
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
  <h1 className="text-3xl md:text-5xl mb-6">FitSync AI</h1>
  <p className="text-light-gray italic">— Written 2025 —</p>
  <p className="mt-8 text-light-gray">
  The AI Fitness Companion</p>
<p className="text-light-gray">Get smarter training plans, class scheduling, nutrition coaching, and progress tracking </p>
<p className="text-light-gray">-all personalized through your fitness data</p>
  

  <div className="mt-12 w-full">
    <div className="mx-auto w-full max-w-5xl bg-teal p-12 rounded-md flex justify-center">
      <div className="relative w-full h-[400px]">
        <Image
          src="https://res.cloudinary.com/lexlab/image/upload/v1748876245/screencapture-c43f63fb-1966-4dd5-9754-26fc92b4cd52-00-33u5bj6r1pm1c-spock-replit-dev-2025-06-02-13_50_48_woswzi.png"
          alt="FitSync AI Screenshot"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  </div>
</section>

    
          <section className="mb-16 md:mb-24 w-full max-w-xl text-left">
            <h2 className="text-2xl font-bold mb-6">MY ROLE</h2>
            <p className="mb-4 text-light-gray">
              As the Product Manager and concept lead for FitSync AI, I owned the product from early ideation to initial MVP rollout. I worked closely with machine learning engineers, a UX designer, and fitness industry advisors to ensure we built something both innovative and deeply useful.
            </p>
            <p className="text-light-gray">
              I also led user research, guided the roadmap, helped position the concept for pilot partnerships, and created strategic documentation for stakeholders.
            </p>
          </section>
    
          <section className="mb-16 md:mb-24 w-full flex flex-col md:flex-row items-start gap-8 max-w-5xl">
  {/* Left side — static image */}
  <div className="w-full max-w-xl md:w-1/2">
    <img
      src="https://res.cloudinary.com/lexlab/image/upload/v1748876011/screencapture-c43f63fb-1966-4dd5-9754-26fc92b4cd52-00-33u5bj6r1pm1c-spock-replit-dev-2025-06-02-13_50_48_u1nae0.png" // Replace with actual path
      alt="Meet FitSync AI"
      className="w-full h-auto object-cover rounded-md shadow-md"
    />
  </div>

  {/* Right side — product description */}
  <div className="w-full md:w-1/2 text-left">
    <h2 className="text-xl font-bold mb-4">PRODUCT</h2>
    <p className="mb-4 text-gray-600">
    FitSync AI is a full-stack AI-powered fitness assistant that helps users plan and optimize their workouts, classes, and overall wellness journey. Unlike traditional booking bots, FitSync syncs across wearables, nutrition trackers, gym software, and calendars — creating a fully personalized plan for each user.

Through natural language conversations or app interactions, users can:

Book, cancel, or reschedule fitness classes and PT sessions.

Get personalized training plans that adapt weekly based on progress.

Receive daily health tips and nutrition advice.

Track their sleep, workouts, and macros via integrations with wearables and food-logging apps.

Get real-time form feedback using optional computer vision tools.

On the coach/gym side, FitSync includes a dashboard with real-time insights from client biometrics, attendance, and performance, helping trainers scale their programs without sacrificing personalization.
    </p>
    <p className="text-gray-600">
      The assistant knows who the customer is, what studios they frequent, and their account information; there's nothing to download and no additional logins. When a class is booked, it instantly shows up in the fitness studio's management platform and the customer is charged by the studio. The customer can be as specific or general when asking for class times and bookings. The assistant handles the entire digital guest experience for the studio without extra input from the staff.
    </p>
  </div>
</section>

    
          <section className="mb-16 md:mb-24 w-full max-w-xl text-left">
            <h2 className="text-2xl font-bold mb-6">EVOLUTION (ORIGIN STORY)</h2>
            <p className="mb-4 text-light-gray">
            The idea came from repeated friction I noticed in gyms: users missed classes due to poor scheduling tools, trainers juggled multiple clients with outdated spreadsheets, and gym apps lacked personalization. I asked: What if one system could learn everything about your fitness journey and proactively help?

We started with a simple class-booking assistant — a bot that could handle recurring bookings and suggest nearby classes via SMS or voice. But that quickly expanded once we saw how much users appreciated automated suggestions. We added goal setting, habit tracking, and AI-generated workout plans — eventually connecting with wearables and food tracking apps to power deeper insights.

Key user needs and challenges we discovered:

Gym-goers wanted motivation and accountability.

Coaches needed better visibility across multiple clients.

Studios lacked time or budget to invest in custom apps.

Our pivot was clear: create a smarter personal coach + gym ops assistant that learns over time and works seamlessly across devices and services.
            </p>
            <p className="text-light-gray">
              Our north star: one system to plan, sync, and support the user’s entire fitness journey — while giving coaches better tools to manage clients.
            </p>
          </section>
    
          <section className="mb-16 md:mb-24 w-full text-center bg-[#f1f3fd] py-12 px-4 rounded-md">
            <h2 className="text-xs tracking-widest text-dark-gray uppercase mb-2">FEATURED STUDIOS</h2>
            <h3 className="text-xl md:text-2xl mb-6 font-medium">Available at Top Locations</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <Image src="/studio-surfset.png" alt="Surfset NYC" width={100} height={50} />
              <Image src="/studio-bari.png" alt="Bari Studio" width={80} height={50} />
              <Image src="/studio-rise.png" alt="Rise" width={100} height={50} />
              <Image src="/studio-milehigh.png" alt="Mile High Run Club" width={120} height={50} />
              <Image src="/studio-y7.png" alt="Y7 Studio" width={60} height={50} />
            </div>
          </section>
    
          <section className="mb-16 md:mb-24 w-full max-w-xl text-left">
            <h2 className="text-2xl font-bold mb-6">FEATURED PARTNERS</h2>
            <ul className="list-disc pl-6 space-y-2 text-light-gray">
              <li>MyFitnessPal (nutrition tracking)</li>
              <li>Apple Health / WHOOP / Fitbit (biometric data)</li>
              <li>ClassPass and Glofox (class schedules)</li>
              <li>Google Calendar (availability)</li>
            </ul>
          </section>
    
          <section className="mb-16 md:mb-24 w-full max-w-xl text-left">
            <h2 className="text-2xl font-bold mb-6">METRICS</h2>
            <ul className="list-disc pl-6 space-y-2 text-light-gray">
              <li>10x improvement in class booking adherence during pilots</li>
              <li>30% higher weekly fitness engagement vs control group</li>
              <li>Over 1M data points tracked from wearables in 90 days</li>
              <li>Rolled out across 5 gyms and 12 personal trainers</li>
              <li>Over 80% of users opted in for nutrition + form feedback extensions.</li>
            </ul>
          </section>
    
          <section className="mb-16 md:mb-24 w-full max-w-xl text-left">
            <h2 className="text-2xl font-bold mb-6">KEY TAKEAWAYS</h2>
            <ul className="list-disc pl-6 space-y-2 text-light-gray">
              <li>AI is most powerful when it’s invisible — users want helpful nudges, not a robot overlord. The assistant’s success depended on natural, human-like interactions</li>
              <li> Integration invention — rather than building from scratch, syncing with existing tools and APIs let us offer 10x value without forcing behavior change.</li>
              <li>Product-market fit starts with empathy — early research with gym-goers and trainers made it clear they needed one system that could flex across goals, devices, and communication channels.</li>
              <li>Balance automation with trust — giving users control over notifications, plan changes, and health recommendations was key to long-term engagement.</li>
              <li>Scalability came from coaching tools — allowing trainers to manage 10–15 clients at once (instead of 4–5) meant studios could offer semi-custom programs at lower prices — and make more revenue.</li>
            </ul>
          </section>
    
          <section className="mb-16 md:mb-24 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative w-full h-[200px]">
                <Image src="/placeholder-dashboard-1.png" alt="Dashboard Preview 1" fill className="object-contain" />
              </div>
              <div className="relative w-full h-[200px]">
                <Image src="/placeholder-dashboard-2.png" alt="Dashboard Preview 2" fill className="object-contain" />
              </div>
              <div className="relative w-full h-[200px]">
                <Image src="/placeholder-dashboard-3.png" alt="Dashboard Preview 3" fill className="object-contain" />
              </div>
            </div>
          </section>

      {/* Footer Navigation */}
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
