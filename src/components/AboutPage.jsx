import React from "react";

export default function AboutPage() {
  return (
    <div className="w-full font-[biondi]">
      {/* ABOUT US SECTION */}
      <section className="h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-light text-[#2f1316] py-10 tracking-wide">
          ABOUT US
        </h1>
        <div className="overflow-hidden rounded-3xl shadow-xl mb-8 max-w-7xl w-full">
          <img
            src="./askanova_landing.jpg"
            alt="About Us"
            className="w-full h-72 md:h-[480px] object-cover"
          />
        </div>
        <p className="text-[#2f1316] max-w-3xl text-sm md:text-base leading-relaxed font-light py-10">
          We are more than just property consultants – we are partners in your
          journey to finding the right space that complements your lifestyle and
          long-term vision. With years of expertise and deep market insights, we
          pride ourselves on offering tailored guidance that goes beyond the
          transaction. Whether you are buying your first home, expanding an
          investment portfolio, or seeking the perfect commercial space, we
          ensure you make the right investment at the right time.
        </p>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="h-screen bg-[#2f1316] flex flex-col md:flex-row py-10 items-center justify-center px-6 text-center md:text-left gap-12">
        <div className="overflow-hidden rounded-3xl shadow-xl max-w-sm">
          <img
            src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=80"
            alt="Mission and Vision"
            className="w-full h-100 object-cover"
          />
        </div>
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-wide">
            MISSION AND VISION
          </h2>
          <p className="text-[#f7f0f1] text-sm md:text-2xl leading-relaxed font-light mb-4">
            Our mission is simple yet powerful – to connect people with
            properties that enrich their lives, foster community, and create
            long-term value. We strive to be a trusted partner that guides every
            client with clarity, confidence, and care.
          </p>
          <p className="text-[#f7f0f1] text-sm md:text-2xl leading-relaxed font-light">
            Our vision is to redefine property ownership and investment by
            blending expertise, innovation, and integrity. We aim to set a new
            benchmark in real estate – where success is measured not only by
            transactions but by the relationships we build and the dreams we
            help realize.
          </p>
        </div>
      </section>

      {/* WHO WE SERVE SECTION */}
      <section className="py-20 bg-white px-6">
        <h2 className="text-3xl md:text-4xl font-light text-[#2f1316] mb-12 text-center">
          WHO WE SERVE
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              title: "End-users & Families",
              desc: "Helping families and individuals discover homes that truly reflect their lifestyle aspirations, offering comfort, security, and long-term happiness.",
            },
            {
              title: "Global Investors & Family Offices",
              desc: "Advising international investors with tailored strategies to maximize returns and build future-proof property portfolios.",
            },
            {
              title: "Landlords & Tenants",
              desc: "Creating seamless connections between landlords and tenants through transparent processes and fair agreements.",
            },
            {
              title: "SMEs & Corporate Clients",
              desc: "Supporting businesses by aligning real estate solutions with their growth objectives, ensuring spaces that drive productivity and expansion.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#2f1316] text-[#f7f1f0] rounded-2xl shadow-md border-2 border-yellow-400"
            >
              <span className="font-semibold block mb-2">{item.title}</span>
              <p className="font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CORE VALUES SECTION */}
      <section className="py-20 bg-[#f7f1f0] px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-[#2f1316] mb-12">
          OUR CORE VALUES
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-8 bg-white rounded-2xl shadow-md border border-[#2f1316]/20">
            <h3 className="font-semibold text-xl mb-3 text-[#2f1316]">Integrity</h3>
            <p className="text-sm font-light text-[#2f1316] leading-relaxed">
              We build trust through honesty, accountability, and transparency.
              Our clients know they can rely on us to act with fairness and
              consistency in every decision.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-md border border-[#2f1316]/20">
            <h3 className="font-semibold text-xl mb-3 text-[#2f1316]">Innovation</h3>
            <p className="text-sm font-light text-[#2f1316] leading-relaxed">
              By embracing modern tools and market insights, we craft solutions
              that keep our clients ahead of the curve in a rapidly changing
              real estate landscape.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-md border border-[#2f1316]/20">
            <h3 className="font-semibold text-xl mb-3 text-[#2f1316]">Commitment</h3>
            <p className="text-sm font-light text-[#2f1316] leading-relaxed">
              Every client’s goal becomes our own. We are committed to guiding
              them with focus, dedication, and the determination to deliver the
              best possible results.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
