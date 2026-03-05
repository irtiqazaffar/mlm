"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Features() {
  const headingLines = [
    "Features of",
    "DRISHTI MLM Software",
    "for Your Business Growth",
  ];

  const features = [
    {
      title: ["Commission", "Calculation"],
      description:
        "Automated commission calculations across DRISHTI’s MLM plan types.",
      image: "/icons/commission.png",
    },
    {
      title: ["Network", "Management"],
      description: "Easily manage downlines and monitor team performance.",
      image: "/icons/network.png",
    },
    {
      title: ["Customizable", "Plans"],
      description:
        "Flexible configuration to support binary, matrix, and hybrid plans.",
      image: "/icons/plans.png",
    },
    {
      title: ["E-commerce", "Integration"],
      description:
        "Integrate with platforms like Shopify, WooCommerce, Magento seamlessly.",
      image: "/icons/ecommerce.png",
    },
    {
      title: ["Multi-Currency", "Support"],
      description:
        "Supports global currencies with secure transactions worldwide.",
      image: "/icons/currency.png",
    },
    {
      title: ["Security &", "Analytics"],
      description:
        "Role-based access, encryption, and detailed analytics dashboards.",
      image: "/icons/security.png",
    },
  ];

  return (
    <section className="bg-[#d7e6ef] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="space-y-2 mb-14"
        >
          {headingLines.map((line, index) => (
            <h2
              key={index}
              className={`text-3xl md:text-4xl font-bold ${
                line.includes("DRISHTI") ? "text-[#2c6e91]" : "text-gray-900"
              }`}
            >
              {line}
            </h2>
          ))}
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1, // subtle stagger
              }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="w-16 h-16 bg-[#eaf4fa] flex items-center justify-center rounded-full mx-auto mb-5">
                <Image
                  src={feature.image}
                  alt={feature.title.join(" ")}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>

              <h3 className="font-semibold text-lg text-gray-900">
                {feature.title.join(" ")}
              </h3>

              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
