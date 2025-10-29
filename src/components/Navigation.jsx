import vitalSwapLogo from "../assets/logo blue.png";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {/* <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">VitalSwap</span>
          </div> */}

          <img src={vitalSwapLogo} alt="Vital Swap Logo" className="h-12" />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#fees"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Fees
            </a>
            <a
              href="#calculator"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Calculator
            </a>
            <a
              href="#transparency"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Transparency
            </a>
            <button className="px-6 py-2 primary-bg btn-primary cursor-pointer text-white rounded-lg  transition-colors font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            {isOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            <a
              href="#fees"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              Fees
            </a>
            <a
              href="#calculator"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              Calculator
            </a>
            <a
              href="#transparency"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              Transparency
            </a>
            <button className="w-full px-6 py-2 bg-[#0047FF] text-white rounded-lg hover:bg-[#0038CC] transition-colors font-medium">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
