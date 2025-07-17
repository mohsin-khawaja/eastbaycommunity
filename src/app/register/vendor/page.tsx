import Link from 'next/link';
import { CheckCircleIcon, XMarkIcon, ClockIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export default function VendorRegistrationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Non-Food Vendor Registration
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join our community events as a non-food vendor and showcase your products, crafts, or services to hundreds of families.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Vendor Pricing</h2>
            <p className="text-lg text-gray-600">Simple, transparent pricing for all events</p>
          </div>
          
          <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200">
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-green-700 mb-2">$250</div>
              <p className="text-xl text-gray-600 mb-4">Per event registration</p>
              <p className="text-gray-600">One flat rate for all events - no hidden fees</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">What&apos;s Included</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">10x10 ft booth space</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Table and 2 chairs provided</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Electricity access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Event promotion and marketing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Vendor directory listing</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Perfect For</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Handmade crafts and artwork</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Clothing and accessories</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Books and educational materials</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Jewelry and home decor</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Professional services</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link
                href="/register/vendor/form"
                className="inline-block bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Event Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Choose Your Events</h2>
            <p className="text-lg text-gray-600">Select which events you&apos;d like to participate in</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 border-2 border-green-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-700 text-lg">🇵🇰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Pakistan Independence Day</h3>
                <p className="text-gray-600 text-sm">August 31, 2025</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <p><strong>Time:</strong> 12:00 PM - 7:00 PM</p>
                <p><strong>Location:</strong> Central Park, Fremont</p>
                <p><strong>Expected Attendance:</strong> 500+ families</p>
                <p><strong>Vendor Spaces:</strong> 40 booths</p>
              </div>
              <button className="w-full bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                Select This Event
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border-2 border-green-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-700 text-lg">🌙</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Eid Festival</h3>
                <p className="text-gray-600 text-sm">April 15, 2025</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <p><strong>Time:</strong> 10:00 AM - 5:00 PM</p>
                <p><strong>Location:</strong> Bay Area Community Center</p>
                <p><strong>Expected Attendance:</strong> 300+ families</p>
                <p><strong>Vendor Spaces:</strong> 25 booths</p>
              </div>
              <button className="w-full bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                Select This Event
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border-2 border-green-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-700 text-lg">⚽</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Youth Sports Day</h3>
                <p className="text-gray-600 text-sm">March 22, 2025</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <p><strong>Time:</strong> 9:00 AM - 4:00 PM</p>
                <p><strong>Location:</strong> Fremont Sports Complex</p>
                <p><strong>Expected Attendance:</strong> 200+ families</p>
                <p><strong>Vendor Spaces:</strong> 15 booths</p>
              </div>
              <button className="w-full bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                Select This Event
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Vendor Requirements</h2>
            <p className="text-lg text-gray-600">Please review these requirements before registering</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Required Documents</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <DocumentTextIcon className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                                     <span className="text-gray-700">Valid business license or seller&apos;s permit</span>
                </li>
                <li className="flex items-start">
                  <DocumentTextIcon className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Proof of liability insurance ($1M minimum)</span>
                </li>
                <li className="flex items-start">
                  <DocumentTextIcon className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Product catalog or service description</span>
                </li>
                <li className="flex items-start">
                  <DocumentTextIcon className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Completed vendor application form</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Prohibited Items</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <XMarkIcon className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Alcohol or tobacco products</span>
                </li>
                <li className="flex items-start">
                  <XMarkIcon className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Weapons or dangerous items</span>
                </li>
                <li className="flex items-start">
                  <XMarkIcon className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Inappropriate or offensive content</span>
                </li>
                <li className="flex items-start">
                  <XMarkIcon className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Counterfeit or unauthorized products</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Setup & Event Day Information</h2>
            <p className="text-lg text-gray-600">What to expect on event day</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Setup Time</h3>
              <p className="text-gray-600">
                Arrive 2 hours before event start for setup. Our team will guide you to your assigned booth space.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-700 text-lg">🏪</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Booth Setup</h3>
              <p className="text-gray-600">
                Your space includes a table, chairs, and electrical outlet. Bring your own tablecloth and display materials.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-700 text-lg">🧹</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Cleanup</h3>
              <p className="text-gray-600">
                Allow 1 hour after event end for breakdown and cleanup. Please leave your space clean and tidy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Questions About Vendor Registration?</h2>
          <p className="text-lg mb-8 text-green-100">
            Our vendor coordinator is here to help with any questions about registration, booth setup, or event logistics.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">📧 Email</h3>
              <p className="text-green-100">vendors@eastbaymuslims.org</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">📞 Phone</h3>
              <p className="text-green-100">(510)-734-2458</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">💬 WhatsApp</h3>
              <p className="text-green-100">(510) 555-0124</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about/contact"
              className="bg-white text-green-900 hover:bg-green-50 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/register"
              className="bg-green-700 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Other Registration Options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 