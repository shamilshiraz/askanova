"use client";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 px-6 flex justify-center">
      <div className="max-w-6xl w-full text-center">
        {/* Header */}
        <p className="text-[#a97a67] text-lg font-light mb-2 font-[note]">
          Why choose us
        </p>
        <h2 className="text-[#2f1316] text-3xl md:text-5xl font-light tracking-wider font-[biondi] mb-8">
          25+ Years of Excellence
        </h2>

        {/* Subheading / Description */}
        <p className="text-[#2f1316] text-base md:text-lg font-[biondi] max-w-3xl mx-auto mb-16 leading-relaxed font-light">
          For over <span className="font-semibold ">25 years</span>, we’ve been
          delivering trusted solutions that combine expertise, innovation, and
          reliability. Our reputation is built on integrity, a client-first
          approach, and results that stand the test of time.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Feature
            title="Decades of Experience"
            text="Our team brings more than two decades of proven industry knowledge and practical insights."
          />
          <Feature
            title="Client-Focused"
            text="We believe in building long-term partnerships by understanding and adapting to your needs."
          />
          <Feature
            title="Proven Results"
            text="With countless successful projects, we deliver strategies that create lasting value."
          />
        </div>
      </div>
    </section>
  );
}

function Feature({ title, text }) {
  return (
    <div className="p-10 bg-[#f7f1f0] rounded-3xl shadow-md hover:shadow-xl transition duration-300 text-center">
      <h3 className="text-[#a97a67] text-xl font-light mb-4 font-[note]">
        {title}
      </h3>
      <p className="text-[#2f1316] text-sm leading-relaxed font-[biondi]">
        {text}
      </p>
    </div>
  );
}
