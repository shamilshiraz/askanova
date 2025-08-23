import React from "react";
import { motion } from "framer-motion";

export default function Process() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-[#f7f1f0] py-20 px-6 text-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-[#a97a67] text-lg font-light font-[note] mb-4">
            Our Development Journey
          </p>
          <h2 className="text-3xl md:text-5xl font-light font-[biondi] tracking-wider">
            From Land to Reality
          </h2>
        </motion.div>

        {/* Step 1 - Plain Land */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <img
            src="https://images.unsplash.com/photo-1672421187802-e7e2ee8a2e82?w=1000&auto=format&fit=crop&q=80"
            alt="Plain Land"
            className="rounded-3xl shadow-2xl w-full h-96 object-cover"
          />
          <p className="text-lg font-[note] leading-relaxed text-gray-800">
            Every journey begins with a blank canvas — a stretch of land waiting
            to be transformed. At this stage, surveys are conducted, the terrain
            is carefully studied, and groundwork preparations are made to ensure
            stability and compliance for future development.
          </p>
        </motion.div>

        {/* Step 2 - Construction Ongoing */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-lg font-[note] leading-relaxed text-gray-800 order-2 md:order-1">
            Once planning is complete, construction begins. Foundations are laid,
            scaffolding rises, and the framework of the project takes shape.
            During this stage, the site is alive with activity as skilled
            workers, machinery, and materials come together to build the
            backbone of the future facility.
          </p>
          <img
            src="https://images.unsplash.com/photo-1716915372367-c170ee1e7d24?w=1000&auto=format&fit=crop&q=80"
            alt="Construction Ongoing"
            className="rounded-3xl shadow-2xl w-full h-96 object-cover order-1 md:order-2"
          />
        </motion.div>

        {/* Step 3 - Warehouse Result */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <img
            src="https://images.unsplash.com/photo-1694885169342-909981fb408a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Completed Warehouse"
            className="rounded-3xl shadow-2xl w-full h-96 object-cover"
          />
          <p className="text-lg font-[note] leading-relaxed text-gray-800">
            The journey can culminate in the construction of a modern warehouse —
            designed with functionality in mind. These facilities provide
            efficient storage solutions, optimized layouts for logistics, and
            robust structures to support growing businesses in the UAE.
          </p>
        </motion.div>

        {/* Step 4 - Labour Camp Result */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-lg font-[note] leading-relaxed text-gray-800 order-2 md:order-1">
            Alternatively, the process may conclude with a well-planned labour
            camp. These developments are more than buildings; they create safe,
            practical, and community-focused living spaces that cater to the
            needs of workers while ensuring comfort, security, and sustainability.
          </p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmtrAyMVP9HzT_XdCKXVf9Tkl9xh20mCpkdA&s"
            alt="Completed Labour Camp"
            className="rounded-3xl shadow-2xl w-full h-96 object-cover order-1 md:order-2"
          />
        </motion.div>
      </div>
    </div>
  );
}
