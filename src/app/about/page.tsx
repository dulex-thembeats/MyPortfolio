import Link from "next/link";
import Image from "next/image";
import { LinkedinIcon, MailIcon } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container-custom py-12 md:py-24">
      <section className="mb-16 md:mb-24">
        <h1 className="text-3xl md:text-5xl mb-8 mx-auto text-center">
          About Muhammad  
        </h1>
      </section>

      <section className="mb-16 md:mb-24">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Product Manager Leader</h2>
          <h3 className="text-lg md:text-xl">
            Data-Driven, Detail-Oriented,<br />
            Problem Solver
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold mb-6">Bio</h2>
            <div className="space-y-4">
              <p>
              As a seasoned product leader with a background in web engineering, I bring a rare blend of technical rigor, user empathy, and business insight to every product I help build. I’m passionate about crafting experiences that are not only technically sound but also intuitive, delightful, and rooted in real user needs.
              </p>
              <p>
              With a data-driven mindset, I use analytics to uncover behavior patterns, validate assumptions, and guide product strategy. My approach is grounded in measurable impact—turning insights into decisions that fuel growth and drive meaningful outcomes.
              </p>
              <p>
              My engineering foundation sharpened my problem-solving skills and attention to detail—skills that now enable seamless collaboration with cross-functional teams. From developing product requirements and wireframes to prototyping and modeling, I thrive at the intersection of clarity, creativity, and execution.Beyond product development, I bring hands-on experience in data analytics, digital marketing, and conversion optimization. These disciplines allow me to spot market opportunities, weigh trade-offs, and prioritize initiatives aligned with strategic goals.
              </p>
              <p>
              I’ve also had the privilege of mentoring other product managers—an experience that’s strengthened my leadership and deepened my understanding of what it takes to build successful, customer-centric products.

At the core of my work is a holistic view of the user journey. I ask hard questions, challenge assumptions, and seek opportunities to refine every touchpoint. My goal is simple: deliver innovative, high-impact products that not only meet expectations—but exceed them.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 flex flex-col items-center gap-8">
  {/* First Image */}
  <div className="relative w-64 h-80 md:w-80 md:h-96">
    {/* Underlying Image */}
    <div className="absolute -top-4 -left-4 w-full h-full z-0">
      <Image
        src="https://res.cloudinary.com/lexlab/image/upload/v1747056801/IMG_2895_gydciz.jpg"
        alt="Background Image 1"
        fill
        className="object-cover"
      />
    </div>
  </div>

  {/* Second Image */}
  <div className="relative w-64 h-80 md:w-80 md:h-96">
    {/* Underlying Image */}
    <div className="absolute -top-4 -left-4 w-full h-full z-0">
      <Image
        src="https://res.cloudinary.com/lexlab/image/upload/v1747065664/Untitled_design.png_d2nlbf.png"
        alt="Background Image 2"
        fill
        className="object-cover"
      />
    </div>
  </div>
</div>
  </div>
      </section>

      <section className="mb-16 md:mb-24 max-w-3xl mx-auto">
        <blockquote className="text-lg md:text-xl leading-relaxed text-center italic">
          "Muhammad brings a rare blend of product strategy, data fluency, and technical expertise. He is drawn to complex challenges and excels at addressing not only the immediate issue but also identifying and resolving the underlying systemic causes. His ability to think holistically and build scalable solutions makes him an invaluable contributor to any product organization."
          <footer className="mt-6 text-light-gray not-italic text-sm">
            — Usman Murtala, Chief Frontend Developer @ Lexington Technologies.
          </footer>
        </blockquote>
      </section>

      <section className="mb-16 md:mb-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Noteworthy Skills</h2>
          <div className="space-y-4">
            <p>
            I bring a multidisciplinary toolkit to product management, blending technical fluency, user-centered design, and business strategy. With a deep understanding of the full product lifecycle—from customer discovery and journey mapping to hypothesis testing and data analysis—I build solutions that are thoughtful, scalable, and impactful.

            </p>
            <p>
<b>Core Competencies</b>
<b>Product Development:</b>  Customer interviews, journey mapping, hypothesis validation, KPI setting, and growth strategy. UX & Design Thinking: Skilled in applying user-centered design principles to craft intuitive, high-impact experiences. Data-Driven Decision Making: Proficient in analyzing user behavior to inform roadmap priorities and optimize performance.
            </p>
  <p>
<b>Tools & Platforms</b>
  </p>

  <p>
<b>Product & Collaboration:</b> Notion, Google Sheets, Figma, Whimsical, Optimizely, MixPanel, Mode, Looker, Salesforce. Project Management: Linear, Jira, Asana, ClickUp | Familiar with Agile, Scrum, and Lean methodologies.
   </p>
            <p>
<b>Analytics & Automation:</b> SQL, RegEx, Python (Pandas), PHP, JSON, APIs | Experience with LangChain and OpenAI tools. Web & Data Tech: HTML/CSS, webhooks, automation pipelines, and basic back-end scripting.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16 md:mb-24">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
          <div className="flex justify-center space-x-4 mb-6">
            <Link
              href="https://www.linkedin.com/in/muhammad-abdulkadir/"
              target="_blank"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <LinkedinIcon size={24} />
            </Link>
            <Link
              href="mailto:dulex51@hotmail.com"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <MailIcon size={24} />
            </Link>
          </div>
          <p className="max-w-2xl mx-auto mb-6">
            Please don't hesitate to reach out if you would like to chat about work or side project opportunities, share your feedback and input, or just connect. I am always open to new conversations and will do my best to respond to you in a timely manner. Cheers!
          </p>
          <Link
            href="mailto:dulex51@hotmail.com"
            className="inline-flex items-center justify-center h-12 px-8 border border-dark-gray text-dark-gray hover:bg-dark-gray hover:text-white transition-colors uppercase text-sm tracking-wider font-medium"
          >
            Contact Me
          </Link>
        </div>
      </section>

      <section className="mb-16 md:mb-24">
        <blockquote className="text-lg md:text-xl leading-relaxed text-center italic max-w-3xl mx-auto">
          "Muhammad consistently demonstrates a high level of creative initiative and intellectual curiosity. He excels at bridging current work with emerging trends, technologies, and ideas, and approaches research and collaboration with confidence and generosity. His willingness to share knowledge and foster opportunities for others makes him a standout contributor in any environment."
          <footer className="mt-6 text-light-gray not-italic text-sm">
            — Abdul-alim L., Co-founder/CTO @ Schoola Ltd
          </footer>
        </blockquote>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">Muhammad According to Instagram</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((index) => (
            <div key={`instagram-${index}`} className="aspect-square bg-gray-100" />
          ))}
        </div>
      </section>
    </div>
  );
}
