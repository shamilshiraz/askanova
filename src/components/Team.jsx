"use client";

const leadership = [
  {
    name: "Aboobacker",
    role: "Chairman",
    email: "Aboobacker@askanova.ae",
    phone: "+971 56 782 3927",
    description:
      "Strategic leadership, governance, and partnerships that define Askanova’s client-first culture.",
    image: "/aboobacker.jpg",
  },
  {
    name: "Ayyoob Kalliyath",
    role: "Managing Director",
    phone: "+971 50 844 9793 | +971 54 765 4369",
    description:
      "Operational excellence, developer relations, and client growth strategies from onboarding to handover.",
    image: "/ayyoob.png",
  },
];

const consultants = [
  {
    name: "Abbas A.R",
    role: "Senior Property Consultant",
    description: "Residential investments, multi-sector insights.",
    image: "/abbas.jpg",
  },
  {
    name: "Aboothahir P.A",
    role: "Property Consultant",
    description: "Corporate leasing & relocation expertise.",
    image: "/abootahir.jpg",
  },
];

export default function TeamSection() {
  return (
    <div className="min-h-screen bg-[#f7f1f0] py-20 px-6 flex justify-center">
      <div className="max-w-7xl w-full text-center">
        {/* Header */}
        <p className="text-[#a97a67] text-lg font-light mb-2 font-[note]">
          Meet the team
        </p>
        <h1 className="text-[#2f1316] text-3xl md:text-5xl font-light tracking-wider font-[biondi] mb-6">
          OUR STRENGTH
        </h1>

        {/* Section Description */}
        <p className="text-[#2f1316] text-base md:text-lg max-w-3xl mx-auto mb-16 leading-relaxed font-[biondi]">
          Our team combines decades of expertise with fresh perspectives. With
          over 25 years of industry experience, we’ve built a reputation for
          excellence, dedication, and innovation — delivering value-driven
          solutions that our clients trust.
        </p>

        {/* Leadership Team */}
        <h2 className="text-[#2f1316] text-2xl md:text-3xl font-[biondi] mb-12">
          Leadership Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {leadership.map((person, idx) => (
            <TeamCard key={idx} person={person} />
          ))}
        </div>

        {/* Advisory Consultants */}
        <h2 className="text-[#2f1316] text-2xl md:text-3xl font-[biondi] mb-12">
          Advisory Consultants
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 justify-center">
          {consultants.map((person, idx) => (
            <TeamCard key={idx} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamCard({ person }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-6 transform transition-all duration-500 hover:scale-105">
        <img
          src={person.image}
          alt={person.name}
          className="object-cover w-72 h-96 md:w-80 md:h-[420px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <h3 className="text-[#a97a67] text-2xl font-light font-[note]">
        {person.name}
      </h3>
      <p className="text-[#2f1316] font-[biondi] text-sm tracking-wide mb-2">
        {person.role}
      </p>

      {/* Extra details */}
      {person.email && (
        <p className="text-[#2f1316] text-sm font-[biondi]">
          📧 {person.email}
        </p>
      )}
      {person.phone && (
        <p className="text-[#2f1316] text-sm font-[biondi]">
          📱 {person.phone}
        </p>
      )}
      {person.description && (
        <p className="text-[#2f1316] text-sm mt-3 font-[biondi] max-w-xs">
          {person.description}
        </p>
      )}
    </div>
  );
}
