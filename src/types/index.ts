export interface Creator {
  id: string;
  name: string;
  avatar: string;
  coverImage: string;
  description: string;
  subscriberCount: number;
  monthlyPrice: number;
}

export interface Post {
  id: string;
  creatorId: string;
  type: 'image' | 'video';
  thumbnail: string;
  url: string;
  title: string;
  description: string;
  createdAt: Date;
  likes: number;
}

export interface Stream {
  id: string;
  creatorId: string;
  title: string;
  thumbnail: string;
  isLive: boolean;
  viewerCount: number;
  startedAt: Date;
}