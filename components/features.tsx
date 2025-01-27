import { BookOpen, DollarSign, GraduationCap, Home } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Education",
    description:
      "Get the best quality education in Uzbekistan with the most skilled professionals.",
    icon: BookOpen,
  },
  {
    title: "Fee Structure",
    description:
      "Low tuition fee Medical universities in Uzbekistan provide affordable education to Foreign students.",
    icon: DollarSign,
  },
  {
    title: "Admission",
    description:
      "Direct Admissions. Students will get direct admission to their desired university of Uzbekistan.",
    icon: GraduationCap,
  },
  {
    title: "Accommodation",
    description:
      "Living & Accommodation is quite better and cost of living is affordable which around 62 USD.",
    icon: Home,
  },
];

export function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">
            Why Study MBBS in{" "}
            <span className="text-teal-600 underline">Uzbekistan ?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card className="border-teal-700" key={index}>
              <CardHeader>
                <CardTitle className="text-center underline">
                  <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm text-gray-600">
                {feature.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
