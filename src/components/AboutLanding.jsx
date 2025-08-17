import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutLanding() {
  return (
    <div className="py-20 bg-[#efeceb] flex flex-col items-center justify-center px-6 text-center">
      {/* Small Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-['note'] text-lg text-[#2b1516] mb-6"
      >
        Welcome to Asknova Properties
      </motion.h2>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        className="font-['biondi'] text-3xl md:text-5xl font-bold tracking-wide text-[#2b1516] mb-6"
      >
        UNPARALLELED DEDICATION. <br /> INCOMPARABLE ACHIEVEMENTS
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="font-['biondi'] text-base md:text-lg max-w-3xl text-[#2b1516]/90 leading-relaxed mb-10"
      >
        Elite Property is an award-winning real estate brokerage headquartered in
        Dubai. Founded by a passionate team of seasoned real estate
        professionals, we focus on advising our clients about property
        investments in Dubai &amp; the United Kingdom.
      </motion.p>

      {/* Link with animation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <Link
          to="/about"
          className="relative font-['note'] text-lg text-[#2b1516] cursor-pointer group"
        >
          About
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#2b1516] transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </motion.div>
    </div>
  );
}
