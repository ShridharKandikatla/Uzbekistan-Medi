"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const blogs = [
  {
    title: "5 Reasons to Study MBBS in Russia",
    description:
      "Discover why Uzbekistan is the perfect destination for your medical education with affordable fees and globally recognized degree.",
    image: "/image46.png",
    author: "Andrew Wilson",
    date: "Dec 28,2023",
  },
  {
    title: "5 Reasons to Study MBBS in Russia",
    description:
      "Discover why Uzbekistan is the perfect destination for your medical education with affordable fees and globally recognized degree.",
    image: "/image36.png",
    author: "Andrew Wilson",
    date: "Dec 28,2023",
  },
  {
    title: "5 Reasons to Study MBBS in Russia",
    description:
      "Discover why Uzbekistan is the perfect destination for your medical education with affordable fees and globally recognized degree.",
    image: "/image46.png",
    author: "Andrew Wilson",
    date: "Dec 28,2023",
  },
];

const gallery = ["/image39.png", "/image40.png", "/image41.png"];

export function BlogGallery() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-2">
            Our Latest <span className="text-teal-500 underline">Blogs</span>
          </h2>
          <p className="text-center text-gray-600">
            Empowering Future Doctors with Valuable Information!
          </p>

          <div className="relative mt-8">
            <div className="flex gap-6 overflow-hidden">
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="md:w-1/3 flex-shrink-0 transition-transform duration-300"
                  style={{
                    transform: `translateX(-${activeSlide * 100}%)`,
                  }}
                >
                  <div className="border rounded-lg overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={blog.image || "/placeholder.svg"}
                        alt={blog.title}
                        fill
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{blog.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {blog.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gray-200 rounded-full" />
                          <div className="text-sm">
                            <p className="font-medium">{blog.author}</p>
                            <p className="text-gray-500">{blog.date}</p>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-[#1CB5BD] hover:bg-teal-600"
                        >
                          Read more
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setActiveSlide(Math.max(0, activeSlide - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              disabled={activeSlide === 0}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() =>
                setActiveSlide(Math.min(blogs.length - 1, activeSlide + 1))
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              disabled={activeSlide === blogs.length - 1}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">
              Recent Photo{" "}
              <span className="text-teal-500 underline">Gallery</span>
            </h2>
            <Button variant="outline">View More</Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
