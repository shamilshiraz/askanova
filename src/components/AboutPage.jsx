import React from "react";

export default function AboutPage() {
  return (
    <div className="w-full font-[biondi]">
      {/* ABOUT US SECTION */}
      <section className="h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-light text-[#2f1316] py-10 tracking-wide">
          ABOUT US
        </h1>
        <div className="overflow-hidden rounded-3xl shadow-xl mb-8 max-w-7xl w-full">
          <img
            src="./askanova_landing.jpg"
            alt="About Us"
            className="w-full h-72 md:h-[480px] object-cover"
          />
        </div>
        <p className="text-[#2f1316] max-w-3xl text-sm md:text-base leading-relaxed font-light py-10">
          Our property agents have the experience, expertise, and business savvy
          to guide you in making the right investment, at the right place and
          the right price. Our property agents have the experience, expertise,
          and business savvy to guide you in making the right investment, at the
          right place and the right price.
        </p>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="h-screen bg-[#2f1316] flex flex-col md:flex-row py-10 items-center justify-center px-6 text-center md:text-left gap-12">
        <div className="overflow-hidden rounded-3xl shadow-xl max-w-sm">
          <img
            src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=80"
            alt="Mission and Vision"
            className="w-full h-100 object-cover"
          />
        </div>
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-wide">
            MISSION AND VISION
          </h2>
          <p className="text-[#f7f0f1] text-sm md:text-2xl leading-relaxed font-light mb-4">
            Our property agents have the experience, expertise, and business
            savvy to guide you in making the right investment, at the right
            place and the right price.
          </p>
          <p className="text-[#f7f0f1] text-sm md:text-2xl leading-relaxed font-light">
            Our property agents have the experience, expertise, and business
            savvy to guide you in making the right investment, at the right
            place and the right price.
          </p>
        </div>
      </section>
    </div>
  );
}
