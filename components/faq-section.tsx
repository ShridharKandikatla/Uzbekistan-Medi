"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const faqs = [
  {
    question: "Is MBBS degree from Georgia recognized globally?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    question: "Is MBBS degree from Georgia recognized globally?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    question: "Is MBBS degree from Georgia recognized globally?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    question: "Is MBBS degree from Georgia recognized globally?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">
          <span className="text-blue-500">F</span>requently{" "}
          <span className="text-blue-500">A</span>sked{" "}
          <span className="text-blue-500">Q</span>uestions
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Celebrating Achievements, One Click at a Time!
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                >
                  <span>{faq.question}</span>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      openIndex === index ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="p-4 bg-gray-50 border-t">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-[#E0FBFC] rounded-lg p-8">
            <div className="relative h-48 mb-6 rounded-full">
              <Image
                src="/image89.png"
                alt="Guidance Illustration"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Get Personalized Guidance for Your MBBS Journey
            </h3>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <div className="flex gap-4">
                <Input placeholder="+91" className="w-20" />
                <Input placeholder="Your Mobile No." className="flex-1" />
              </div>
              <Input placeholder="Current City" />
              <Button className="w-full bg-gradient-to-r from-[#64B6C7] from-0% to-[#207C83] to-100% text-white hover:bg-teal-600">
                Apply Now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
