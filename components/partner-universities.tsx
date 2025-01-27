import { Star } from "lucide-react";
import Image from "next/image";

const universities = [
  "/image44.png",
  "/image43.png",
  "/image45.png",
  "/image42.png",
];

const testimonials = [
  {
    name: "John Doe",
    image: "/Ellipse1520.png",
    text: "Augue nulla nullam, eget congue dolor magna vitae porttitor. Mollis diam sit amet faucibus faucet",
    rating: 5,
  },
  {
    name: "Smitha Doe",
    image: "/Ellipse15.png",
    text: "Augue nulla nullam, eget congue dolor magna vitae porttitor. Mollis diam sit amet faucibus faucet",
    rating: 5,
  },
  {
    name: "Jaquline Doe",
    image: "/Ellipse.png",
    text: "Augue nulla nullam, eget congue dolor magna vitae porttitor. Mollis diam sit amet faucibus faucet",
    rating: 5,
  },
];

export function PartnerUniversities() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Our Partners <span className="text-teal-500 underline">Universities</span>
          </h2>
          <p className="text-gray-600 mt-2">
            We are affiliated with these medical universities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {universities.map((logo, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              <Image
                src={logo}
                alt={`University ${index + 1}`}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Our Happy <span className="text-teal-500">Students</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Hear What Our Students Have to Say
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="flex justify-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-teal-400 fill-current"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
