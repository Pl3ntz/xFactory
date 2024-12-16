import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import type { Creator } from '../../types';

interface CreatorCardProps {
  creator: Creator;
}

export function CreatorCard({ creator }: CreatorCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gray-900">
      <div className="aspect-[16/9]">
        <img
          src={creator.coverImage}
          alt={creator.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 p-4">
        <div className="flex items-center space-x-3">
          <img
            src={creator.avatar}
            alt={creator.name}
            className="h-12 w-12 rounded-full border-2 border-pink-500"
          />
          <div>
            <h3 className="text-lg font-semibold text-white">{creator.name}</h3>
            <p className="text-sm text-gray-300">
              {creator.subscriberCount.toLocaleString()} subscribers
            </p>
          </div>
        </div>
        <p className="mt-2 line-clamp-2 text-sm text-gray-300">
          {creator.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-white">
            ${creator.monthlyPrice}/month
          </span>
          <Button size="sm">Subscribe</Button>
        </div>
      </div>
    </div>
  );
}