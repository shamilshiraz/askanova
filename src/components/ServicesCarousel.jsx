import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      title: "Property Management",
      description:
        "End-to-end management of residential and commercial properties ensuring hassle-free ownership.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80",
      title: "Land Acquisition",
      description:
        "Assisting clients with buying and selling land, ensuring secure and profitable investments.",
    },
    {
      id: 3,
      image:
        "/downtown.jpeg",
      title: "Renting",
      description:
        "Connecting tenants and landlords with reliable rental solutions for homes and offices.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      title: "Furnishing",
      description:
        "Providing modern furnishing and interior design services to elevate your living spaces.",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      title: "Off Plan Properties",
      description:
        "Exclusive access to pre-construction properties with great investment potential.",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
      title: "Leasing",
      description:
        "Flexible leasing options tailored to both short-term and long-term needs.",
    },
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // Determine how many slides to show (1 for mobile, 3 for desktop)
  const slidesToShow =
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;

  return (
    <div className="min-h-screen bg-[#2f1316] py-20 flex items-center justify-center px-4">
      <div className="max-w-7xl w-full relative flex items-center justify-center overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:left-8 z-10 w-12 h-12 border border-[#a97a67] rounded-full 
                     flex items-center justify-center text-[#a97a67] 
                     transition-all duration-300 ease-in-out
                     hover:bg-[#a97a67] hover:text-[#f7f0f1] hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Slides */}
        <div className="w-full max-w-5xl mx-16 flex gap-12 justify-center items-center">
          {Array.from({ length: slidesToShow }).map((_, i) => {
            const slide = slides[(currentIndex + i) % slides.length];
            return (
              <div
                key={slide.id}
                className="flex flex-col items-center text-center max-w-xs"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-6">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-72 h-96 object-cover rounded-[2rem]"
                  />
                </div>
                <h3 className="text-[#f7f0f1] text-2xl font-light font-[biondi]">
                  {slide.title}
                </h3>
                <p className="text-[#a97a67] text-sm mt-2 font-light">
                  {slide.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 md:right-8 z-10 w-12 h-12 border border-[#a97a67] rounded-full 
                     flex items-center justify-center text-[#a97a67] 
                     transition-all duration-300 ease-in-out
                     hover:bg-[#a97a67] hover:text-[#f7f0f1] hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
