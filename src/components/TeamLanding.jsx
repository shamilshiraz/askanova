import React from "react";
import { Link } from "react-router-dom";

function ExpertsSection() {
  return (
    <div className="bg-[#2f1316] text-[#f7f0f1] py-20 flex flex-col items-center">
      {/* Heading */}
      <h1 className="font-[biondi] text-3xl sm:text-5xl mb-12 text-center">
        TALK TO EXPERTS
      </h1>

      {/* Content */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-10 sm:gap-20 max-w-6xl px-6">
        
        {/* Image + Text under it */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/aboo.jpg" // replace with actual path
            alt="Expert"
            className="w-80 h-100 object-cover rounded-3xl shadow-lg"
          />
          <div className="mt-4 text-center sm:text-center">
            <p className="font-[biondi] text-xl">Chairman</p>
            <p className="font-[biondi] text-xl">Aboobacker@askanova.ae</p>
            <p className="font-[biondi] text-lg text-[#a97a67]">+971 56 782 3927</p>
          </div>
        </div>

        {/* Text + Button */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left max-w-xl">
          <p className="font-[biondi] text-2xl sm:text-4xl leading-relaxed tracking-wide mb-8">
            Our property agents have the experience, expertise, and business
            savvy to guide you in making the right investment, at the right
            place and the right price.
          </p>
          <Link
            to="/team"
            className="border border-[#a97a67] text-[#a97a67] px-6 py-3 rounded-full font-[note] text-lg hover:bg-[#f7f1f0] hover:text-[#2f1316] transition-all duration-300 ease-in-out"
          >
            Meet the team
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ExpertsSection;
