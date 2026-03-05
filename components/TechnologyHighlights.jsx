"use client";

import {
  Layers,
  Rocket,
  Shield,
  Smartphone,
  Globe,
  Brain,
  FileText,
  Zap,
  Lock,
} from "lucide-react";

import ScrollReveal from "./ScrollReveal";

export default function TechnologyHighlights() {
  const features = [
    {
      icon: Layers,
      color: "bg-purple-500",
      title: "All-in-One Feature Suite",
      desc: "Packed with over 200+ premium features and 60+ third-party integrations to support rapid growth and operational control.",
    },
    {
      icon: Rocket,
      color: "bg-blue-500",
      title: "Powered by the Latest Tech Stack",
      desc: "Built using modern technologies like ReactJS, Laravel, Redis, Node.js, and more — delivering speed, stability, and scalability.",
    },
    {
      icon: Shield,
      color: "bg-red-500",
      title: "Enterprise-Grade Security",
      desc: "GDPR-compliant platform with role-based access control, data encryption, and multi-layered security.",
    },
    {
      icon: Smartphone,
      color: "bg-green-500",
      title: "Mobile & Web Ready",
      desc: "Responsive design ensures smooth access and usability across all devices.",
    },
    {
      icon: Globe,
      color: "bg-yellow-500",
      title: "Global Business Ready",
      desc: "Operate across borders with multi-language and multi-currency support for global scalability.",
    },
    {
      icon: Brain,
      color: "bg-pink-500",
      title: "AI-Enabled Automation",
      desc: "Reduce manual effort with AI-driven tools that manage commissions, downlines, reports and more.",
    },
  ];

  return (
    <section className="bg-[#cfdfe8] py-24">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT CARD */}
        <ScrollReveal>
          <div className="bg-[#f5f7f8] rounded-xl shadow-md overflow-hidden border">
            {/* HEADER */}
            <div className="bg-[#2f7da0] text-white text-[15px] font-semibold px-6 py-4">
              Our Technology Highlights
            </div>

            {/* CONTENT */}
            <div className="p-6 space-y-7">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="flex gap-4 items-start">
                    {/* ICON */}
                    <div
                      className={`${item.color} w-9 h-9 rounded-full flex items-center justify-center text-white flex-shrink-0`}
                    >
                      <Icon size={16} />
                    </div>

                    {/* TEXT */}
                    <div>
                      <h4 className="text-[15px] font-semibold text-gray-800">
                        {item.title}
                      </h4>

                      <p className="text-[13px] text-gray-600 leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* RIGHT CONTENT */}
        <ScrollReveal>
          <div>
            {/* HEADING */}
            <h2 className="text-[34px] font-bold mb-5 leading-snug">
              Why Choose Drishti{" "}
              <span className="text-[#2f7da0]">MLM Software?</span>
            </h2>

            {/* PARAGRAPH */}
            <p className="text-[15px] text-gray-700 leading-relaxed mb-6 text-justify">
              Drishti MLM Software is your trusted partner in building,
              managing, and scaling a successful network marketing business.
              Designed for performance and adaptability, our software supports
              custom MLM plans like Binary, Matrix, Unilevel, and more — all
              powered by intelligent automation and seamless integrations. With
              features like AI-based commission handling, multilingual and
              multicurrency capabilities, e-commerce readiness, and a secure
              payment ecosystem, Drishti ensures your business operates
              efficiently at every level. Its intuitive interface and mobile
              responsiveness make it easy to use, while our expert support
              ensures you're never alone on your growth journey.
            </p>

            {/* SUB HEADING */}
            <h3 className="text-[22px] font-semibold mb-3">Why Choose Us?</h3>

            <p className="text-[15px] text-gray-700 leading-relaxed mb-8 text-justify">
              At Drishti, we combine deep domain knowledge with cutting-edge
              technology to offer MLM software solutions that are scalable,
              customizable, and future-ready. With years of experience in direct
              selling platforms, we understand what network marketers need —
              from performance, speed, and security to ongoing support and
              adaptability. Our commitment to quality, innovation, and customer
              success makes us the preferred technology partner for MLM
              companies across the globe.
            </p>

            {/* RIGHT FEATURES */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-2 rounded">
                  <FileText className="text-blue-600" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-[15px]">Premium Features</p>
                  <p className="text-[13px] text-gray-600">
                    200+ features with 60+ integrations for scalability.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-red-500 w-6 h-6 rounded-full"></div>
                <div>
                  <p className="font-semibold text-[15px]">Latest Technology</p>
                  <p className="text-[13px] text-gray-600">
                    Built with React, Laravel, Redis and more.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-2 rounded">
                  <Lock className="text-blue-600" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-[15px]">
                    Enterprise Security
                  </p>
                  <p className="text-[13px] text-gray-600">
                    GDPR ready with role-based secure access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
