import { MessageCircle } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative bg-teal-700 text-white overflow-hidden">
      <Image
        src={"/view-school.png"}
        alt="Medical Professional"
        fill
        className="opacity-10 w-full h-full"
        priority
      />
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Hero Content */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Pursue <span className="text-[#081D18]">MBBS </span> In
              <span className="text-[#081D18]"> Uzbekistan </span>
              Top Universities
            </h1>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Low-cost medical education starting from INR 5 Lacs﻿*
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                No donation & Capitation fees
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Practice in India & across the world
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Worldwide accepted the degree
              </li>
            </ul>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#64B6C7] from-0% to-[#207C83] to-100% hover:bg-teal-600 text-white"
            >
              Apply Now
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative h-[300px] md:h-[500px]">
            <Image
              src={"/image33.png"}
              alt="Medical Professional"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/your-number"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </section>
  );
}
