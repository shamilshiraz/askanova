"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Industrial Warehouses",
    description:
      "Strategically located warehouses across Middle East and the India designed for storage, logistics, and large-scale operations. Our team manages sales, leasing, and compliance to ensure businesses operate smoothly.",
    features: [
      "Custom-built storage and distribution facilities.",
      "Long-term leases with flexible scaling options.",
      "Compliance with industrial zoning and safety standards.",
    ],
    image: "/warehouse.webp",
  },
  {
    title: "Labour Camps",
    description:
      "Purpose-built staff accommodations that prioritize comfort, compliance, and operational efficiency. We support clients in sourcing, developing, and managing labour camps across key industrial hubs.",
    features: [
      "Turnkey solutions for workforce housing.",
      "DDA, Civil Defence & HSE compliant facilities.",
      "End-to-end management including utilities and maintenance.",
    ],
    image: "/labour.avif",
  },
  {
    title: "Luxury Rentals",
    description:
      "Fully serviced apartments and premium commercial spaces designed for comfort, class, and convenience. Ideal for expatriates, executives, and short-term corporate needs in Dubai’s most exclusive districts.",
    features: [
      "Serviced apartments with premium amenities.",
      "Luxury villas and penthouses for corporate stays.",
      "High-end retail & office rentals with tailored packages.",
    ],
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
  },

    {
    title: "Residential Sales & Leasing",
    description:
      "From luxury apartments to waterfront villas, penthouses, and family estates—our residential portfolio is designed with lifestyle, long-term value, and community growth in mind. Whether you’re buying your dream home, leasing a premium unit, or planning a smart investment, we provide curated options and tailored advice.",
    features: [
      "Sales: Prime ready units & off-plan allocations with favorable payment plans.",
      "Leasing: Tenant screening, negotiations, Ejari assistance, renewals.",
      "Advisory: Lifestyle matching, yield targeting, and strategic exit planning.",
    ],
    image: "https://images.unsplash.com/photo-1684677874461-e2b4bb4b1898?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Commercial Sales & Leasing",
    description:
      "Real estate is the foundation of enterprise growth. From Grade-A offices in DIFC to retail destinations in Business Bay, our commercial services align your business goals with spaces that elevate operations and brand presence.",
    features: [
      "Office, retail, and warehouse solutions tailored to scale.",
      "Lease terms, rent-free windows, approvals & fit-out guidance.",
      "Location strategies based on footfall, visibility, and growth corridors.",
    ],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
  },
  {
    title: "Investment Advisory",
    description:
      "Our investment team delivers end-to-end guidance for seasoned and first-time investors. From project planning to ROI-driven strategies, we structure opportunities to maximize value in Dubai’s evolving real estate market.",
    features: [
      "Personalized portfolio structuring.",
      "ROI-focused project planning.",
      "Exit strategies aligned with market cycles.",
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  },
  {
    title: "Property Development",
    description:
      "From boutique cafés to commercial outlets and mixed-use spaces—we conceptualize, design, and deliver ready-to-operate properties that align with investors’ vision and market demand.",
    features: [
      "Turnkey development for retail and commercial spaces.",
      "Architectural and interior design partnerships.",
      "Full project lifecycle management from concept to delivery.",
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Land Acquisition & Sales",
    description:
      "We source, negotiate, and secure high-value plots across Dubai for development, resale, or long-term investment—offering access to some of the most strategic and profitable land deals.",
    features: [
      "Strategic sourcing of high-value plots.",
      "Feasibility studies & ROI analysis.",
      "Complete transaction and resale facilitation.",
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  },
  {
    title: "Property Management",
    description:
      "For landlords, peace of mind is our promise. From tenant sourcing to rent collection, compliance, and dispute prevention—we ensure your asset remains productive, well-maintained, and profitable.",
    features: [
      "Marketing, tenant sourcing & inspections.",
      "Rent collection & financial reporting.",
      "Compliance & dispute prevention.",
    ],
    image: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8",
  },
  // ... (rest of your existing services unchanged)
];


export default function ServicesT() {
  return (
    <section className="font-[biondi] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#a97a67] text-lg font-light mb-2">Our Expertise</p>
          <h1 className="text-[#2f1316] text-4xl md:text-5xl font-[biondi]">
            Our Services
          </h1>
          <p className="text-[#2f1316]/70 mt-4 max-w-2xl mx-auto font-[biondi]">
            Comprehensive solutions across residential, commercial, and investment real estate. 
            Explore the breadth of services that set us apart in Real Estate's dynamic market.
          </p>
        </div>

        {/* Service Blocks */}
        <div className="space-y-24">
          {services.map((service, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row ${
                  isReversed ? "md:flex-row-reverse" : ""
                } items-center gap-12`}
              >
                {/* Text */}
                <div className="md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-[biondi] text-[#2f1316] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[#2f1316]/80 mb-6 font-light leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="list-disc list-inside text-[#2f1316]/90 space-y-2 font-light">
                    {service.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="md:w-1/2 rounded-2xl overflow-hidden shadow-md"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[320px] object-cover"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
