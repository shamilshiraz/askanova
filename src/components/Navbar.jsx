import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const barVariants = {
    closed: { rotate: 0, y: 0, opacity: 1 },
    open: { rotate: 0, y: 0, opacity: 0 },
  };

  const xVariants = {
    closed: { rotate: 0, opacity: 0, scale: 0 },
    open: { rotate: 0, opacity: 1, scale: 1 },
  };

  return (
    <nav className="flex sticky top-0 items-center justify-between bg-[#2f1316] h-[10vh] px-5 relative z-20">
      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
        className="flex flex-col justify-center items-center w-14 h-10 cursor-pointer relative z-50"
      >
        {/* Hamburger bars */}
        <motion.div
          animate={menuOpen ? "open" : "closed"}
          variants={barVariants}
          transition={{ duration: 0.2 }}
          className="w-[52px] h-[2px] bg-[#e1dedb] rounded-sm absolute -translate-y-[3px]"
        />
        <motion.div
          animate={menuOpen ? "open" : "closed"}
          variants={barVariants}
          transition={{ duration: 0.2 }}
          className="w-[52px] h-[2px] bg-[#e1dedb] rounded-sm absolute translate-y-[3px]"
        />

        {/* X shape */}
        <motion.div
          animate={menuOpen ? "open" : "closed"}
          variants={xVariants}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="w-[52px] h-[2px] bg-[#e1dedb] rounded-sm absolute rotate-45"
        />
        <motion.div
          animate={menuOpen ? "open" : "closed"}
          variants={xVariants}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="w-[52px] h-[2px] bg-[#e1dedb] rounded-sm absolute -rotate-45"
        />
      </button>

      {/* Center Logo */}
      <Link to={'/'} className="absolute left-1/2 -translate-x-1/2">
        <img src="./asknova_logo.png" alt="logo" className="h-[10vh]" />
      </Link>

      {/* Contact button (desktop only) */}
      <Link
        to="/contact"
        className="ml-auto px-3 py-[2px] border border-[#e1dedb] rounded-xl text-[#e1dedb] font-['note'] text-[0.95em] cursor-pointer hover:bg-[#e1dedb] hover:text-[#2b1516] transition "
      >
        Contact
      </Link>

      {/* Slide-in Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-full h-screen bg-black z-40"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 left-0 w-full lg:w-1/3 h-screen bg-[#2b1516] p-6 flex flex-col justify-center gap-8 z-50"
            >
              {/* Close button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 px-4 py-2 border border-[#e1dedb] rounded-xl text-[#e1dedb] font-['note'] text-sm hover:bg-[#e1dedb] hover:text-[#2b1516] transition"
              >
                Close
              </button>

              <ul className="space-y-8 text-center">
                <li onClick={() => setMenuOpen(false)}>
                  <Link
                    to="/"
                    className="text-[#e1dedb] text-6xl font-[note] block"
                  >
                    Home
                  </Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                  <Link
                    to="/about"
                    className="text-[#e1dedb] text-6xl font-[note] block"
                  >
                    About
                  </Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                  <Link
                    to="/services"
                    className="text-[#e1dedb] text-6xl font-[note] block"
                  >
                    Services
                  </Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                  <Link
                    to="/team"
                    className="text-[#e1dedb] text-6xl font-[note] block"
                  >
                    Team
                  </Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                  <Link
                    to="/contact"
                    className="text-[#e1dedb] text-6xl font-[note] block"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}