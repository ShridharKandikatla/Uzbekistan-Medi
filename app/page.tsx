import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { UniversityCarousel } from "@/components/university-carousel";
import { WhyChooseUs } from "@/components/why-choose-us";
import { OurServices } from "@/components/our-services";
import { PartnerUniversities } from "@/components/partner-universities";
import { FAQSection } from "@/components/faq-section";
import { BlogGallery } from "@/components/blog-gallery";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <UniversityCarousel />
      <WhyChooseUs />
      <OurServices />
      <PartnerUniversities />
      <BlogGallery />
      <FAQSection />
      <Footer />
    </main>
  );
}
