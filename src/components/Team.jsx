"use client";

const team = {
  ceo: {
    name: "Jamsheer A P",
    role: "CEO",
    image: "/asknova_team.jpg",
  },
  platinum: [
    { name: "Jamsheer A P", role: "Client Manager", image: "/asknova_team.jpg" },
    { name: "Jamsheer A P", role: "Client Manager", image: "/asknova_team.jpg" },
    { name: "Jamsheer A P", role: "Client Manager", image: "/asknova_team.jpg" },
  ],
  senior: [
    { name: "Jamsheer A P", role: "Client Manager", image: "/asknova_team.jpg" },
    { name: "Jamsheer A P", role: "Client Manager", image: "/asknova_team.jpg" },
    { name: "Jamsheer A P", role: "Client Manager", image: "/asknova_team.jpg" },
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
        <h1 className="text-[#f7f0f1] text-3xl md:text-5xl font-light tracking-wider font-[biondi] mb-16">
          OUR STRENGTH
        </h1>

        {/* CEO */}
        <div className="flex justify-center mb-20">
          <TeamCard person={team.ceo} />
        </div>

        {/* Platinum Managers */}
        <h2 className="text-[#f7f0f1] text-xl font-light tracking-widest mb-10">
          PLATINUM CLIENT MANAGERS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-20">
          {team.platinum.map((person, idx) => (
            <TeamCard key={idx} person={person} />
          ))}
        </div>

        {/* Senior Managers */}
        <h2 className="text-[#f7f0f1] text-xl font-light tracking-widest mb-10">
          SENIOR CLIENT MANAGERS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {team.senior.map((person, idx) => (
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
      <p className="text-[#] font-[biondi] text-sm tracking-wide">{person.role}</p>
    </div>
  );
}
