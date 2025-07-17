import Link from 'next/link';
import { ChatBubbleOvalLeftIcon, StarIcon, CameraIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Community Feedback
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Your voice matters! Help us improve our events, share your experiences, and contribute to making our community celebrations even better.
            </p>
          </div>
        </div>
      </section>

      {/* Feedback Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Share Your Feedback</h2>
            <p className="text-lg text-gray-600">Choose how you&apos;d like to share your thoughts with us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Event Feedback */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChatBubbleOvalLeftIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">📝 Event Feedback</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Share your thoughts on recent events, what you enjoyed, and suggestions for improvement.
                </p>
                <Link
                  href="/feedback/event"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
                >
                  Give Event Feedback
                </Link>
              </div>
            </div>

            {/* Community Suggestions */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PaperAirplaneIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">💬 Suggestions</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Have ideas for new events, activities, or ways to improve our community?
                </p>
                <Link
                  href="/feedback/suggestions"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
                >
                  Share Suggestions
                </Link>
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <StarIcon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">⭐ Testimonials</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Share your positive experiences and help others discover our community.
                </p>
                <Link
                  href="/feedback/testimonials"
                  className="block w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
                >
                  Write Testimonial
                </Link>
              </div>
            </div>

            {/* Photo Upload */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CameraIcon className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">📷 Share Photos</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Upload your favorite photos from our events to share with the community.
                </p>
                <Link
                  href="/feedback/photos"
                  className="block w-full bg-pink-600 hover:bg-pink-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
                >
                  Upload Photos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Feedback Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Quick Feedback</h2>
            <p className="text-lg text-gray-600">Have a quick suggestion or comment? Let us know!</p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border-2 border-purple-200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Feedback Type
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option>Event Feedback</option>
                  <option>General Suggestion</option>
                  <option>Compliment</option>
                  <option>Complaint</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Share your thoughts, suggestions, or feedback..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Community Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Community Says</h2>
            <p className="text-lg text-gray-600">Read testimonials from fellow community members</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &quot;The Pakistan Independence Day celebration was absolutely wonderful! Great food, amazing performances, and such a welcoming atmosphere for families.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-semibold">AS</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Aisha S.</h4>
                  <p className="text-sm text-gray-500">Fremont, CA</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &quot;As a vendor, I was impressed by the organization and the warm community spirit. The event was well-managed and brought so many families together.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">MK</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Mohammed K.</h4>
                  <p className="text-sm text-gray-500">Hayward, CA</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &quot;My kids had such a great time at the youth sports day! It&apos;s wonderful to have events that bring our community together while keeping our culture alive.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-semibold">FH</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Fatima H.</h4>
                  <p className="text-sm text-gray-500">Union City, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Community Photo Gallery</h2>
            <p className="text-lg text-gray-600">Recent photos shared by our community members</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-square bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                <span className="text-white text-3xl">📸</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/feedback/photos"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Contact for Feedback */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">More Ways to Connect</h2>
          <p className="text-lg mb-8 text-purple-100">
            Prefer to share your feedback directly? Reach out to us through these channels.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">📧 Email</h3>
              <p className="text-purple-100">feedback@eastbaymuslims.org</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">📞 Phone</h3>
              <p className="text-purple-100">(510) 555-0127</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">💬 WhatsApp</h3>
              <p className="text-purple-100">(510) 555-0128</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about/contact"
              className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/volunteer"
              className="bg-purple-500 hover:bg-purple-400 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 