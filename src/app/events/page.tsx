import Link from 'next/link';
import { CalendarDaysIcon, MapPinIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import EventCard from '@/components/EventCard';

export default function EventsPage() {
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
    },
    {
      title: "Community Potluck",
      date: "February 28, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "East Bay Community Hall",
      description: "Bring your favorite dish and join us for an evening of food, friendship, and community bonding.",
      image: "/images/potluck.jpg"
    },
    {
      title: "Cultural Arts Workshop",
      date: "March 15, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Fremont Art Center",
      description: "Learn traditional crafts, calligraphy, and art techniques from skilled community artists.",
      image: "/images/arts-workshop.jpg"
    },
    {
      title: "Charity Drive & Fundraiser",
      date: "April 8, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Central Park Pavilion",
      description: "Come together to support local families in need through our annual charity drive and fundraising event.",
      image: "/images/charity-drive.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Upcoming Events
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join us for exciting community celebrations, cultural festivities, and meaningful gatherings that bring our East Bay Muslim community together.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Event</h2>
            <p className="text-lg text-gray-600">Don&apos;t miss our special upcoming celebration</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full mb-4">
                    Featured Event
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{featuredEvent.title}</h3>
                  <p className="text-gray-600 mb-6">{featuredEvent.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <CalendarDaysIcon className="w-5 h-5 mr-3 text-green-600" />
                      <span>{featuredEvent.date}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <ClockIcon className="w-5 h-5 mr-3 text-green-600" />
                      <span>{featuredEvent.time}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPinIcon className="w-5 h-5 mr-3 text-green-600" />
                      <span>{featuredEvent.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/register"
                      className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors"
                    >
                      Register Now
                    </Link>
                    <Link
                      href="/events/pakistan-independence-day"
                      className="border border-green-700 text-green-700 hover:bg-green-50 px-6 py-3 rounded-lg font-medium text-center transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                
                <div className="h-80 bg-green-200 rounded-lg flex items-center justify-center">
                  <span className="text-green-800 text-lg font-semibold">Event Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">All Upcoming Events</h2>
            <p className="text-lg text-gray-600">Mark your calendars for these exciting community gatherings</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Event Resources</h2>
            <p className="text-lg text-gray-600">Everything you need to know about our events</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/events/calendar"
              className="bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg p-6 text-center transition-colors group"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <CalendarDaysIcon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Festival Calendar</h3>
              <p className="text-gray-600 text-sm">View all upcoming events in calendar format</p>
            </Link>
            
            <Link
              href="/events/locations"
              className="bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg p-6 text-center transition-colors group"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <MapPinIcon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Locations & Parking</h3>
              <p className="text-gray-600 text-sm">Find event venues and parking information</p>
            </Link>
            
            <Link
              href="/events/performers"
              className="bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg p-6 text-center transition-colors group"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <UserGroupIcon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Performers & Activities</h3>
              <p className="text-gray-600 text-sm">Meet the artists and see planned activities</p>
            </Link>
            
            <Link
              href="/events/gallery"
              className="bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg p-6 text-center transition-colors group"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <span className="text-green-600 text-lg">📸</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Past Events Gallery</h3>
              <p className="text-gray-600 text-sm">Browse photos from previous celebrations</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-lg mb-8 text-green-100">
            Register for upcoming events, volunteer your time, or simply come and celebrate with our community family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-white text-green-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Register for Events
            </Link>
            <Link
              href="/volunteer"
              className="bg-green-700 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Volunteer with Us
            </Link>
            <Link
              href="/about/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-900 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 