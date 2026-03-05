"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#e3f2f9] py-10 px-4 pt-[20px] sm:px-6 lg:px-12 font-sans relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20">
        {/* FLEX CONTAINER */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* IMAGE SECTION */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[900px] aspect-[4/3]">
              <Image
                src="/Hero.png"
                alt="Drishti MLM Software"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>

          {/* CONTENT SECTION */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00204d] mb-4 leading-snug">
              About Drishti MLM Software
              <br className="hidden md:block" />
              <span className="text-[#287fAB]">Drishti MLM Software</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-700 text-justify leading-relaxed mb-6">
              Drishti MLM Software is a robust and scalable solution designed to
              meet the evolving needs of modern network marketing businesses.
              Whether you're just starting out or managing a large distributor
              base, Drishti provides the tools you need to run your DRISHTI MLM
              operations efficiently and transparently.From customizable
              compensation plans like Binary, Matrix, Unilevel, and Board, to
              automated commissions, real-time dashboards, secure payment
              integration, and E-Wallet systems, our software is engineered for
              performance, security, and growth. Trusted by growing MLM
              businesses, Drishti MLM Software helps you simplify complex
              structures, track every leg of your network, and boost distributor
              engagement—all through a user-friendly interface and mobile-ready
              experience.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="features.php"
                className="bg-[#287fAB] text-white px-6 py-2 rounded hover:bg-[#1e6480] transition text-center"
              >
                Explore Features
              </a>

              <button
                onClick={() => openModal()} // Make sure you define openModal function in your component
                className="border border-[#287fAB] text-[#287fAB] px-6 py-2 rounded hover:bg-[#287fAB] hover:text-white transition text-center"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
