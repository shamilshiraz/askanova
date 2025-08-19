"use client";

export default function AboutUs() {
  return (
    <section className="bg-[#2f1316] text-[#f7f1f0] py-20 px-6 flex justify-center font-[biondi] text-center">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="mb-16">
          <p className="text-lg font-light mb-2 font-[note]">
            About Us
          </p>
          <h1 className="text-3xl md:text-5xl font-light tracking-wider font-[biondi]">
            Redefining Real Estate in Dubai
          </h1>
        </div>

        {/* Story */}
        <div className="space-y-6 font-light leading-relaxed mb-16">
          <p>
            Established in 2025, <span className="font-semibold">Askanova Real
            Estate LLC</span> is a next-generation brokerage redefining the Dubai
            property landscape. We blend the precision of financial advisory, the
            personal touch of lifestyle consultancy, and the seamless execution of
            a global firm.
          </p>
          <p>
            From the first consultation to the moment you step into your new home—or
            secure your investment—our approach is anchored in transparency, market
            intelligence, and uncompromising service.
          </p>
        </div>

        {/* Image */}
        <div className="w-full mb-20">
          <img
            src="/marina.png"
            alt="Askanova Real Estate Dubai skyline"
            className="w-full rounded-2xl shadow-md object-cover max-h-[500px] mx-auto"
          />
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-[note] mb-4">Our Mission</h2>
            <p className="font-light leading-relaxed">
              To empower individuals, families, and institutions with exceptional
              property decisions—through precision advisory, seamless transactions,
              and long-term asset growth.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-[note] mb-4">Our Vision</h2>
            <p className="font-light leading-relaxed">
              To become Dubai’s most trusted icon of real estate excellence—where
              every client journey evolves into a lasting legacy.
            </p>
          </div>
        </div>

        {/* Who We Serve */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-[biondi] mb-8">
            Who We Serve
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 font-light leading-relaxed">
            <li>
              <span className="font-semibold">End-users & Families:</span> Searching for a home that matches lifestyle aspirations.
            </li>
            <li>
              <span className="font-semibold">Global Investors & Family Offices:</span> Strategizing portfolios that appreciate in value.
            </li>
            <li>
              <span className="font-semibold">Landlords & Tenants:</span> Seeking smooth, transparent relationships.
            </li>
            <li>
              <span className="font-semibold">SMEs & Corporate Clients:</span> Aligning real estate with business growth.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
