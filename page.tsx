import { FAQSection } from "@/components/faq-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { PartnerUniversities } from "@/components/partner-universities"
import { OurServices } from "@/components/our-services"
import { BlogGallery } from "@/components/blog-gallery"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Previous sections remain the same */}

      <WhyChooseUs />
      <OurServices />
      <PartnerUniversities />
      <FAQSection />
      <BlogGallery />
      <Footer />
    </div>
  )
}

