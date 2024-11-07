"use client";
import { useState } from "react";

interface Props {
  className?: string;
}

export default function Toggle({ className }: Props) {
  const [active, setActive] = useState(true);

  return (
    <button
      className={`w-10 h-6 flex items-center rounded-full p-[3px] bg-black ${active ? "justify-end" : "justify-start"} ${className}`}
      onClick={() => setActive((prev) => !prev)}
    >
      <span className="w-1/2 min-h-full rounded-full bg-white"></span>
    </button>
  );
}
