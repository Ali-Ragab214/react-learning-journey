import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4 flex gap-6 items-center">
          <Link to="/" className="text-xl font-bold hover:text-gray-300 transition">React App</Link>
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          <Link to="/about" className="hover:text-gray-300 transition">About</Link>
          <Link to="/login" className="ml-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition">Login</Link>
          <Link to="/register" className="ml-auto px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md transition">Register</Link>

        </div>
      </nav>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-gray-200 text-gray-800 p-4 text-center mt-8">
        <p>&copy; 2024 React App. All rights reserved.</p>
      </footer>
    </div>
  );
}