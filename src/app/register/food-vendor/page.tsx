import Link from 'next/link';
import { ArrowLeftIcon, CheckCircleIcon, CakeIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function FoodVendorRegistrationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/register"
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Registration Options
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CakeIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Food Vendor Registration
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Share your delicious cuisine with our community! Register to serve food and beverages at our events. All vendors must meet health and safety requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Complete Your Food Vendor Registration</h2>
              <p className="text-lg text-gray-600">
                Please fill out the form below to register as a food vendor for our events
              </p>
            </div>
            
            {/* Google Form Embed */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">📝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Food Vendor Registration Form</h3>
                <p className="text-gray-600 mb-6">
                  Click the button below to access our Google Form for food vendor registration
                </p>
                <a
                  href="https://forms.google.com/create-food-vendor-registration-form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Open Food Vendor Form
                </a>
              </div>
            </div>

            {/* Form Fields Preview */}
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">📋 Required Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Business & Permits</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Food handler&apos;s permit</li>
                    <li>• Business license</li>
                    <li>• Liability insurance</li>
                    <li>• Health department approval</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Menu & Equipment</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Complete menu with prices</li>
                    <li>• Equipment list</li>
                    <li>• Halal certification (if applicable)</li>
                    <li>• Special dietary options</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Health & Safety Requirements</h2>
            <p className="text-lg text-gray-600">All food vendors must comply with local health regulations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 rounded-lg p-8 border-2 border-red-200">
              <div className="flex items-center mb-4">
                <ShieldCheckIcon className="w-6 h-6 text-red-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">Required Permits</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Valid food handler&apos;s permit for all staff</li>
                <li>• Current business license</li>
                <li>• General liability insurance ($1M minimum)</li>
                <li>• Health department mobile vendor permit</li>
                <li>• Fire department approval (if applicable)</li>
                <li>• Resale permit or tax registration</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-8 border-2 border-blue-200">
              <div className="flex items-center mb-4">
                <CheckCircleIcon className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">Health Standards</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Temperature control for all food items</li>
                <li>• Proper food storage and handling</li>
                <li>• Hand washing stations available</li>
                <li>• Sanitizer and cleaning supplies</li>
                <li>• Hair restraints and gloves</li>
                <li>• Waste disposal plan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What&apos;s Included in Your Registration</h2>
            <p className="text-lg text-gray-600">Everything you need for a successful food service experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-xl">🏪</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Booth Space</h3>
                <p className="text-gray-600 text-sm">
                  12x12 foot booth space with access to electricity and water connections for food preparation.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-xl">🗑️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Waste Management</h3>
                <p className="text-gray-600 text-sm">
                  Trash and recycling collection throughout the event, plus grease disposal services.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-xl">📍</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Prime Location</h3>
                <p className="text-gray-600 text-sm">
                  Featured placement on event food map and highlighted in promotional materials.
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Food Vendor Fees</h2>
            <p className="text-lg text-gray-600">Investment in your community presence</p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-blue-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">💰 Standard Events</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$350</div>
                <p className="text-gray-600 mb-4">Per event registration</p>
                <ul className="text-left text-sm text-gray-600 space-y-1">
                  <li>✓ 12x12 booth space</li>
                  <li>✓ Power and water access</li>
                  <li>✓ Waste management</li>
                  <li>✓ Featured on food map</li>
                </ul>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Special Events</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">$350</div>
                <p className="text-gray-600 mb-4">Pakistan Independence Day</p>
                <ul className="text-left text-sm text-gray-600 space-y-1">
                  <li>✓ Premium booth location</li>
                  <li>✓ Enhanced promotion</li>
                  <li>✓ 500+ expected attendees</li>
                  <li>✓ All standard inclusions</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Higher fees reflect additional infrastructure needs for food service. Payment due within 7 days of approval.
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

      {/* Menu Guidelines */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Menu Guidelines</h2>
            <p className="text-lg text-gray-600">Creating a diverse and inclusive food experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">🥗 Preferred Options</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Halal-certified food options</li>
                <li>• Traditional Pakistani and South Asian cuisine</li>
                <li>• Vegetarian and vegan options</li>
                <li>• Family-friendly portion sizes</li>
                <li>• Authentic cultural dishes</li>
                <li>• Fresh, made-to-order items</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">📋 Requirements</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Clear ingredient labeling</li>
                <li>• Allergen information available</li>
                <li>• No alcohol in food preparation</li>
                <li>• Competitive community pricing</li>
                <li>• Consistent quality standards</li>
                <li>• Professional food presentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Setup */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Equipment & Setup</h2>
            <p className="text-lg text-gray-600">What you need to bring and what we provide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-lg p-8 border-2 border-green-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">✅ We Provide</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 12x12 foot booth space</li>
                <li>• Electrical connections (110V)</li>
                <li>• Water spigot access</li>
                <li>• Waste disposal service</li>
                <li>• Event tables and basic setup</li>
                <li>• Promotional signage space</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-8 border-2 border-orange-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">📦 You Bring</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• All cooking equipment and appliances</li>
                <li>• Food preparation and serving supplies</li>
                <li>• Tent/canopy for weather protection</li>
                <li>• Extension cords and power strips</li>
                <li>• Cleaning supplies and sanitizer</li>
                <li>• Cash register or payment system</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Food Vendor Support</h2>
          <p className="text-lg mb-8 text-blue-100">
            Our food coordinator is here to help with permits, setup, and any questions about food service requirements.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">📧 Email</h3>
              <p className="text-blue-100">food@eastbaymuslims.org</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">📞 Phone</h3>
              <p className="text-blue-100">(510) 555-0125</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">💬 WhatsApp</h3>
              <p className="text-blue-100">(510) 555-0126</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about/contact"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/register"
              className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Other Registration Options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 