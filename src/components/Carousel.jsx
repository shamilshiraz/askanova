import React from "react";
import { Link } from "react-router-dom";

export default function SpecialisationShowcase() {
  const slides = [
    {
      id: 1,
      image: "warehouse.webp",
      title: "Warehouse Management",
    },
    {
      id: 2,
      image: "ground.png",
      title: "Industrial Property",
    },
    {
      id: 3,
      image: "labour.avif",
      title: "Labour Camps",
    },
  ];

  const areas = {
    general: ["Qusais", "Ras Al Khor", "Al Quoz", "Warsan", "Jebel Ali"],
    warehouse: [
      "Sonapur",
      "Al Quoz",
      "Warsan",
      "Jebel Ali",
      "DIP (Dubai Investment Park)",
      "DIC (Dubai Industrial City)",
    ],
    labour: ["JAFZA Freezone", "Warehouse & Labour Camp"],
  };

  return (
    <div className="min-h-screen bg-[#2f1316] py-20 flex flex-col items-center justify-center px-4">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#a97a67] text-lg font-light mb-4 font-[note]">
            We Specialise In
          </p>
          <h1 className="text-[#f7f0f1] text-3xl md:text-6xl font-light tracking-wider font-[biondi]">
            WAREHOUSE & INDUSTRIAL REAL ESTATE
          </h1>
          <p className="text-[#f7f0f1]/70 mt-6 max-w-3xl mx-auto text-lg font-[note]">
            Our expertise lies in{" "}
            <span className="text-[#a97a67]">warehouse</span>,{" "}
            <span className="text-[#a97a67]">industrial property management</span>
            , and <span className="text-[#a97a67]">labour camps</span>. We
            provide tailored real estate solutions that meet the unique demands
            of businesses and communities.
          </p>
        </div>

        {/* Showcase */}
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex flex-col items-center transition-transform duration-500 hover:scale-105 w-full md:w-1/3"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-6 w-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <h3 className="text-[#a97a67] text-2xl font-light font-[note] text-center">
                {slide.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Areas */}
        <div className="mt-20 text-center">
          <h2 className="text-[#f7f0f1] text-2xl md:text-4xl font-light font-[biondi] mb-10">
            Primary Areas We Operate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left max-w-5xl mx-auto">
            {/* General Areas */}
            <div>
              <h3 className="text-[#a97a67] text-xl font-[note] mb-4">
                General
              </h3>
              <ul className="space-y-2 text-[#f7f0f1]/80 font-[note]">
                {areas.general.map((area, idx) => (
                  <li key={idx}>• {area}</li>
                ))}
              </ul>
            </div>

            {/* Warehouse */}
            <div>
              <h3 className="text-[#a97a67] text-xl font-[note] mb-4">
                Warehouse
              </h3>
              <ul className="space-y-2 text-[#f7f0f1]/80 font-[note]">
                {areas.warehouse.map((area, idx) => (
                  <li key={idx}>• {area}</li>
                ))}
              </ul>
            </div>

            {/* Labour Camp */}
            <div>
              <h3 className="text-[#a97a67] text-xl font-[note] mb-4">
                Labour Camp
              </h3>
              <ul className="space-y-2 text-[#f7f0f1]/80 font-[note]">
                {areas.labour.map((area, idx) => (
                  <li key={idx}>• {area}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/services"
            className="inline-block bg-[#a97a67] text-[#f7f0f1] px-8 py-4 rounded-2xl font-[note] text-lg tracking-wide hover:bg-[#8c5f50] transition-colors duration-300 shadow-lg"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}
