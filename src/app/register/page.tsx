import Link from 'next/link';
import { ShoppingBagIcon, CakeIcon, UserGroupIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Register for Events
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join us as a vendor, performer, or attendee. Choose your registration type below and become part of our vibrant community celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Choose Your Registration Type</h2>
            <p className="text-lg text-gray-600">Select the option that best fits your participation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Non-Food Vendor Registration */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200 hover:border-green-300 transition-colors">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingBagIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🛍 Non-Food Vendor</h3>
                <p className="text-gray-600 mb-6">
                  Sell crafts, clothing, books, jewelry, or other non-food items at our events. Perfect for local businesses and artisans.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Includes:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 10x10 booth space</li>
                    <li>• Table and chairs</li>
                    <li>• Electricity access</li>
                    <li>• Event promotion</li>
                  </ul>
                </div>
                
                <Link
                  href="/register/vendor"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors text-center"
                >
                  Register as Vendor
                </Link>
              </div>
            </div>

            {/* Food Vendor Registration */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CakeIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🍽 Food Vendor</h3>
                <p className="text-gray-600 mb-6">
                  Share delicious food and beverages with our community. Must have proper permits and meet health requirements.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Includes:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 12x12 booth space</li>
                    <li>• Power and water access</li>
                    <li>• Waste management</li>
                    <li>• Featured on food map</li>
                  </ul>
                </div>
                
                <Link
                  href="/register/food-vendor"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors text-center"
                >
                  Register as Food Vendor
                </Link>
              </div>
            </div>

            {/* Event Attendance */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200 hover:border-purple-300 transition-colors">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <UserGroupIcon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">👥 Event Attendance</h3>
                <p className="text-gray-600 mb-6">
                  Register to attend our events and stay updated on schedules, activities, and special announcements.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Event reminders</li>
                    <li>• Activity schedules</li>
                    <li>• Special announcements</li>
                    <li>• Community updates</li>
                  </ul>
                </div>
                
                <Link
                  href="/register/attendance"
                  className="block w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-colors text-center"
                >
                  Register to Attend
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event Registration */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border-2 border-green-200">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">🎊 Pakistan Independence Day - Aug 31, 2025</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our biggest celebration of the year! Limited vendor spaces available. Register early to secure your spot.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Event Details</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Date:</strong> August 31, 2025</p>
                    <p><strong>Time:</strong> 12:00 PM - 7:00 PM</p>
                    <p><strong>Location:</strong> Central Park, Fremont</p>
                    <p><strong>Expected Attendance:</strong> 500+ families</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Registration Deadline</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Vendor Registration:</strong> July 15, 2025</p>
                    <p><strong>Food Vendor:</strong> July 1, 2025</p>
                    <p><strong>Attendance:</strong> August 28, 2025</p>
                    <p><strong>Volunteer:</strong> August 20, 2025</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register/vendor"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Register as Vendor
                </Link>
                <Link
                  href="/register/food-vendor"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Register Food Vendor
                </Link>
                <Link
                  href="/volunteer"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Volunteer to Help
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Guidelines */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Registration Guidelines</h2>
            <p className="text-lg text-gray-600">Important information for all registrants</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-4">
                <DocumentTextIcon className="w-6 h-6 text-green-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">General Guidelines</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• All vendors must register before the deadline</li>
                <li>• Setup begins 2 hours before event start</li>
                <li>• All items must be family-friendly and appropriate</li>
                <li>• No alcohol or inappropriate content allowed</li>
                <li>• Vendors are responsible for their own insurance</li>
                <li>• Rain or shine - events proceed unless severe weather</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-4">
                <CakeIcon className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">Food Vendor Requirements</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Valid food handler&apos;s permit required</li>
                <li>• Business license and liability insurance</li>
                <li>• Health department approved menu</li>
                <li>• Must provide own equipment and supplies</li>
                <li>• Halal options strongly preferred</li>
                <li>• Waste disposal and cleanup included</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Need Help with Registration?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team is here to help with any questions about registration, requirements, or event details.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-2">📧 Email</h3>
              <p className="text-gray-600">vendors@eastbaymuslims.org</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-2">📞 Phone</h3>
              <p className="text-gray-600">(510)-734-2458</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-2">💬 WhatsApp</h3>
              <p className="text-gray-600">(510) 555-0124</p>
            </div>
          </div>
          
          <div className="mt-8">
            <Link
              href="/about/contact"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 