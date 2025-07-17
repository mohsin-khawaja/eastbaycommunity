import Link from 'next/link';
import { ChatBubbleOvalLeftIcon, StarIcon, CameraIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Community Feedback
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Your voice matters! Help us improve our events, share your experiences, and contribute to making our community celebrations even better.
            </p>
          </div>
        </div>
      </section>

      {/* Feedback Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How Would You Like to Share?</h2>
            <p className="text-lg text-gray-600">Choose the feedback option that works best for you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-lg p-6 text-center transition-colors">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChatBubbleOvalLeftIcon className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Event Feedback</h3>
              <p className="text-gray-600 mb-4">Share your thoughts about recent events and celebrations</p>
              <Link
                href="/feedback/event"
                className="inline-block bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Give Event Feedback
              </Link>
            </div>
            
            <div className="bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-lg p-6 text-center transition-colors">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PaperAirplaneIcon className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Suggestions</h3>
              <p className="text-gray-600 mb-4">Suggest new events, improvements, or community initiatives</p>
              <Link
                href="/feedback/suggestions"
                className="inline-block bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Make Suggestions
              </Link>
            </div>
            
            <div className="bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-lg p-6 text-center transition-colors">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <StarIcon className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Testimonials</h3>
              <p className="text-gray-600 mb-4">Share your positive experiences and community stories</p>
              <Link
                href="/feedback/testimonials"
                className="inline-block bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Share Testimonial
              </Link>
            </div>
            
            <div className="bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-lg p-6 text-center transition-colors">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CameraIcon className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Upload Photos</h3>
              <p className="text-gray-600 mb-4">Share your favorite moments and memories from our events</p>
              <Link
                href="/feedback/photos"
                className="inline-block bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Upload Photos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Feedback Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Quick Feedback Form</h2>
            <p className="text-lg text-gray-600">Share your thoughts in just a few clicks</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email (Optional)
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
                <label htmlFor="event" className="block text-sm font-medium text-gray-700 mb-2">
                  Which event are you providing feedback about?
                </label>
                <select
                  id="event"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select an event</option>
                  <option value="pakistan-independence">Pakistan Independence Day 2024</option>
                  <option value="eid-festival">Eid Festival 2024</option>
                  <option value="youth-sports">Youth Sports Day 2024</option>
                  <option value="community-potluck">Community Potluck</option>
                  <option value="general">General Community Feedback</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">
                  Overall Rating
                </label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="text-2xl text-gray-300 hover:text-green-500 transition-colors"
                    >
                      ⭐
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Feedback
                </label>
                <textarea
                  id="feedback"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Tell us about your experience, suggestions for improvement, or what you loved about the event..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Recent Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Community Says</h2>
            <p className="text-lg text-gray-600">Hear from families who&apos;ve attended our events</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-700 font-semibold">AK</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Amina Khan</h3>
                  <p className="text-sm text-gray-600">Pakistan Independence Day 2024</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-green-600">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-sm">⭐</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700">
                &quot;The Pakistan Independence Day celebration was absolutely wonderful! The food was delicious, the performances were amazing, and my children had so much fun. Thank you for organizing such a beautiful event.&quot;
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-700 font-semibold">MR</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Mohammed Rahman</h3>
                  <p className="text-sm text-gray-600">Eid Festival 2024</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-green-600">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-sm">⭐</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700">
                &quot;Great organization and such a welcoming atmosphere. It&apos;s wonderful to see our community come together to celebrate our traditions. Looking forward to the next event!&quot;
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-700 font-semibold">FA</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Fatima Ali</h3>
                  <p className="text-sm text-gray-600">Youth Sports Day 2024</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-green-600">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-sm">⭐</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700">
                &quot;The youth sports day was fantastic! My kids made new friends and had a blast playing cricket and football. The volunteers were amazing and so helpful.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Photo Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Community Photo Gallery</h2>
            <p className="text-lg text-gray-600">Recent photos shared by our community members</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-square bg-green-100 rounded-lg flex items-center justify-center border-2 border-green-200">
                <span className="text-green-700 text-lg font-semibold">Photo</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/feedback/photos"
              className="inline-block bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Contact for Feedback */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">More Ways to Connect</h2>
          <p className="text-lg mb-8 text-green-100">
            Prefer to share your feedback directly? Reach out to us through these channels.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">📧 Email</h3>
              <p className="text-green-100">feedback@eastbaymuslims.org</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">📞 Phone</h3>
              <p className="text-green-100">(510)-734-2458</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">💬 WhatsApp</h3>
              <p className="text-green-100">(510) 555-0128</p>
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
              href="/volunteer"
              className="bg-green-700 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 