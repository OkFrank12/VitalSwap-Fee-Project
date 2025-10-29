import {
  HiArrowRight,
  HiShieldCheck,
  HiLightningBolt,
  HiGlobe,
} from "react-icons/hi";

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-blue-50 to-yellow-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/70 primary rounded-full text-sm font-medium mb-6">
            <HiLightningBolt className="w-4 h-4" />
            <span>Transparent Pricing, No Hidden Fees</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold poppins secondary mb-6 leading-tight">
            Simple, Transparent Fees for{" "}
            <span className="text-[#03214C]">Global Payments</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Send money worldwide with confidence. No surprises, no hidden
            charges. Just honest, upfront pricing that puts you in control.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="btn-primary px-8 py-4 primary-bg cursor-pointer text-white rounded-lg hover:bg-[#0038CC] transition-all font-medium flex items-center gap-2 shadow-lg hover:shadow-xl">
              Calculate Your Fees
              <HiArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 cursor-pointer bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition-colors font-medium border-2 border-gray-200">
              View Fee Structure
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-lg shadow-sm">
              <HiShieldCheck className="w-6 h-6 secondary" />
              <span className="text-sm font-medium text-gray-700">
                Bank-Level Security
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-lg shadow-sm">
              <HiLightningBolt className="w-6 h-6 secondary" />
              <span className="text-sm font-medium text-gray-700">
                Instant Transfers
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-lg shadow-sm">
              <HiGlobe className="w-6 h-6 secondary" />
              <span className="text-sm font-medium text-gray-700">
                180+ Countries
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
