import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-gray-300">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/testimonial" className="hover:text-gray-300">
                  Testimonial
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Terms of use
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

