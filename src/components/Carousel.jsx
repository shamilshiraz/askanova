import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function LifestyleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Beachfront" },
    { id: 2, image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Community" },
    { id: 3, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Luxury" },
    { id: 4, image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Modern" },
    { id: 5, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Elegant" },
    { id: 6, image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Serene" },
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-[#2f1316] py-20 flex items-center justify-center px-4">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#a97a67] text-lg font-light mb-4 font-[note]">
            Discover what suits you
          </p>
          <h1 className="text-[#f7f0f1] text-3xl md:text-6xl font-light tracking-wider font-[biondi]">
            EXPLORE YOUR LIFESTYLE
          </h1>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center overflow-hidden">
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
          <div className="w-full max-w-4xl mx-16 flex gap-8 md:gap-12 justify-center items-center">
            {[slides[currentIndex], slides[(currentIndex + 1) % slides.length]].map(
              (slide, idx) => (
                <div
                  key={slide.id}
                  className={`flex flex-col items-center transition-transform duration-700 ease-in-out ${
                    idx === 1 ? "hidden md:flex" : "flex"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-6 transform transition-all duration-500 hover:scale-105">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-72 h-96 md:w-80 md:h-[420px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <h3 className="text-[#a97a67] text-2xl font-light font-[note]">
                    {slide.title}
                  </h3>
                </div>
              )
            )}
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

        {/* Dots */}
        <div className="flex justify-center mt-12 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#a97a67] scale-125"
                  : "bg-[#a97a67]/30 hover:bg-[#a97a67]/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
