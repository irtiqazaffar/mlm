"use client";
import { motion } from "framer-motion";

export default function HeroIntro() {
  return (
    <section className="bg-white py-14 px-4 sm:px-6 lg:px-12 text-black">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            Drishti MLM Software for Smarter Network Marketing
          </h1>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-[#2c6e91] text-white px-6 py-3 rounded-md font-medium hover:bg-[#245a76] transition">
              View all features
            </button>

            <button className="border border-[#2c6e91] text-[#2c6e91] px-6 py-3 rounded-md font-medium hover:bg-[#eaf4fa] transition">
              Watch Video Tutorial ▶
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-gray-700 leading-relaxed text-base"
        >
          <p className="text-justify" style={{ hyphens: "auto" }}>
            Experience the next level of network marketing with Drishti MLM
            Software — a powerful platform designed to automate daily
            operations, enhance accuracy, and drive productivity across your
            organization.
            <br />
            <br />
            With support for flexible compensation plans like Binary, Matrix,
            Unilevel, and more, Drishti delivers the tools you need to grow and
            manage your DRISHTI MLM business effectively. From lead management
            and real-time reporting to automated commission payouts and
            AI-driven analytics, everything is built to help your business scale
            faster and smarter.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
