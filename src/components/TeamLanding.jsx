import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ExpertsSection() {
  return (
    <div className="bg-[#2f1316] text-[#f7f0f1] py-20 flex flex-col items-center">
      {/* Heading */}
      <h1 className="font-[biondi] text-3xl sm:text-5xl mb-12 text-center">
        TALK TO EXPERTS
      </h1>

      {/* Chairman's Quote with Fade-in */}
      <motion.div
        className="flex flex-col items-center text-center max-w-3xl px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p className="font-[note] italic text-2xl sm:text-3xl leading-relaxed text-[#f7f0f1]">
          “True investment is not just about property, it’s about creating a
          legacy that stands the test of time.”
        </p>
        <div className="mt-6 mb-10">
          <p className="font-[biondi] text-xl">— Aboobacker, Chairman</p>
        </div>

        {/* CTA Button */}
        <Link
          to="/team"
          className="border border-[#a97a67] text-[#a97a67] px-6 py-3 rounded-full font-[note] text-lg hover:bg-[#f7f1f0] hover:text-[#2f1316] transition-all duration-300 ease-in-out"
        >
          Meet the team
        </Link>
      </motion.div>
    </div>
  );
}

export default ExpertsSection;
