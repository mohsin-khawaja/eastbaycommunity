import { CalendarDaysIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  featured?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  time,
  location,
  description,
  image,
  featured = false
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${featured ? 'ring-2 ring-gray-800' : ''}`}>
      {image && (
                  <div className="h-48 bg-gray-300 flex items-center justify-center">
          <span className="text-gray-600 text-xl font-semibold">Event Image</span>
        </div>
      )}
      
      <div className="p-6">
        {featured && (
          <div className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full mb-2">
            Featured Event
          </div>
        )}
        
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center text-gray-500">
            <CalendarDaysIcon className="w-4 h-4 mr-2" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <ClockIcon className="w-4 h-4 mr-2" />
            <span className="text-sm">{time}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <MapPinIcon className="w-4 h-4 mr-2" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
        
        <div className="mt-4 flex space-x-2">
          <button className="bg-gray-800 hover:bg-black text-white px-4 py-2 rounded text-sm font-medium transition-colors">
            Learn More
          </button>
          <button className="border border-gray-800 text-gray-800 hover:bg-gray-100 px-4 py-2 rounded text-sm font-medium transition-colors">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard; 