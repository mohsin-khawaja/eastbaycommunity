import Link from 'next/link';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">EB</span>
              </div>
              <span className="font-bold text-xl">East Bay Muslims</span>
            </div>
            <p className="text-green-100 mb-4 max-w-md">
              We are a nonprofit organization rooted in purpose and unity, bringing together the East Bay Muslim community through family-friendly festivals and meaningful connections.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPinIcon className="w-5 h-5 text-green-300" />
                <span className="text-sm text-green-100">East Bay Area, California</span>
              </div>
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="w-5 h-5 text-green-300" />
                <span className="text-sm text-green-100">info@eastbaymuslims.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-5 h-5 text-green-300" />
                <span className="text-sm text-green-100">(510)-734-2458</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/events" className="text-green-100 hover:text-white transition-colors duration-200">Upcoming Events</Link></li>
              <li><Link href="/register" className="text-green-100 hover:text-white transition-colors duration-200">Register</Link></li>
              <li><Link href="/volunteer" className="text-green-100 hover:text-white transition-colors duration-200">Volunteer</Link></li>
              <li><Link href="/about" className="text-green-100 hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link href="/feedback" className="text-green-100 hover:text-white transition-colors duration-200">Feedback</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><Link href="/about/story" className="text-green-100 hover:text-white transition-colors duration-200">Our Story</Link></li>
              <li><Link href="/about/contact" className="text-green-100 hover:text-white transition-colors duration-200">Contact Us</Link></li>
              <li><Link href="/about/donate" className="text-green-100 hover:text-white transition-colors duration-200">Donate</Link></li>
              <li><Link href="/events/gallery" className="text-green-100 hover:text-white transition-colors duration-200">Photo Gallery</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-green-100 text-sm">
              © {currentYear} East Bay Muslims. All rights reserved.
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-green-100 hover:text-white transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-green-100 hover:text-white transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297L3.323 17.1c.875.808 2.026 1.297 3.323 1.297 1.297 0 2.448-.49 3.323-1.297l-1.803-1.409c-.875.807-2.026 1.297-3.323 1.297z"/>
                </svg>
              </a>
              <a href="#" className="text-green-100 hover:text-white transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-green-100 hover:text-white transition-colors duration-200">
                <span className="sr-only">YouTube</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 pt-8 border-t border-green-800">
          <div className="text-center">
            <p className="text-green-100 mb-4">We accept donations through:</p>
            <div className="flex justify-center space-x-4 flex-wrap">
              <button className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200">
                PayPal
              </button>
              <button className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200">
                Zelle
              </button>
              <button className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200">
                Venmo
              </button>
              <button className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200">
                Bank Transfer
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 