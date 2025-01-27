import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-teal-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Uzbekistan Medi</h3>
            <p className="text-teal-100 text-sm leading-relaxed">
              Uzbekistan Medi is your trusted guide to pursuing MBBS in Uzbekistan. We connect aspiring doctors with top
              universities, offering all-inclusive guidance and support throughout your medical education journey with
              no hidden fees.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-teal-100">
              <li>
                <Link href="#" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Universities
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  MBBS in Uzbekistan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-teal-100">
              <li>
                <Link href="#" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact us</h3>
            <ul className="space-y-4 text-teal-100">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                +91445445
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                marketing775@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                2572 Uzbekistan Rd, Santa Ana, Illinois 85486
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teal-700 mt-12 pt-8 text-center text-teal-100">
          <p>Uzbekistan Medi © 2023. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

