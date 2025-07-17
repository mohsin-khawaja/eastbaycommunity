import Link from 'next/link';
import { CalendarDaysIcon, UserGroupIcon, HeartIcon } from '@heroicons/react/24/outline';
import EventCard from '@/components/EventCard';
import PhotoSlider from '@/components/PhotoSlider';
import InstagramFeed from '@/components/InstagramFeed';
import LanguageToggle from '@/components/LanguageToggle';

export default function Home() {
  // Sample event data
  const featuredEvent = {
    title: "Pakistan Independence Day Celebration",
    date: "August 31, 2025",
    time: "12:00 PM - 7:00 PM",
    location: "Central Park, Fremont",
    description: "Join us for a day of cultural celebration, delicious food, performances, and community unity as we commemorate Pakistan's independence.",
    image: "/images/featured-event.jpg",
    featured: true
  };

  const upcomingEvents = [
    {
      title: "Eid Festival 2025",
      date: "April 15, 2025",
      time: "10:00 AM - 5:00 PM",
      location: "Bay Area Community Center",
      description: "Celebrate Eid with traditional festivities, cultural performances, and community gathering.",
      image: "/images/eid-festival.jpg"
    },
    {
      title: "Youth Sports Day",
      date: "March 22, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Fremont Sports Complex",
      description: "Athletic competitions, team building activities, and fun for all ages in our community.",
      image: "/images/sports-day.jpg"
    }
  ];

  const samplePhotos = [
    { id: '1', url: '', alt: 'Community gathering', caption: 'Beautiful moments from our Pakistan Independence Day celebration!' },
    { id: '2', url: '', alt: 'Cultural performance', caption: 'Traditional performances bringing our community together' },
    { id: '3', url: '', alt: 'Family activities', caption: 'Families enjoying festivities and creating memories' },
    { id: '4', url: '', alt: 'Food festival', caption: 'Delicious traditional foods shared with love' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              East Bay Muslims
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-green-100">
              Family Festivals and Entertainment
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              We are a nonprofit organization rooted in purpose and unity, bringing together the East Bay Muslim community through family-friendly festivals and meaningful connections.
            </p>
            
            {/* Featured Event Banner */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-2xl">🎊</span>
                <span className="text-lg font-semibold">Featured Event</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{featuredEvent.title}</h3>
              <p className="text-green-100 mb-4">{featuredEvent.date} • {featuredEvent.time}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/events"
                  className="bg-white text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  View Details
                </Link>
                <Link
                  href="/register"
                  className="bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Register Now
                </Link>
              </div>
            </div>

            {/* Language Toggle */}
            <div className="flex justify-center">
              <LanguageToggle className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            We are a nonprofit organization rooted in purpose and unity. Our mission is to create a vibrant, inclusive community where families can come together to celebrate our rich cultural heritage, strengthen bonds, and build lasting connections through meaningful events and shared experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Unity</h3>
              <p className="text-gray-600">Bringing families together through shared celebrations and cultural events</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CalendarDaysIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Cultural Heritage</h3>
              <p className="text-gray-600">Celebrating and preserving our traditions for future generations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Family Values</h3>
              <p className="text-gray-600">Creating safe, family-friendly environments for meaningful connections</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Slider */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Memories from Our Events</h2>
          <PhotoSlider photos={samplePhotos} />
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600">Join us for these exciting community celebrations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard {...featuredEvent} />
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/events"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-block"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Follow Our Journey</h2>
          <InstagramFeed />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Involved Today</h2>
          <p className="text-lg mb-8 text-green-100">
            Whether you want to volunteer, register for events, or simply stay connected with our community, we welcome you with open arms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/volunteer"
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Become a Volunteer
            </Link>
            <Link
              href="/register"
              className="bg-green-500 hover:bg-green-400 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Register for Events
            </Link>
            <Link
              href="/about/donate"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
