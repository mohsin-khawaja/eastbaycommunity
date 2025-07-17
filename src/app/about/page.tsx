import Link from 'next/link';
import { HeartIcon, UserGroupIcon, MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-20">
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600">From humble beginnings to a thriving community</p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              East Bay Muslims was founded in 2020 with a simple yet powerful vision: to create a space where Muslim families in the East Bay Area could come together, celebrate their heritage, and build lasting connections. What started as small gatherings in community centers has grown into one of the region&apos;s most vibrant and inclusive Muslim community organizations.
            </p>
            
            <p className="text-gray-600 mb-6">
              Our journey began when a group of families realized the need for regular, family-friendly events that would bring together Muslims from diverse backgrounds - Pakistani, Indian, Bangladeshi, Arab, African, and converts from all walks of life. We wanted to create celebrations that honored our shared faith while embracing the beautiful diversity within our community.
            </p>
            
            <p className="text-gray-600 mb-6">
              Today, we organize multiple events throughout the year, including our flagship Pakistan Independence Day celebration, Eid festivals, sports tournaments, cultural nights, and community service projects. Each event is designed to strengthen bonds, create joy, and provide opportunities for families to connect in meaningful ways.
            </p>
            
            <p className="text-gray-600">
              We believe that when communities come together in celebration and service, they create ripple effects of positivity that extend far beyond our immediate circle. Through our events, we&apos;ve witnessed countless friendships formed, business partnerships created, and a genuine sense of belonging fostered among community members.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Unity & Inclusion</h3>
              <p className="text-gray-600">
                We welcome all families regardless of their background, creating an inclusive environment where everyone feels valued and accepted.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Family First</h3>
              <p className="text-gray-600">
                Every event is designed with families in mind, ensuring safe, engaging, and meaningful experiences for all ages.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-700 text-2xl">★</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Excellence & Authenticity</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do while staying true to our cultural roots and Islamic values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">Dedicated volunteers working to serve our community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-700 text-3xl font-bold">AA</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Ahmed Ali</h3>
              <p className="text-green-600 text-sm mb-2">Founder & President</p>
              <p className="text-gray-600 text-sm">Leading community initiatives and event planning since 2020</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-700 text-3xl font-bold">FK</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Fatima Khan</h3>
              <p className="text-green-600 text-sm mb-2">Event Coordinator</p>
              <p className="text-gray-600 text-sm">Organizing memorable family events and cultural celebrations</p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-700 text-3xl font-bold">UR</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Usman Rahman</h3>
              <p className="text-green-600 text-sm mb-2">Community Outreach</p>
              <p className="text-gray-600 text-sm">Building bridges and fostering connections within the community</p>
            </div>
            
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-700 text-3xl font-bold">AS</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Aisha Siddiqui</h3>
              <p className="text-green-600 text-sm mb-2">Volunteer Coordinator</p>
              <p className="text-gray-600 text-sm">Managing our dedicated team of community volunteers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">We&apos;d love to hear from you and answer any questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPinIcon className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Visit Us</h3>
              <p className="text-gray-600 mb-4">
                East Bay Area, California<br />
                Various event locations
              </p>
              <Link
                href="/events/locations"
                className="inline-block bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                View Locations
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <EnvelopeIcon className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-4">
                info@eastbaymuslims.org<br />
                events@eastbaymuslims.org
              </p>
              <Link
                href="mailto:info@eastbaymuslims.org"
                className="inline-block bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Send Email
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-4">
                (510)-734-2458<br />
                Monday - Friday, 9 AM - 6 PM
              </p>
              <Link
                href="tel:+15107342458"
                className="inline-block bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
            <p className="text-lg text-gray-600">Have questions or want to get involved? We&apos;d love to hear from you!</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                  placeholder="What&apos;s this about?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                  placeholder="Tell us what you&apos;d like to know or how you&apos;d like to get involved..."
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Support Our Mission</h2>
            <p className="text-lg text-gray-600">Help us continue building community through your generous support</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Make a Donation</h3>
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
              
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors">
                  PayPal
                </button>
                <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors">
                  Zelle
                </button>
                <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors">
                  Venmo
                </button>
                <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors">
                  Bank Transfer
                </button>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Volunteer With Us</h3>
              <p className="text-gray-600 mb-6">
                Join our team of dedicated volunteers and help make our community events successful and memorable.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Event setup and coordination</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Registration and guest services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Children&apos;s activities coordination</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Photography and social media</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Cleanup and logistics</span>
                </div>
              </div>
              
              <Link
                href="/volunteer"
                className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
                      <p className="text-lg mb-8 text-green-100">
              Whether you want to attend events, volunteer, or support our mission, there&apos;s a place for you in our community.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/events"
              className="bg-white text-green-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View Upcoming Events
            </Link>
            <Link
              href="/volunteer"
              className="bg-green-700 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Volunteer with Us
            </Link>
            <Link
              href="/register"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-900 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Register for Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 