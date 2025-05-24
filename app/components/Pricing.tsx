"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCar,
  FaSprayCan,
  FaBroom,
  FaWater,
  FaSoap,
  FaStar,
} from "react-icons/fa";
import BookingForm from "./BookingForm"; // Adjust import path as needed
import "../styles/Pricing.scss";

const PricingComponent: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<
    "Small" | "Midsize" | "Large"
  >("Midsize");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | null>(
    null
  );

  const prices = {
    "Standard Interior": { Small: 100, Midsize: 120, Large: 150 },
    "Full Interior": { Small: 175, Midsize: 200, Large: 225 },
    "Standard Exterior": { Small: 50, Midsize: 65, Large: 80 },
    "Full Exterior": { Small: 120, Midsize: 140, Large: 160 },
    "Full Makeover": { Small: 280, Midsize: 330, Large: 375 },
    "Full Maintenance": { Small: 150, Midsize: 225, Large: 250 },
  };

  const packageIcons: { [key: string]: JSX.Element } = {
    "Standard Interior": <FaBroom />,
    "Full Interior": <FaCar />,
    "Standard Exterior": <FaWater />,
    "Full Exterior": <FaSoap />,
    "Full Makeover": <FaStar />,
    "Full Maintenance": <FaSprayCan />,
  };

  const standardPackages: (keyof typeof prices)[] = [
    "Standard Interior",
    "Standard Exterior",
  ];
  const fullPackages: (keyof typeof prices)[] = [
    "Full Interior",
    "Full Exterior",
    "Full Makeover",
  ];

  const handleCardClick = (packageName: keyof typeof prices) => {
    setPreselectedService(packageName);
    setIsBookingOpen(true);
  };

  return (
    <div className="pricing-container max-w-7xl mx-auto p-6">
      <section className="extras text-center" id="pricing">
        <h3 className="bar text-3xl font-bold tracking-wide text-gray-800">
          Service Pricing
        </h3>
      </section>
      <div style={{ height: "20px" }}></div>
      <h2 className="text-center text-4xl font-extrabold mt-4 text-gray-900">
        Premium Car Detailing Packages
      </h2>

      {/* Size Selection */}
      <div className="size-selector flex justify-center gap-4 mt-6">
        {["Small", "Midsize", "Large"].map((size) => (
          <motion.button
            key={size}
            className={`size-button ${selectedSize === size ? "selected" : ""}`}
            onClick={() =>
              setSelectedSize(size as "Small" | "Midsize" | "Large")
            }
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {size}
          </motion.button>
        ))}
      </div>

      {/* Standard Packages Section */}
      <h3 className="text-2xl font-bold mt-12 mb-6 text-gray-800 text-center">
        Standard Treatments
      </h3>
      <div className="cards-container standard-cards-container mt-10">
        <AnimatePresence mode="wait">
          {standardPackages.map((packageName) => (
            <motion.div
              key={packageName + selectedSize}
              className="pricing-card rounded-xl p-6 shadow-md transition-all duration-300 text-gray-900 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              onClick={() => handleCardClick(packageName)}
            >
              <div className="flex items-center gap-3 justify-center">
                <span className="text-3xl">{packageIcons[packageName]}</span>
                <h3 className="package-title text-2xl font-bold">
                  {packageName}
                </h3>
              </div>
              <ul className="package-details mt-4 space-y-2 text-sm">
                {packageName === "Standard Interior" && (
                  <>
                    <li>✅ Clean/Wipe down all Surfaces</li>
                    <li>✅ Dust & Vacuum</li>
                    <li>✅ Clean Windows</li>
                  </>
                )}
                {packageName === "Standard Exterior" && (
                  <>
                    <li>✅ Hand Wash</li>
                    <li>✅ Wheel Cleaning</li>
                    <li>✅ Bugs Removal</li>
                    <li>✅ Spray Wax</li>
                    <li>✅ Cleaning Windows</li>
                    <li>✅ Tire Shine</li>
                  </>
                )}
              </ul>
              <p className="price text-2xl font-bold mt-4">
                ${prices[packageName][selectedSize]}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div style={{ height: "40px" }}></div>

      {/* Full Packages Section */}
      <h3 className="text-2xl font-bold mt-16 mb-6 text-gray-800 text-center">
        Full Treatments (Recommended)
      </h3>
      <div className="cards-container full-cards-container mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {fullPackages.map((packageName) => (
            <motion.div
              key={packageName + selectedSize}
              className={`pricing-card rounded-xl p-6 shadow-md transition-all duration-300 cursor-pointer ${
                ["Full Interior", "Full Exterior", "Full Makeover"].includes(
                  packageName
                )
                  ? "premium text-white"
                  : "text-gray-900"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              onClick={() => handleCardClick(packageName)}
            >
              <div className="flex items-center gap-3 justify-center">
                <span className="text-3xl">{packageIcons[packageName]}</span>
                <h3 className="package-title text-2xl font-bold">
                  {packageName}
                </h3>
              </div>
              <ul className="package-details mt-4 space-y-2 text-sm">
                {packageName === "Full Interior" && (
                  <>
                    <li>✅ Deep Plastic Steam Clean</li>
                    <li>✅ Leather, Plastic, Vinyl Protection</li>
                    <li>✅ Shampooing Seats & Carpet</li>
                    <li>✅ Germ/Odor Elimination</li>
                    <li>✅ Clean Windows</li>
                  </>
                )}
                {packageName === "Full Exterior" && (
                  <>
                    <li>✅ Deep Hand Wash</li>
                    <li>✅ Deep Wheel Cleaning</li>
                    <li>✅ Bugs Removal</li>
                    <li>✅ Iron Decon Removal</li>
                    <li>✅ Clay Bar Treatment</li>

                    <li>✅ Sealant Wax (3-month coverage)</li>
                    <li>✅ Trim Restoration</li>
                    <li>✅ Tire Shine</li>
                    <li>✅ Clean Windows</li>
                  </>
                )}
                {packageName === "Full Makeover" && (
                  <>
                    <li>💎 Exterior & Interior Premium Detailing</li>
                    <li>
                      💎 Includes Deep Hand Wash, Iron Decon, Clay Bar Treatment
                    </li>
                    <li>💎 Full Vehicle Wax & Trim Restoration</li>
                    <li>
                      💎 Interior Deep Plastic Steam Clean, Leather Protection
                    </li>
                    <li>
                      💎 Germ & Odor Elimination, Shampooing Seats & Carpet
                    </li>
                  </>
                )}
              </ul>
              <p className="price text-2xl font-bold mt-4">
                ${prices[packageName][selectedSize]}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div style={{ height: "40px" }}></div>

      {/* Full Maintenance Section */}
      <h3 className="text-2xl font-bold mt-16 mb-6 text-white text-center">
        Full Maintenance Package (Best Value!)
      </h3>
      <div className="cards-container full-maintenance-cards-container mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={"Full Maintenance" + selectedSize}
            className="pricing-card rounded-xl p-6 shadow-md transition-all duration-300 text-gray-900 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            onClick={() => handleCardClick("Full Maintenance")}
          >
            <div className="flex items-center gap-3 justify-center">
              <span className="text-3xl">
                {packageIcons["Full Maintenance"]}
              </span>
              <h3 className="package-title text-2xl font-bold text-red-500">
                Full Maintenance
              </h3>
            </div>
            <ul className="package-details mt-4 space-y-2 text-sm">
              <li>🔄 Regular upkeep for a showroom-ready look</li>
              <li>🔄 Hand Wash, Wheel Cleaning, Spray Wax, Tire Shine</li>
              <li>🔄 Interior Dusting, Vacuuming, and Surface Cleaning</li>
            </ul>
            <p className="price text-2xl font-bold mt-4">
              ${prices["Full Maintenance"][selectedSize]}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Render the modal overlay */}
      {isBookingOpen && (
        <Modal onClose={() => setIsBookingOpen(false)}>
          {/* Pass the preselected service and size */}
          <BookingForm
            initialSelectedService={preselectedService}
            initialSize={selectedSize}
          />
        </Modal>
      )}
    </div>
  );
};

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

// Simple modal overlay component
const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default PricingComponent;
