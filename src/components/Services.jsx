export default function ServicesSection() {
  return (
    <div className="bg-[#f7f0f1] py-20 px-6 flex justify-center font-[biondi]">
      <div className="max-w-6xl w-full">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl  tracking-wide text-[#2f1316] mb-16">
          OUR SERVICES
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Image */}
          <div className="flex-shrink-0">
            <img
              src="/askanova_landing.jpg" // put your image path here
              alt="Dubai skyline"
              className="w-72 h-96 object-cover rounded-[2rem] shadow-lg"
            />
          </div>

          {/* Right: Text */}
          <div className="text-[#2f1316] space-y-8 text-xl sm:text-2xl leading-relaxed">
            <p>
              Our property agents have the experience, expertise, and business
              savvy to guide you in making the right investment, at the right
              place and the right price.
            </p>
            <p>
              Our property agents have the experience, expertise, and business
              savvy to guide you in making the right investment, at the right
              place and the right price.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
