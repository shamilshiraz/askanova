import React from "react";
import { Link } from "react-router-dom";

function ExperienceExcellence() {
  return (
    <div className="bg-[#f7f0f1] text-[#2f1316] py-20 flex flex-col items-center">
      {/* Heading */}
      <h1 className="font-[biondi] text-3xl sm:text-6xl mb-10 text-center">
        EXPERIENCE EXCELLENCE
      </h1>

      {/* Image */}
      <img
        src="/askanova_landing.jpg" // replace with your actual image path
        alt="Dubai Skyline"
        className="w-[90%] max-w-5xl h-80 sm:h-[28rem] object-cover rounded-[8rem] shadow-md"
      />

      {/* Text */}
      <p className="font-[biondi] text-lg sm:text-xl mt-10 max-w-3xl text-center leading-relaxed">
        Our property agents have the experience, expertise, and business savvy
        to guide you in making the right investment, at the right place and the
        right price.
      </p>

      {/* Link */}
<Link
  to="/services"
  className="mt-8 font-[biondi] text-lg relative text-[#2f1316] hover:text-[#a97a67]
             after:absolute after:left-0 after:bottom-[-4px] after:h-[1px] after:w-0 after:bg-[#2f1316]
             after:transition-all after:duration-300 after:ease-in-out
             hover:after:w-full hover:after:bg-[#a97a67]"
>
  SERVICES
</Link>

    </div>
  );
}

export default ExperienceExcellence;
