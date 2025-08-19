"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Prime Districts",
    places: [
      "Downtown Dubai",
      "Palm Jumeirah",
      "Dubai Marina",
      "Business Bay",
      "DIFC",
      "City Walk",
    ],
    img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Family & Emerging Communities",
    places: [
      "Dubai Hills Estate",
      "Arabian Ranches",
      "Mudon",
      "Town Square",
      "JVC / JVT",
      "MBR City",
    ],
    img: "https://images.unsplash.com/photo-1546412414-e1885259563a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHViYWl8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Commercial Hubs",
    places: [
      "DIFC",
      "Business Bay",
      "Sheikh Zayed Road",
      "Dubai South",
      "JAFZA",
    ],
    img: "https://images.unsplash.com/photo-1489516408517-0c0a15662682?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGR1YmFpfGVufDB8fDB8fHww",
  },
];

export default function DevelopersCommunities() {
  return (
    <section className="bg-[#f7f1f0] py-20 px-6">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="text-[#a97a67] text-lg font-[biondi]">
          Developers & Communities
        </p>
        <h2 className="text-3xl md:text-5xl font-[biondi] tracking-wide text-[#2f1316]">
          Redefining Real Estate
        </h2>
        <p className="mt-6 text-[#2f1316]/80 max-w-2xl mx-auto font-[biondi]">
          We proudly collaborate with Dubai’s leading developers—delivering
          clients first access to iconic properties and visionary masterplans.
          Our role is not just to source a property, but to match every client’s
          lifestyle goals or yield targets with the right community, building,
          and growth trajectory.
        </p>
      </div>

      {/* Grid */}
<div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
  {categories.map((cat, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.2 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-3xl shadow-xl bg-[#2f1316] text-[#f7f1f0]"
    >
      {/* Image */}
      <div className="relative h-56 w-full">
        <img
          src={cat.img}
          alt={cat.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <h3 className="absolute bottom-4 left-6 text-[#f7f1f0] text-2xl font-semibold">
          {cat.title}
        </h3>
      </div>

      {/* Content */}
      <div className="p-6 text-left">
        <ul className="space-y-2">
          {cat.places.map((place, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-[#f7f1f0] font-[biondi] tracking-wide"
            >
              • {place}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  ))}
</div>

    </section>
  );
}
