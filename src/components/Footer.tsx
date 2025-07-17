import Link from 'next/link';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">EB</span>
              </div>
              <span className="font-bold text-xl">East Bay Muslims</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              We are a nonprofit organization rooted in purpose and unity, bringing together the East Bay Muslim community through family-friendly festivals and meaningful connections.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPinIcon className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-300">East Bay Area, California</span>
              </div>
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-300">info@eastbaymuslims.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-300">(510) 555-0123</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/events" className="text-gray-300 hover:text-green-400 transition-colors">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-300 hover:text-green-400 transition-colors">
                  Register for Events
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-gray-300 hover:text-green-400 transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-gray-300 hover:text-green-400 transition-colors">
                  Feedback
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Payment & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support Us</h3>
            <div className="space-y-3">
              <div className="flex flex-col space-y-2">
                <span className="text-sm text-gray-300">Payment Options:</span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="#"
                    className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm transition-colors"
                  >
                    💳 PayPal
                  </a>
                  <a
                    href="#"
                    className="bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-sm transition-colors"
                  >
                    📱 Zelle
                  </a>
                  <a
                    href="#"
                    className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-sm transition-colors"
                  >
                    💰 Venmo
                  </a>
                  <a
                    href="#"
                    className="bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded text-sm transition-colors"
                  >
                    🏦 Stripe
                  </a>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  href="/about/donate"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-medium transition-colors"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                📘 Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                📸 Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                🐦 Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                📺 YouTube
              </a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">
                © {currentYear} East Bay Muslims Family Festivals. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                A registered 501(c)(3) nonprofit organization
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 