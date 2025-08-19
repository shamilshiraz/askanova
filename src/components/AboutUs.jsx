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
  <h2 className="text-2xl md:text-3xl font-[biondi] mb-8 text-center">
    Who We Serve
  </h2>
  <div className="grid md:grid-cols-4 gap-6">
    <div className="p-6 bg-[#2f1316] text-[#f7f1f0] rounded-2xl shadow-md border-2 border-yellow-600">
      <span className="font-semibold block mb-2">End-users & Families</span>
      <p className="font-light leading-relaxed">
        Searching for a home that matches lifestyle aspirations.
      </p>
    </div>
    <div className="p-6 bg-[#2f1316] text-[#f7f1f0] rounded-2xl shadow-md border-2 border-yellow-600">
      <span className="font-semibold block mb-2">Global Investors & Family Offices</span>
      <p className="font-light leading-relaxed">
        Strategizing portfolios that appreciate in value.
      </p>
    </div>
    <div className="p-6 bg-[#2f1316] text-[#f7f1f0] rounded-2xl shadow-md border-2 border-yellow-600">
      <span className="font-semibold block mb-2">Landlords & Tenants</span>
      <p className="font-light leading-relaxed">
        Seeking smooth, transparent relationships.
      </p>
    </div>
    <div className="p-6 bg-[#2f1316] text-[#f7f1f0] rounded-2xl shadow-md border-2 border-yellow-600">
      <span className="font-semibold block mb-2">SMEs & Corporate Clients</span>
      <p className="font-light leading-relaxed">
        Aligning real estate with business growth.
      </p>
    </div>
  </div>
</div>


      </div>
    </section>
  );
}
