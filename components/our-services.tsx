import Image from "next/image";

const services = [
  {
    title: "Admission",
    description: "Get the admission process easy to your university",
    image: "/pana1.png",
  },
  {
    title: "Airport Pickup",
    description: "Get your airport pickup for free on your arrival",
    image: "/pana.png",
  },
  {
    title: "Visa Process",
    description:
      "Fill the visa form and get it approved by respective authorities",
    image: "/Card03.png",
  },
  {
    title: "Documentation",
    description: "Verification of legalized documents",
    image: "/Card5.png",
  },
  {
    title: "Accommodation",
    description: "Stay in the dormitories with a safe environment",
    image: "/Card6.png",
  },
  {
    title: "Free Counseling",
    description: "Get free counseled by our expert experts",
    image: "/Card4.png",
  },
];

export function OurServices() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">
          Our Valuable <span className="text-teal-500 underline">Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-32 relative mb-4">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
