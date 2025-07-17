'use client';

import { useState, useEffect } from 'react';
import { HeartIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';

interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
}

interface InstagramFeedProps {
  posts?: InstagramPost[];
}

const InstagramFeed: React.FC<InstagramFeedProps> = ({ posts }) => {
  const [feedPosts, setFeedPosts] = useState<InstagramPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Sample posts for demonstration
    const samplePosts: InstagramPost[] = [
      {
        id: '1',
        imageUrl: '',
        caption: 'Amazing turnout at Pakistan Independence Day celebration! 🇵🇰',
        likes: 247,
        comments: 18,
        timestamp: '2 days ago'
      },
      {
        id: '2',
        imageUrl: '',
        caption: 'Delicious traditional food at our community gathering',
        likes: 156,
        comments: 12,
        timestamp: '1 week ago'
      },
      {
        id: '3',
        imageUrl: '',
        caption: 'Kids having fun at our youth sports day!',
        likes: 189,
        comments: 23,
        timestamp: '2 weeks ago'
      },
      {
        id: '4',
        imageUrl: '',
        caption: 'Thank you to all our volunteers for making events successful',
        likes: 203,
        comments: 31,
        timestamp: '3 weeks ago'
      },
      {
        id: '5',
        imageUrl: '',
        caption: 'Cultural performances bringing our community together',
        likes: 164,
        comments: 15,
        timestamp: '1 month ago'
      },
      {
        id: '6',
        imageUrl: '',
        caption: 'Beautiful moments from our Eid festival celebration',
        likes: 298,
        comments: 42,
        timestamp: '1 month ago'
      }
    ];

    // Simulate loading posts
    const timer = setTimeout(() => {
      setFeedPosts(posts || samplePosts);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [posts]);

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="animate-pulse">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded w-32"></div>
              <div className="h-3 bg-gray-300 rounded w-24"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-300 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
            <span className="text-white text-xl">📸</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">@eastbaymuslims</h3>
            <p className="text-gray-600 text-sm">Follow us on Instagram</p>
          </div>
        </div>
        <a
          href="https://instagram.com/eastbaymuslims"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
        >
          Follow
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {feedPosts.slice(0, 6).map((post) => (
          <div key={post.id} className="aspect-square bg-green-100 rounded-lg overflow-hidden group cursor-pointer relative">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-green-700 text-2xl">📱</span>
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="text-white text-center">
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <HeartIcon className="w-5 h-5" />
                    <span className="text-sm">{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ChatBubbleOvalLeftIcon className="w-5 h-5" />
                    <span className="text-sm">{post.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="border-t pt-4">
          <h4 className="font-semibold text-gray-800 mb-3">Latest Posts</h4>
          {feedPosts.slice(0, 3).map((post) => (
            <div key={post.id} className="flex space-x-3 mb-4 last:mb-0">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-green-700 text-lg">📱</span>
              </div>
              <div className="flex-1">
                <p className="text-gray-700 text-sm leading-relaxed">{post.caption}</p>
                <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                  <span>{post.timestamp}</span>
                  <span>{post.likes} likes</span>
                  <span>{post.comments} comments</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-6 pt-4 border-t">
        <a
          href="https://instagram.com/eastbaymuslims"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 hover:text-green-800 font-medium transition-colors"
        >
          View all posts on Instagram →
        </a>
      </div>
    </div>
  );
};

export default InstagramFeed; 