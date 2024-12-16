import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';
import type { Stream } from '../../types';

interface StreamCardProps {
  stream: Stream;
}

export function StreamCard({ stream }: StreamCardProps) {
  return (
    <Link to={`/stream/${stream.id}`} className="group block">
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <img
          src={stream.thumbnail}
          alt={stream.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {stream.isLive && (
          <div className="absolute left-2 top-2 rounded bg-red-600 px-2 py-1 text-xs font-semibold text-white">
            LIVE
          </div>
        )}
        <div className="absolute bottom-2 right-2 flex items-center space-x-1 rounded bg-black/70 px-2 py-1">
          <Users className="h-4 w-4 text-white" />
          <span className="text-sm text-white">
            {stream.viewerCount.toLocaleString()}
          </span>
        </div>
      </div>
      <h3 className="mt-2 font-semibold text-white group-hover:text-pink-500">
        {stream.title}
      </h3>
    </Link>
  );
}