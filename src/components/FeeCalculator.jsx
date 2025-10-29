import { useState, useEffect } from "react";
import { HiSwitchHorizontal } from "react-icons/hi";

export default function FeeCalculator() {
  const [sendAmount, setSendAmount] = useState(1000);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("NGN");
  const [exchangeRate, setExchangeRate] = useState(0);
  const [loadingRate, setLoadingRate] = useState(false);
  const [error, setError] = useState("");

  const currencies = [
    "USD",
    "NGN",
    "EUR",
    "GBP",
    "JPY",
    "CAD",
    "AUD",
    "CHF",
    "CNY",
  ];

  // Fetch exchange rate from API
  useEffect(() => {
    const fetchRate = async () => {
      if (fromCurrency === toCurrency) {
        setExchangeRate(1);
        return;
      }

      setLoadingRate(true);
      setError("");

      try {
        const res = await fetch(
          `https://2kbbumlxz3.execute-api.us-east-1.amazonaws.com/default/exchange?from=${fromCurrency}&to=${toCurrency}`
        );
        const data = await res.json();

        if (data?.rate) {
          setExchangeRate(data.rate);
        } else {
          setError("Unable to fetch exchange rate");
        }
      } catch (err) {
        console.error("Exchange rate fetch error:", err);
        setError("Network error while fetching rate");
      } finally {
        setLoadingRate(false);
      }
    };

    fetchRate();
  }, [fromCurrency, toCurrency]);

  const calculateFees = () => {
    const feePercentage = fromCurrency === toCurrency ? 0 : 0.01; // 1% fee
    const fee = sendAmount * feePercentage;
    const receiveAmount = (sendAmount - fee) * exchangeRate;

    return {
      fee: fee.toFixed(2),
      receiveAmount: receiveAmount.toFixed(2),
      totalCost: sendAmount.toFixed(2),
    };
  };

  const results = calculateFees();

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <section
      id="calculator"
      className="py-16 sm:py-20 sm:px-6 lg:px-8 bg-linear-to-b from-blue-50 to-yellow-50"
    >
      <div className="max-w-md mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Calculate Your Transfer Fee
          </h2>
          <p className="text-lg text-gray-600">
            See exactly how much you'll pay and what your recipient will receive
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white rounded-2xl shadow-xl md:p-8 p-3">
          {/* Amount Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              You send
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="number"
                value={sendAmount}
                onChange={(e) => setSendAmount(Number(e.target.value))}
                className="flex-1 px-3 py-2 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-lg focus:border-[#0047FF] focus:outline-none text-base sm:text-lg"
              />
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="px-3 py-2 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-lg focus:border-[#0047FF] focus:outline-none text-base sm:text-lg bg-white"
              >
                {currencies.map((curr) => (
                  <option key={curr} value={curr}>
                    {curr}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center mb-6">
            <button
              onClick={swapCurrencies}
              className="p-4 sm:p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              <HiSwitchHorizontal className="w-6 h-6 text-gray-600 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Receive Amount */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Recipient receives
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={
                  loadingRate
                    ? "Loading..."
                    : error
                    ? "Error fetching rate"
                    : results.receiveAmount
                }
                readOnly
                className="flex-1 px-3 py-2 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-lg focus:border-[#0047FF] focus:outline-none text-base sm:text-lg"
              />
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="px-3 py-2 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-lg focus:border-[#0047FF] focus:outline-none text-base sm:text-lg bg-white"
              >
                {currencies.map((curr) => (
                  <option key={curr} value={curr}>
                    {curr}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Fee Breakdown */}
          <div className="space-y-3 p-6 bg-gray-50 rounded-xl mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Transfer amount</span>
              <span className="font-medium text-gray-900">
                {sendAmount} {fromCurrency}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Transfer fee</span>
              <span className="font-medium text-gray-900">
                {results.fee} {fromCurrency}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Exchange rate</span>
              <span className="font-medium text-gray-900">
                1 {fromCurrency} ={" "}
                {loadingRate ? "..." : exchangeRate.toFixed(2)} {toCurrency}
              </span>
            </div>
            <div className="border-t border-gray-200 pt-3 flex justify-between">
              <span className="font-semibold text-gray-900">Total to pay</span>
              <span className="font-bold text-[#0047FF] text-lg">
                {results.totalCost} {fromCurrency}
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-full px-6 sm:px-8 py-3 sm:py-4 text-white rounded-lg bg-[#03214c] hover:bg-[#f0b100] transition-colors font-medium text-base sm:text-lg shadow-lg hover:shadow-xl">
            Continue with Transfer
          </button>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-gray-500 mt-6 px-2">
          Exchange rates update every minute. Final rate will be confirmed
          before you complete your transfer.
        </p>
      </div>
    </section>
  );
}
