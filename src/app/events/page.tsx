import { CalendarDaysIcon, MapPinIcon, ClockIcon, UsersIcon } from '@heroicons/react/24/outline';
import EventCard from '@/components/EventCard';
import Link from 'next/link';

export default function EventsPage() {
  const featuredEvent = {
    title: "Pakistan Independence Day Celebration",
    date: "August 31, 2025",
    time: "12:00 PM - 7:00 PM",
    location: "Central Park, Fremont",
    description: "Join us for a spectacular day of cultural celebration, featuring traditional performances, delicious Pakistani cuisine, children's activities, and community unity as we commemorate Pakistan's independence with pride and joy.",
    image: "/images/featured-event.jpg",
    featured: true
  };

  const upcomingEvents = [
    {
      title: "Eid Festival 2025",
      date: "April 15, 2025",
      time: "10:00 AM - 5:00 PM",
      location: "Bay Area Community Center",
      description: "Celebrate Eid with traditional festivities, cultural performances, and community gathering with families and friends.",
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
      title: "Cultural Night",
      date: "February 14, 2025",
      time: "6:00 PM - 10:00 PM",
      location: "Islamic Center of East Bay",
      description: "An evening of traditional music, poetry, and cultural performances celebrating our heritage.",
      image: "/images/cultural-night.jpg"
    },
    {
      title: "Family Picnic",
      date: "May 18, 2025",
      time: "11:00 AM - 6:00 PM",
      location: "Ardenwood Historic Farm",
      description: "A fun-filled day with games, food, and activities for the whole family in a beautiful outdoor setting.",
      image: "/images/family-picnic.jpg"
    },
    {
      title: "Ramadan Iftar Community Dinner",
      date: "March 28, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Fremont Community Center",
      description: "Join us for a communal iftar dinner during the holy month of Ramadan, sharing food and fellowship.",
      image: "/images/iftar-dinner.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Community Events
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join us for exciting festivals, cultural celebrations, and community gatherings throughout the year. All events are family-friendly and open to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Register for Events
              </Link>
              <Link
                href="/events/calendar"
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                View Calendar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">🎊 Featured Event</h2>
            <p className="text-lg text-gray-600">Don&apos;t miss our biggest celebration of the year!</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full mb-4">
                    Featured Event
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{featuredEvent.title}</h3>
                  <p className="text-gray-600 mb-6">{featuredEvent.description}</p>
                  
                                      <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-700">
                        <CalendarDaysIcon className="w-5 h-5 mr-3 text-gray-600" />
                        <span className="font-medium">{featuredEvent.date}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <ClockIcon className="w-5 h-5 mr-3 text-gray-600" />
                        <span className="font-medium">{featuredEvent.time}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <MapPinIcon className="w-5 h-5 mr-3 text-gray-600" />
                        <span className="font-medium">{featuredEvent.location}</span>
                      </div>
                    </div>
                  
                                      <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/register"
                        className="bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
                      >
                        Register Now
                      </Link>
                      <Link
                        href="/events/performers"
                        className="border border-gray-800 text-gray-800 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors text-center"
                      >
                        View Performers
                      </Link>
                    </div>
                </div>
                
                <div className="order-first lg:order-last">
                  <div className="h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-white text-6xl">🎉</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600">Mark your calendars for these exciting community celebrations</p>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Event Information</h2>
            <p className="text-lg text-gray-600">Everything you need to know about our events</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/events/calendar"
              className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-6 transition-colors group"
            >
              <div className="text-center">
                <CalendarDaysIcon className="w-12 h-12 text-gray-700 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">🎉 Event Calendar</h3>
                <p className="text-gray-600 text-sm">View all upcoming events in calendar format</p>
              </div>
            </Link>
            
            <Link
              href="/events/locations"
              className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-6 transition-colors group"
            >
              <div className="text-center">
                <MapPinIcon className="w-12 h-12 text-gray-700 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">📍 Locations & Parking</h3>
                <p className="text-gray-600 text-sm">Find event venues and parking information</p>
              </div>
            </Link>
            
            <Link
              href="/events/performers"
              className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-6 transition-colors group"
            >
              <div className="text-center">
                <UsersIcon className="w-12 h-12 text-gray-700 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">🎤 Performers</h3>
                <p className="text-gray-600 text-sm">Meet the talented artists and performers</p>
              </div>
            </Link>
            
            <Link
              href="/events/gallery"
              className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-6 transition-colors group"
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform flex items-center justify-center">
                  <span className="text-gray-700 text-2xl">📸</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">📸 Event Gallery</h3>
                <p className="text-gray-600 text-sm">Browse photos from past events</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-lg mb-8 text-gray-300">
            Register for upcoming events, volunteer to help, or become a vendor at our festivals. There&apos;s a place for everyone in our community!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Register for Events
            </Link>
            <Link
              href="/volunteer"
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Volunteer with Us
            </Link>
            <Link
              href="/register/vendor"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Become a Vendor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 