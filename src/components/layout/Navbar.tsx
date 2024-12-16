import { Link } from 'react-router-dom';
import { Search, Bell, Menu } from 'lucide-react';
import { Button } from '../ui/Button';

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-2xl font-bold text-transparent">
            XFactory
          </span>
        </Link>

        <div className="hidden md:flex md:flex-1 md:items-center md:justify-center">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search creators..."
              className="w-full rounded-full bg-gray-800 px-4 py-2 pl-10 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="rounded-full p-2 hover:bg-gray-800">
            <Bell className="h-6 w-6 text-gray-400" />
          </button>
          <Button size="sm">Sign In</Button>
          <button className="md:hidden rounded-full p-2 hover:bg-gray-800">
            <Menu className="h-6 w-6 text-gray-400" />
          </button>
        </div>
      </div>
    </nav>
  );
}