"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const universities = [
  {
    id: 1,
    name: "Andijan State Medical Institute",
    image: "/image47.png",
    fee: "RS.2,111/-",
    duration: "4 years",
  },
  {
    id: 2,
    name: "Andijan State Medical Institute",
    image: "/image47.png",
    fee: "RS.2,111/-",
    duration: "4 years",
  },
  {
    id: 3,
    name: "Andijan State Medical Institute",
    image: "/image47.png",
    fee: "RS.2,111/-",
    duration: "4 years",
  },
];

export function UniversityCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="py-16 bg-gradient-to-b from-teal-800 to-teal-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">
            Explore{" "}
            <span className="text-teal-400 underline">
              Medical Universities
            </span>{" "}
            in Uzbekistan
          </h2>
          <p className="text-gray-300 mt-2">
            We are affiliated with these medical universities
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {universities.map((university) => (
              <div key={university.id} className="w-1/3 flex-shrink-0 px-4">
                <Card className="overflow-hidden  p-2">
                  <div className="relative h-48">
                    <Image
                      src={university.image || "/image47.png"}
                      alt={university.name}
                      fill
                      // className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-teal-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      </div>
                      <h3 className="font-semibold">{university.name}</h3>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>Fee Structure: {university.fee}</p>
                      <p>Duration: {university.duration}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 outline-[#1CB5BD] text-[#1CB5BD] hover:bg-teal-600"
                    >
                      Read More
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-[#1CB5BD] hover:bg-teal-600"
                    >
                      Apply Now
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {universities.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  activeSlide === index ? "bg-teal-400" : "bg-teal-200"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
