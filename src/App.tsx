import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { CreatorCard } from './components/creator/CreatorCard';
import { StreamCard } from './components/stream/StreamCard';

const FEATURED_CREATOR: Creator = {
  id: '1',
  name: 'Sarah Dreams',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  coverImage: 'https://images.unsplash.com/photo-1616763355603-9755a640a287?w=1200',
  description: 'Digital artist and content creator sharing my creative journey and exclusive artwork.',
  subscriberCount: 50000,
  monthlyPrice: 9.99
};

const FEATURED_STREAM: Stream = {
  id: '1',
  creatorId: '1',
  title: 'Live Digital Art Session - Creating Fantasy Landscapes',
  thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200',
  isLive: true,
  viewerCount: 1234,
  startedAt: new Date()
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <Navbar />
        <main className="container mx-auto px-4 pt-20">
          {/* Hero Section */}
          <div className="mb-16 mt-8 text-center">
            <h1 className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-5xl font-bold text-transparent">
              Welcome to XFactory
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              Your premium destination for exclusive content and live entertainment
            </p>
          </div>

          {/* Featured Creator */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Featured Creator</h2>
            <CreatorCard creator={FEATURED_CREATOR} />
          </section>

          {/* Live Now */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Live Now</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <StreamCard stream={FEATURED_STREAM} />
            </div>
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;