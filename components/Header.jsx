"use client";

import { useState } from "react";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import {
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [plansOpen, setPlansOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* ================= MOBILE TOP BLUE BAR ================= */}
      <div className="bg-[#2f7ea3] text-white md:hidden">
        <div className="px-4 py-3 text-left space-y-2 text-sm">
          <div>+91 9911210174 , +91 8744878555</div>
          <div>sales@kanakdrishtiinfo.com</div>

          <div className="flex justify-end gap-4 pt-1 text-[15px]">
            <FaWhatsapp />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
            <FaFacebookF />
            <FaYoutube />
          </div>
        </div>
      </div>

      {/* ================= DESKTOP TOP BAR ================= */}
      <div className="hidden md:block bg-[#2f7ea3] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>+91 9911210174 , +91 8744878555</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>sales@kanakdrishtiinfo.com</span>
            </div>
          </div>

          <div className="flex gap-4 text-[15px]">
            <FaWhatsapp />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
            <FaFacebookF />
            <FaYoutube />
          </div>
        </div>
      </div>

      {/* ================= WHITE NAVBAR ================= */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-[#0d2c4a] font-medium text-[15px]">
            <Link href="/">Home Page</Link>
            <Link href="/demo">Demo</Link>

            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer">
                Drishti MLM Plans
                <ChevronDown size={15} />
              </div>

              <div className="absolute left-0 top-full mt-3 w-56 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
                <Link
                  href="/plans/binary"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Binary Plan
                </Link>

                <Link
                  href="/plans/matrix"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Matrix Plan
                </Link>

                <Link
                  href="/plans/unilevel"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Unilevel Plan
                </Link>

                <Link
                  href="/plans/australian-binary"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Australian Binary Plan
                </Link>
              </div>
            </div>
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer">
                Company
                <ChevronDown size={15} />
              </div>

              <div className="absolute left-0 top-full mt-3 w-44 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
                <Link
                  href="/about"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <Link href="/blog">Blog</Link>
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Link
              href="/demo"
              className="bg-[#2f7ea3] text-white px-6 py-2 rounded-md text-sm"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div
            className="block md:hidden cursor-pointer z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={28} className="text-black" />
            ) : (
              <Menu size={28} className="text-black" />
            )}
          </div>
        </div>
      </div>

      {/* ================= MOBILE DROPDOWN ================= */}
      {/* ================= MOBILE DROPDOWN ================= */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col px-6 py-5 gap-4 text-black font-medium">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home Page
            </Link>

            <Link href="/demo" onClick={() => setMenuOpen(false)}>
              Demo
            </Link>

            {/* ================= Drishti MLM Plans ================= */}
            <div>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setPlansOpen(!plansOpen)}
              >
                <span>Drishti MLM Plans</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    plansOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {plansOpen && (
                <div className="mt-3 ml-4 flex flex-col gap-3 text-sm text-gray-600">
                  <Link href="/plans/binary" onClick={() => setMenuOpen(false)}>
                    Binary Plan
                  </Link>

                  <Link href="/plans/matrix" onClick={() => setMenuOpen(false)}>
                    Matrix Plan
                  </Link>

                  <Link
                    href="/plans/unilevel"
                    onClick={() => setMenuOpen(false)}
                  >
                    Unilevel Plan
                  </Link>

                  <Link
                    href="/plans/australian-binary"
                    onClick={() => setMenuOpen(false)}
                  >
                    Australian Binary Plan
                  </Link>
                </div>
              )}
            </div>

            <Link href="/features" onClick={() => setMenuOpen(false)}>
              Features
            </Link>

            <Link href="/pricing" onClick={() => setMenuOpen(false)}>
              Pricing
            </Link>

            {/* ================= Company ================= */}
            <div>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setCompanyOpen(!companyOpen)}
              >
                <span>Company</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    companyOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {companyOpen && (
                <div className="mt-3 ml-4 flex flex-col gap-3 text-sm text-gray-600">
                  <Link href="/about" onClick={() => setMenuOpen(false)}>
                    About
                  </Link>

                  <Link href="/contact" onClick={() => setMenuOpen(false)}>
                    Contact Us
                  </Link>
                </div>
              )}
            </div>

            <Link href="/blog" onClick={() => setMenuOpen(false)}>
              Blog
            </Link>

            <Link
              href="/demo"
              onClick={() => setMenuOpen(false)}
              className="bg-[#2f7ea3] text-white text-center py-2 rounded-md mt-3"
            >
              Book Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
