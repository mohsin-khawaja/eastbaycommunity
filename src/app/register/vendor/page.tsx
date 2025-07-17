import Link from 'next/link';
import { ArrowLeftIcon, CheckCircleIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

export default function VendorRegistrationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/register"
            className="flex items-center text-green-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Registration Options
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBagIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🛍 Non-Food Vendor Registration
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join our vibrant marketplace! Register to sell crafts, clothing, books, jewelry, and other non-food items at our community events.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Complete Your Registration</h2>
              <p className="text-lg text-gray-600">
                Please fill out the form below to register as a non-food vendor for our events
              </p>
            </div>
            
            {/* Google Form Embed */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">📝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Vendor Registration Form</h3>
                <p className="text-gray-600 mb-6">
                  Click the button below to access our Google Form for vendor registration
                </p>
                <a
                  href="https://forms.google.com/create-vendor-registration-form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Open Registration Form
                </a>
              </div>
            </div>

            {/* Form Fields Preview */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">📋 Form Information Required</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Business Information</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Business name and contact info</li>
                    <li>• Business license number</li>
                    <li>• Insurance information</li>
                    <li>• Tax ID or EIN</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Product Details</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Product categories</li>
                    <li>• Description of items</li>
                    <li>• Pricing information</li>
                    <li>• Special requirements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Vendor Guidelines</h2>
            <p className="text-lg text-gray-600">Important information for all non-food vendors</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <CheckCircleIcon className="w-6 h-6 text-green-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">What&apos;s Included</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• 10x10 foot booth space</li>
                <li>• One table and two chairs</li>
                <li>• Electricity access (basic outlet)</li>
                <li>• Event promotion on social media</li>
                <li>• Listing on event vendor directory</li>
                <li>• Access to event coordinators</li>
                <li>• Parking pass for vendors</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-sm">📋</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Requirements</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Valid business license</li>
                <li>• General liability insurance</li>
                <li>• Family-friendly products only</li>
                <li>• Professional booth presentation</li>
                <li>• No direct competitors per event</li>
                <li>• Compliance with local regulations</li>
                <li>• Setup/breakdown participation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booth Setup Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Booth Setup Information</h2>
            <p className="text-lg text-gray-600">Everything you need to know about setting up your booth</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-xl">🕐</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Setup Time</h3>
                <p className="text-gray-600 text-sm">
                  Vendors can begin setup 2 hours before event start time. Early setup available by request.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-xl">📦</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">What to Bring</h3>
                <p className="text-gray-600 text-sm">
                  Your products, display materials, tent/canopy, tablecloth, and any additional equipment needed.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-xl">🚗</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Parking</h3>
                <p className="text-gray-600 text-sm">
                  Dedicated vendor parking available. Vehicles must be moved after unloading unless prior arrangement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Vendor Fees</h2>
            <p className="text-lg text-gray-600">Transparent pricing for all community events</p>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border-2 border-green-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">💰 Standard Events</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">$250</div>
                <p className="text-gray-600 mb-4">Per event registration</p>
                <ul className="text-left text-sm text-gray-600 space-y-1">
                  <li>✓ 10x10 booth space</li>
                  <li>✓ Table and chairs</li>
                  <li>✓ Electricity access</li>
                  <li>✓ Event promotion</li>
                </ul>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🎊 Special Events</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$250</div>
                <p className="text-gray-600 mb-4">Pakistan Independence Day</p>
                <ul className="text-left text-sm text-gray-600 space-y-1">
                  <li>✓ Prime booth location</li>
                  <li>✓ Enhanced promotion</li>
                  <li>✓ Larger expected attendance</li>
                  <li>✓ All standard inclusions</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Payment accepted via PayPal, Zelle, Venmo, or Stripe. Payment due within 7 days of registration approval.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">💳 PayPal</span>
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">📱 Zelle</span>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">💰 Venmo</span>
                <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">🏦 Stripe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
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
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/register"
              className="bg-green-500 hover:bg-green-400 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Other Registration Options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 