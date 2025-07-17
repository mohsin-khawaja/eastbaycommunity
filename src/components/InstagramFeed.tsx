'use client';

import { useState } from 'react';
import { HeartIcon, ChatBubbleOvalLeftIcon, ShareIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
  liked: boolean;
}

interface InstagramFeedProps {
  posts?: InstagramPost[];
}

const InstagramFeed: React.FC<InstagramFeedProps> = ({ posts = [] }) => {
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  // Sample posts if none provided
  const samplePosts: InstagramPost[] = [
    {
      id: '1',
      image: '',
      caption: 'Beautiful moments from our Pakistan Independence Day celebration! 🇵🇰 #EastBayMuslims #Community',
      likes: 45,
      comments: 12,
      timestamp: '2 hours ago',
      liked: false
    },
    {
      id: '2',
      image: '',
      caption: 'Families enjoying delicious food at our annual festival 🍽️ #FamilyFun #CommunityEvent',
      likes: 32,
      comments: 8,
      timestamp: '1 day ago',
      liked: false
    },
    {
      id: '3',
      image: '',
      caption: 'Volunteers making our events possible! Join us next time 🤝 #Volunteer #Community',
      likes: 28,
      comments: 6,
      timestamp: '3 days ago',
      liked: false
    },
    {
      id: '4',
      image: '',
      caption: 'Cultural performances bringing our community together 🎭 #Culture #Performance',
      likes: 51,
      comments: 15,
      timestamp: '1 week ago',
      liked: false
    }
  ];

  const displayPosts = posts.length > 0 ? posts : samplePosts;

  const toggleLike = (postId: string) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
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
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
        >
          Follow
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayPosts.map((post) => {
          const isLiked = likedPosts.has(post.id);
          const likes = post.likes + (isLiked ? 1 : 0);

          return (
            <div key={post.id} className="bg-gray-50 rounded-lg overflow-hidden">
              {/* Post Image */}
              <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                <span className="text-white text-4xl">🎉</span>
              </div>

              {/* Post Content */}
              <div className="p-4">
                {/* Actions */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className={`flex items-center space-x-1 transition-colors ${
                        isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
                      }`}
                    >
                      {isLiked ? (
                        <HeartIconSolid className="w-5 h-5" />
                      ) : (
                        <HeartIcon className="w-5 h-5" />
                      )}
                      <span className="text-sm">{likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500 transition-colors">
                      <ChatBubbleOvalLeftIcon className="w-5 h-5" />
                      <span className="text-sm">{post.comments}</span>
                    </button>
                    <button className="text-gray-600 hover:text-green-500 transition-colors">
                      <ShareIcon className="w-5 h-5" />
                    </button>
                  </div>
                  <span className="text-xs text-gray-500">{post.timestamp}</span>
                </div>

                {/* Caption */}
                <p className="text-gray-800 text-sm leading-relaxed">
                  {post.caption}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* View More */}
      <div className="mt-6 text-center">
        <a
          href="https://instagram.com/eastbaymuslims"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
        >
          View all posts on Instagram →
        </a>
      </div>
    </div>
  );
};

export default InstagramFeed; 