import { HiShieldCheck, HiEye, HiLockClosed, HiClock } from "react-icons/hi";

export default function TransparencySection() {
  const principles = [
    {
      icon: HiEye,
      title: "Full Transparency",
      description:
        "See all fees upfront before you send. No hidden charges, ever.",
    },
    {
      icon: HiShieldCheck,
      title: "Regulated & Secure",
      description:
        "Licensed and regulated in all operating countries. Your money is safe.",
    },
    {
      icon: HiLockClosed,
      title: "Data Protection",
      description:
        "Bank-level encryption and security. Your information stays private.",
    },
    {
      icon: HiClock,
      title: "Real-Time Tracking",
      description:
        "Track your transfer every step of the way with live updates.",
    },
  ];

  return (
    <section id="transparency" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl poppins sm:text-4xl font-bold primary mb-4">
            Our Transparency Promise
          </h2>
          <p className="text-lg text-gray-600">
            We believe in honest, straightforward pricing. Here's what makes us
            different.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-2xl mb-4">
                  <Icon className="w-8 h-8 secondary" />
                </div>
                <h3 className="text-lg poppins font-bold primary mb-2">
                  {principle.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold secondary mb-2">$2.5B+</div>
            <p className="text-gray-600">Transferred globally</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold secondary mb-2">500K+</div>
            <p className="text-gray-600">Happy customers</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold secondary mb-2">180+</div>
            <p className="text-gray-600">Countries supported</p>
          </div>
        </div>
      </div>
    </section>
  );
}
