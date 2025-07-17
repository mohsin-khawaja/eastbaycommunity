import Link from 'next/link';
import { HeartIcon, UserGroupIcon, MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About East Bay Muslims
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-green-100">
              We are a nonprofit organization rooted in purpose and unity, dedicated to bringing together the East Bay Muslim community through family-friendly festivals and meaningful connections.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">📖 Our Story & Vision</h2>
            <p className="text-lg text-gray-600">How we started and where we&apos;re heading</p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border-2 border-green-200 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Beginning</h3>
              <p className="text-gray-700 mb-4">
                East Bay Muslims was founded in 2018 by a group of dedicated community members who recognized the need for regular, family-friendly gatherings that would bring together Muslim families from across the East Bay area. What started as small informal gatherings has grown into a vibrant nonprofit organization that serves hundreds of families throughout the region.
              </p>
              <p className="text-gray-700">
                Our founders believed that by creating spaces for celebration, cultural exchange, and community building, we could strengthen the bonds that tie us together while sharing our rich heritage with the broader Bay Area community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 Our Mission</h3>
                <p className="text-gray-600">
                  To create a vibrant, inclusive community where Muslim families can come together to celebrate our rich cultural heritage, strengthen bonds, and build lasting connections through meaningful events and shared experiences.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🌟 Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading organization fostering unity, cultural pride, and community engagement among Muslim families in the East Bay, creating a legacy of togetherness for future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Unity & Inclusion</h3>
              <p className="text-gray-600">
                We welcome all families regardless of their background, creating an inclusive environment where everyone feels valued and accepted.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Family First</h3>
              <p className="text-gray-600">
                Every event is designed with families in mind, ensuring safe, engaging, and meaningful experiences for all ages.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every event, from planning and organization to execution and community impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">🧭 Meet the Team</h2>
            <p className="text-lg text-gray-600">The dedicated volunteers who make our events possible</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl font-bold">AK</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Ahmed Khan</h3>
              <p className="text-sm text-green-600 mb-2">Founder & President</p>
              <p className="text-xs text-gray-600">
                Event planning and community outreach
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">SA</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Sarah Ali</h3>
              <p className="text-sm text-blue-600 mb-2">Vice President</p>
              <p className="text-xs text-gray-600">
                Vendor coordination and logistics
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl font-bold">MH</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Maria Hassan</h3>
              <p className="text-sm text-purple-600 mb-2">Events Coordinator</p>
              <p className="text-xs text-gray-600">
                Cultural programming and activities
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl font-bold">OS</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Omar Shah</h3>
              <p className="text-sm text-orange-600 mb-2">Treasurer</p>
              <p className="text-xs text-gray-600">
                Financial management and sponsorships
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Our team is supported by dozens of dedicated volunteers who help make each event successful. 
              Want to join our team?
            </p>
            <Link
              href="/volunteer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Volunteer with Us
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">📬 Contact Us</h2>
            <p className="text-lg text-gray-600">Get in touch with our team</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPinIcon className="w-5 h-5 text-green-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Address</p>
                    <p className="text-gray-600">East Bay Area, California</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <EnvelopeIcon className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">info@eastbaymuslims.org</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <PhoneIcon className="w-5 h-5 text-purple-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Phone</p>
                    <p className="text-gray-600">(510) 555-0123</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800">📘 Facebook</a>
                  <a href="#" className="text-pink-600 hover:text-pink-800">📸 Instagram</a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">🐦 Twitter</a>
                  <a href="#" className="text-red-600 hover:text-red-800">📺 YouTube</a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Message subject"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Donations & Sponsorships */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">💳 Support Our Mission</h2>
            <p className="text-lg text-gray-600">Help us continue building community through your generous support</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">💰 Make a Donation</h3>
              <p className="text-gray-600 mb-6">
                Your donations help us organize events, provide community services, and maintain our programs throughout the year.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between bg-white rounded-lg p-4">
                  <span className="font-medium text-gray-800">$25</span>
                  <span className="text-gray-600">Helps sponsor event supplies</span>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-4">
                  <span className="font-medium text-gray-800">$50</span>
                  <span className="text-gray-600">Supports youth activities</span>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-4">
                  <span className="font-medium text-gray-800">$100</span>
                  <span className="text-gray-600">Funds community outreach</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">💳 PayPal</span>
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">📱 Zelle</span>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">💰 Venmo</span>
                <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">🏦 Stripe</span>
              </div>
              
              <Link
                href="/about/donate"
                className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors text-center"
              >
                Donate Now
              </Link>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🤝 Become a Sponsor</h3>
              <p className="text-gray-600 mb-6">
                Partner with us to reach the East Bay Muslim community and support meaningful cultural events.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Bronze Sponsor - $500</h4>
                  <p className="text-gray-600 text-sm">Logo on event materials and social media</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Silver Sponsor - $1,000</h4>
                  <p className="text-gray-600 text-sm">Booth space + enhanced promotion</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Gold Sponsor - $2,500</h4>
                  <p className="text-gray-600 text-sm">Title sponsor recognition + speaking opportunity</p>
                </div>
              </div>
              
              <Link
                href="/about/contact"
                className="block w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition-colors text-center"
              >
                Learn More About Sponsorship
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-lg mb-8 text-green-100">
            Whether you want to attend events, volunteer, or support our mission, there&apos;s a place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/events"
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View Upcoming Events
            </Link>
            <Link
              href="/volunteer"
              className="bg-green-500 hover:bg-green-400 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Volunteer with Us
            </Link>
            <Link
              href="/register"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Register for Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 