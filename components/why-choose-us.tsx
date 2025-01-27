import { FileText, DollarSign, MessageSquare } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Documentation Assistance with Low Fees",
    description:
      "We provide full-fledged assistance to facilitate admissions in Uzbekistan with affordable fees for Indian students",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Complete Support for Documentation",
    description:
      "We provide well-versed support for the necessary documentation required for MBBS admissions",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Affordable Fees",
    description:
      "Studying abroad becomes easy with low tuition fees and affordable costs",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Free Counselling & Career Guidance",
    description:
      "We offer personalized counseling and guidance to help students build a successful medical career",
  },
];

const stats = [
  { number: "12+", label: "Years of expertise" },
  { number: "1500+", label: "Satisfied students counselled" },
  { number: "10", label: "Universities affiliated with us" },
  { number: "100+", label: "Visa Assistance" },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-8">
              Why <span className="text-teal-500 underline">Uzbekistan Medi?</span>
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button size="sm" className="mt-8 bg-[#1CB5BD] hover:bg-teal-600">
              Read More
            </Button>
          </div>

          <div>
            <div className="relative h-[400px] mb-12">
              <Image
                src="/image88.png"
                alt="Medical Students"
                fill
                className="object-contain"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 text-center shadow-sm"
                >
                  <div className="text-2xl font-bold text-teal-500">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
