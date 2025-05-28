"use client";

import { X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="announcement-bar">
      <div className="container-custom flex items-center justify-center">
        <div className="flex items-center justify-center text-sm md:text-base">
          <span className="mr-1 font-semibold">New Service:</span>
          <span>I will review your Product Manager resume!</span>
          <Link href="/resume-reviews" className="ml-2 italic text-white hover:underline">
            Learn more...
          </Link>
        </div>
        <button
          className="absolute right-4 text-white hover:opacity-70"
          onClick={() => setIsVisible(false)}
          aria-label="Close announcement"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
