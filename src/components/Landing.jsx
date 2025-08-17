import React from "react";

export default function Landing() {
  return (
    <section
      className="relative h-[90vh] w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('./askanova_landing.jpg')" }} // replace with your image path
    >
      {/* Overlay (optional dark fade for readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Centered Text */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-['note']  tracking-wide">
          Askanova
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-[biondi] tracking-wide">
          Redefining Real Estate Experiences
        </p>
      </div>
    </section>
  );
}
