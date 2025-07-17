import Link from 'next/link';
import { ShoppingBagIcon, CakeIcon, UserGroupIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-16">
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Choose Your Registration Type</h2>
            <p className="text-lg text-gray-600">Select the option that best fits your participation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* General Event Registration */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-green-200 hover:border-green-400 transition-colors p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserGroupIcon className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">General Attendee</h3>
                <p className="text-gray-600">Register to attend our community events as a participant</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Access to all event activities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Free participation in festivities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Family-friendly activities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Community networking</span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700 mb-2">Free</div>
                <p className="text-gray-600 text-sm mb-4">No registration fee required</p>
                <Link
                  href="/register/attendee"
                  className="block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Register Now
                </Link>
              </div>
            </div>

            {/* Non-Food Vendor Registration */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-green-200 hover:border-green-400 transition-colors p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBagIcon className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Non-Food Vendor</h3>
                <p className="text-gray-600">Sell products, crafts, or services at our events</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">10x10 ft booth space</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Table and chairs provided</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Promotional opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Access to event marketing</span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700 mb-2">$250</div>
                <p className="text-gray-600 text-sm mb-4">Per event registration</p>
                <Link
                  href="/register/vendor"
                  className="block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Register Now
                </Link>
              </div>
            </div>

            {/* Food Vendor Registration */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-green-200 hover:border-green-400 transition-colors p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CakeIcon className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Food Vendor</h3>
                <p className="text-gray-600">Serve delicious food and beverages at our events</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">10x10 ft booth space</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Power connection available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">High-traffic location</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Event promotion included</span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700 mb-2">$350</div>
                <p className="text-gray-600 text-sm mb-4">Per event registration</p>
                <Link
                  href="/register/food-vendor"
                  className="block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600">Don&apos;t miss these exciting community celebrations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pakistan Independence Day */}
            <div className="bg-white rounded-lg shadow-sm p-6 border-2 border-green-200">
              <div className="h-48 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-700 text-lg font-semibold">Pakistan Independence Day</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Pakistan Independence Day Celebration</h3>
              <p className="text-gray-600 mb-4">August 31, 2025 • 12:00 PM - 7:00 PM</p>
              <p className="text-gray-600 mb-4">Join us for cultural performances, traditional food, and community unity.</p>
              <Link
                href="/events/pakistan-independence-day"
                className="inline-block bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Learn More
              </Link>
            </div>
            
            {/* Eid Festival */}
            <div className="bg-white rounded-lg shadow-sm p-6 border-2 border-green-200">
              <div className="h-48 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-700 text-lg font-semibold">Eid Festival</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Eid Festival 2025</h3>
              <p className="text-gray-600 mb-4">April 15, 2025 • 10:00 AM - 5:00 PM</p>
              <p className="text-gray-600 mb-4">Celebrate Eid with traditional festivities and community gathering.</p>
              <Link
                href="/events/eid-festival"
                className="inline-block bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Learn More
              </Link>
            </div>
            
            {/* Youth Sports Day */}
            <div className="bg-white rounded-lg shadow-sm p-6 border-2 border-green-200">
              <div className="h-48 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-700 text-lg font-semibold">Youth Sports Day</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Youth Sports Day</h3>
              <p className="text-gray-600 mb-4">March 22, 2025 • 9:00 AM - 4:00 PM</p>
              <p className="text-gray-600 mb-4">Athletic competitions and team building activities for all ages.</p>
              <Link
                href="/events/youth-sports-day"
                className="inline-block bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Guidelines */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Registration Guidelines</h2>
            <p className="text-lg text-gray-600">Important information for all participants</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DocumentTextIcon className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Early Registration</h3>
              <p className="text-gray-600 text-sm">Register at least 2 weeks before the event for guaranteed spot</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-700 text-lg">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Required Documents</h3>
              <p className="text-gray-600 text-sm">Valid ID, business license (vendors), and insurance certificates</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-700 text-lg">⏰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Setup Times</h3>
              <p className="text-gray-600 text-sm">Vendors setup 2 hours before event start, cleanup 1 hour after</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-700 text-lg">🚫</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Prohibited Items</h3>
              <p className="text-gray-600 text-sm">No alcohol, inappropriate content, or items not suitable for families</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Need Help with Registration?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team is here to assist you with the registration process and answer any questions you may have.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-700 text-lg">📧</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">register@eastbaymuslims.org</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-700 text-lg">📞</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">(510)-734-2458</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-700 text-lg">💬</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">WhatsApp</h3>
              <p className="text-gray-600">(510) 555-0123</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about/contact"
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/events"
              className="bg-white border-2 border-green-700 text-green-700 hover:bg-green-50 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 