import Link from 'next/link';
import { CheckCircleIcon, XMarkIcon, ClockIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export default function FoodVendorRegistrationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Food Vendor Registration
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Share your delicious food and beverages with our community. Join our events as a food vendor and serve hundreds of families.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Food Vendor Pricing</h2>
            <p className="text-lg text-gray-600">Competitive pricing for prime food service locations</p>
          </div>
          
          <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200">
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-green-700 mb-2">$350</div>
              <p className="text-xl text-gray-600 mb-4">Per event registration</p>
              <p className="text-gray-600">Premium food service package with all essentials included</p>
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
                    <span className="text-gray-700">Power connection (110V outlet)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Water access nearby</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Waste disposal and cleanup</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Featured on event food map</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">High-traffic location</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Food Categories</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Traditional Pakistani cuisine</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Halal food options</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Beverages and drinks</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Desserts and sweets</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Snacks and appetizers</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link
                href="/register/food-vendor/form"
                className="inline-block bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Health & Safety Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Health & Safety Requirements</h2>
            <p className="text-lg text-gray-600">All food vendors must meet these requirements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Required Permits & Licenses</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <DocumentTextIcon className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                                     <span className="text-gray-700">Valid food handler&apos;s permit</span>
                </li>
                <li className="flex items-start">
                  <DocumentTextIcon className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Business license</span>
                </li>
                <li className="flex items-start">
                  <DocumentTextIcon className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Liability insurance ($2M minimum)</span>
                </li>
                <li className="flex items-start">
                  <DocumentTextIcon className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Health department approval</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Food Safety Standards</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Temperature control for perishables</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Proper food storage containers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Hand washing and sanitizing stations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Clean cooking and serving equipment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Event Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Select Your Events</h2>
            <p className="text-lg text-gray-600">Choose which events you&apos;d like to serve food at</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-700 text-lg">🇵🇰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Pakistan Independence Day</h3>
                <p className="text-gray-600 text-sm">August 31, 2025</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <p><strong>Duration:</strong> 7 hours</p>
                <p><strong>Peak Hours:</strong> 1:00 PM - 4:00 PM</p>
                <p><strong>Expected Sales:</strong> High demand</p>
                <p><strong>Food Vendors:</strong> 15 spots available</p>
              </div>
              <button className="w-full bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                Select This Event
              </button>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-700 text-lg">🌙</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Eid Festival</h3>
                <p className="text-gray-600 text-sm">April 15, 2025</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <p><strong>Duration:</strong> 7 hours</p>
                <p><strong>Peak Hours:</strong> 12:00 PM - 3:00 PM</p>
                <p><strong>Expected Sales:</strong> Medium-high demand</p>
                <p><strong>Food Vendors:</strong> 10 spots available</p>
              </div>
              <button className="w-full bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                Select This Event
              </button>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-700 text-lg">⚽</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Youth Sports Day</h3>
                <p className="text-gray-600 text-sm">March 22, 2025</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <p><strong>Duration:</strong> 7 hours</p>
                <p><strong>Peak Hours:</strong> 11:00 AM - 2:00 PM</p>
                <p><strong>Expected Sales:</strong> Medium demand</p>
                <p><strong>Food Vendors:</strong> 8 spots available</p>
              </div>
              <button className="w-full bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                Select This Event
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Setup */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Setup & Equipment Information</h2>
            <p className="text-lg text-gray-600">Everything you need to know about food vendor setup</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Setup Schedule</h3>
              <div className="text-left text-sm text-gray-600 space-y-2">
                <p><strong>Arrival:</strong> 3 hours before event</p>
                <p><strong>Setup:</strong> 2.5 hours for equipment</p>
                <p><strong>Inspection:</strong> 30 minutes before opening</p>
                <p><strong>Service:</strong> Throughout event duration</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-700 text-lg">🔌</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Power & Utilities</h3>
              <div className="text-left text-sm text-gray-600 space-y-2">
                <p><strong>Electricity:</strong> 110V, 20A circuit</p>
                <p><strong>Water:</strong> Available within 50 feet</p>
                <p><strong>Waste:</strong> Disposal stations provided</p>
                <p><strong>Grease:</strong> Proper disposal required</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-700 text-lg">🧹</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Cleanup Requirements</h3>
              <div className="text-left text-sm text-gray-600 space-y-2">
                <p><strong>Equipment:</strong> Clean all cooking surfaces</p>
                <p><strong>Booth Area:</strong> Remove all food debris</p>
                <p><strong>Grease:</strong> Collect and dispose properly</p>
                <p><strong>Timing:</strong> 1 hour after event ends</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prohibited Items */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Food & Beverage Restrictions</h2>
            <p className="text-lg text-gray-600">Items that cannot be served at our family-friendly events</p>
          </div>
          
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Prohibited Items</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <XMarkIcon className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Alcoholic beverages of any kind</span>
                </li>
                <li className="flex items-start">
                  <XMarkIcon className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Pork products or non-halal meat</span>
                </li>
                <li className="flex items-start">
                  <XMarkIcon className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Extremely spicy foods (ghost peppers, etc.)</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <XMarkIcon className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Foods with peanuts (allergy concerns)</span>
                </li>
                <li className="flex items-start">
                  <XMarkIcon className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Homemade items without proper permits</span>
                </li>
                <li className="flex items-start">
                  <XMarkIcon className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Items requiring special handling or storage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Food Vendor Support</h2>
          <p className="text-lg mb-8 text-green-100">
            Our food vendor coordinator is here to help with permits, setup, and any questions about food service requirements.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">📧 Email</h3>
              <p className="text-green-100">foodvendors@eastbaymuslims.org</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">📞 Phone</h3>
              <p className="text-green-100">(510)-734-2458</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">💬 WhatsApp</h3>
              <p className="text-green-100">(510) 555-0125</p>
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