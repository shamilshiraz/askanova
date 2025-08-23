"use client";

const team = {
  chairman: {
    name: "Aboobacker Vattaparambil",
    role: "Chairman",
    image: "/aboobacker.jpg",
  },
  consultants: [
    { name: "Abbas A R", role: "Consultant", image: "/abbas.jpg" },
    { name: "Aboothahir P A", role: "Consultant", image: "/abootahir.jpg" },
        { name: "Ayyoob", role: "Consultant", image: "/ayyoob.png" },
  ],
};

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
          Our team combines decades of expertise with fresh perspectives. 
          With over 25 years of industry experience, we’ve built a reputation 
          for excellence, dedication, and innovation — delivering value-driven 
          solutions that our clients trust.
        </p>

        {/* Chairman */}
        <div className="flex justify-center mb-20">
          <TeamCard person={team.chairman} />
        </div>

        {/* Consultants */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 justify-center">
          {team.consultants.map((person, idx) => (
            <TeamCard key={idx} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamCard({ person }) {
  return (
    <div className="flex flex-col items-center">
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
      <p className="text-[#2f1316] font-[biondi] text-sm tracking-wide">
        {person.role}
      </p>
    </div>
  );
}
