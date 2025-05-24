import { whatWeDo } from "../data";
import "../styles/WhatWeDo.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export default function WhatWeDo() {
  return (
    <section
      className="what-we-do max-width py-12 flex items-center justify-center"
      id="whatwedo"
    >
      <div className="text-center">
        <motion.h3
          className="bar uppercase tracking-wide text-gray-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          SERVICES
        </motion.h3>
        <motion.h2
          className="text-3xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          NEXGEN's Car Detailing Services
        </motion.h2>
        <div className="we-do-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {whatWeDo.wedo.map((item) => (
            <motion.div
              key={item.id}
              className="we-do-item bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.id * 0.1 }}
            >
              <div className="flex justify-center mb-4"></div>
              <h4 className="text-xl font-semibold text-white">
                {item.heading}
              </h4>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
