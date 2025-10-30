import { HiArrowRight } from "react-icons/hi";

export default function CTASection() {
  const teamMembers = [
    { name: "Ona Opemipo", role: "Product Manager", tag: "@onaopemipo" },
    {
      name: "Franklin Andrew",
      role: "Frontend Engineer",
      tag: "@devfranklinandrew",
    },
    { name: "Chukwudi Nnaji", role: "Backend Engineer", tag: "@chukxman" },
    {
      name: "Adedoyin Adewumi",
      role: "Product Designer",
      tag: "@toobusytodecide",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#03214c] to-[#01132c]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main CTA */}
        <h2 className="text-3xl poppins sm:text-4xl font-bold text-white mb-4">
          Ready to Start Sending Money?
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of users who trust VitalSwap for their global payments.
          Get started in minutes.
        </p>

        <button className="px-8 py-4 cursor-pointer bg-white secondary rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg shadow-xl inline-flex items-center gap-2 mb-16">
          Create Free Account
          <HiArrowRight className="w-5 h-5" />
        </button>

        {/* Team Section */}
        <div className="border-t border-blue-400 pt-12">
          <p className="text-blue-100 mb-6">
            Have questions? Our team is here to help
          </p>
          <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-4 gap-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <p className="text-white font-medium text-sm">{member.name}</p>
                <p className="text-blue-200 text-xs mb-2">{member.role}</p>
                <p className="text-blue-300 text-xs font-mono">{member.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
