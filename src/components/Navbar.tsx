'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    {
      title: 'Upcoming Events',
      href: '/events',
      dropdown: [
        { title: 'Family Festivals Calendar', href: '/events/calendar' },
        { title: 'Event Locations & Parking', href: '/events/locations' },
        { title: 'Performers & Attractions', href: '/events/performers' },
        { title: 'Past Events Gallery', href: '/events/gallery' }
      ]
    },
    {
      title: 'Register for Events',
      href: '/register',
      dropdown: [
        { title: 'Non-Food Vendor Registration', href: '/register/vendor' },
        { title: 'Food Vendor Registration', href: '/register/food-vendor' }
      ]
    },
    {
      title: 'Volunteer & Get Involved',
      href: '/volunteer',
      dropdown: [
        { title: 'Become a Volunteer', href: '/volunteer/join' },
        { title: 'Youth Engagement', href: '/volunteer/youth' },
        { title: 'Sisters\' Circle', href: '/volunteer/sisters' },
        { title: 'Community Partners', href: '/volunteer/partners' }
      ]
    },
    {
      title: 'Feedback & Suggestions',
      href: '/feedback',
      dropdown: [
        { title: 'Event Feedback', href: '/feedback/event' },
        { title: 'Community Suggestions', href: '/feedback/suggestions' },
        { title: 'Testimonials', href: '/feedback/testimonials' },
        { title: 'Upload Festival Pictures', href: '/feedback/photos' }
      ]
    },
    {
      title: 'About Us',
      href: '/about',
      dropdown: [
        { title: 'Our Story & Vision', href: '/about/story' },
        { title: 'Meet the Team', href: '/about/team' },
        { title: 'Contact Us', href: '/about/contact' },
        { title: 'Donations & Sponsorships', href: '/about/donate' }
      ]
    }
  ];

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">EB</span>
            </div>
            <span className="font-bold text-xl text-gray-800">East Bay Muslims</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.title} className="relative">
                <button
                  onClick={() => toggleDropdown(item.title)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-green-700 transition-colors duration-200"
                >
                  <span className="text-sm font-medium">{item.title}</span>
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                
                {/* Dropdown Menu */}
                {activeDropdown === item.title && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.title}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-200"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-700 transition-colors duration-200"
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.title}>
                <button
                  onClick={() => toggleDropdown(item.title)}
                  className="flex items-center justify-between w-full text-left px-3 py-2 text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-md transition-colors duration-200"
                >
                  <span className="font-medium">{item.title}</span>
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                
                {/* Mobile Dropdown */}
                {activeDropdown === item.title && (
                  <div className="pl-6 mt-2 space-y-1">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.title}
                        href={dropdownItem.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-md transition-colors duration-200"
                        onClick={() => {
                          setActiveDropdown(null);
                          setIsOpen(false);
                        }}
                      >
                        {dropdownItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 