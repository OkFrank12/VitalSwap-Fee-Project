import { useState, useEffect } from "react";
import {
  HiArrowRight,
  HiLightningBolt,
  HiCreditCard,
  HiCurrencyDollar,
  HiGlobeAlt,
  HiShieldCheck,
} from "react-icons/hi";

const categoryIcons = {
  "US Virtual Bank Account": HiCurrencyDollar,
  "NG Virtual Bank Account": HiGlobeAlt,
  Payout: HiArrowRight,
  "Business Payout": HiArrowRight,
  "Wallet to Wallet Transfer": HiArrowRight,
  "Freedom Virtual Card": HiCreditCard,
  "Business Collections": HiLightningBolt,
  FX: HiGlobeAlt,
};

export default function FeesOverview() {
  const [accountType, setAccountType] = useState("Customer");
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [feeData, setFeeData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the live API
  useEffect(() => {
    async function fetchFees() {
      setLoading(true);
      try {
        const res = await fetch(
          "https://2kbbumlxz3.execute-api.us-east-1.amazonaws.com/default/fee"
        );
        const data = await res.json();

        // Assuming data returns like { Customer: {...}, Business: {...} }
        setFeeData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching fee data:", err);
        setError("Failed to load fee data. Please try again later.");
        setLoading(false);
      }
    }

    fetchFees();
  }, []);

  const currentFees = feeData[accountType] || {};

  return (
    <section
      id="fees"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#03214c] mb-6 text-balance">
            Transparent Pricing, No Hidden Fees
          </h2>
          <p className="text-lg text-slate-600 text-balance">
            Simple, straightforward fees designed for your success. Choose your
            account type to see detailed pricing.
          </p>
        </div>

        {/* Account Type Toggle */}
        <div className="flex justify-center gap-3 mb-16">
          {["Customer", "Business"].map((type) => (
            <button
              key={type}
              onClick={() => setAccountType(type)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                accountType === type
                  ? "bg-[#03214c] hover:bg-[#f0b100] text-white shadow-lg shadow-blue-600/30 scale-105"
                  : "bg-white text-[#03214c] shadow"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Loading & Error States */}
        {loading ? (
          <p className="text-center text-slate-500">Loading fee data...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="space-y-8">
            {Object.entries(currentFees).map(([category, services]) => {
              const IconComponent = categoryIcons[category] || HiShieldCheck;
              const isExpanded = expandedCategory === category;

              return (
                <div
                  key={category}
                  className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Category Header */}
                  <button
                    onClick={() =>
                      setExpandedCategory(isExpanded ? null : category)
                    }
                    className="w-full px-6 sm:px-8 py-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-100/50 rounded-lg group-hover:bg-blue-200 transition-colors">
                        <IconComponent className="w-6 h-6 text-[#03214c]" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-slate-900">
                          {category}
                        </h3>
                        <p className="text-sm text-slate-500 mt-1">
                          {services.length} services
                        </p>
                      </div>
                    </div>
                    <div
                      className={`transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    >
                      <HiArrowRight className="w-5 h-5 text-slate-400" />
                    </div>
                  </button>

                  {/* Services Grid */}
                  {isExpanded && (
                    <div className="border-t border-slate-100 px-6 sm:px-8 py-6 bg-slate-50">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {services.map((service, idx) => (
                          <div
                            key={idx}
                            className="bg-white p-5 rounded-xl border border-slate-100 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <h4 className="font-semibold text-[#03214c] text-sm flex-1 pr-2">
                                {service.Service}
                              </h4>
                            </div>
                            <div className="mb-3">
                              <span className="inline-block px-3 py-1 bg-blue-100 text-[#03214c] font-bold text-lg rounded-lg">
                                {service.Fee}
                              </span>
                            </div>
                            {service.Description && (
                              <p className="text-xs text-slate-600 leading-relaxed">
                                {service.Description}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-16 p-8 bg-linear-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-100">
          <div className="flex items-start gap-4">
            <HiShieldCheck className="w-6 h-6 text-[#03214c] shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-slate-900 mb-2">
                Volume Discounts Available
              </h4>
              <p className="text-slate-700">
                Send more, save more. Contact our sales team for custom pricing
                on high-volume transfers and enterprise solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
