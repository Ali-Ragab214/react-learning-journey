export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 mb-8">Learn more about our project and what we do.</p>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">We are dedicated to building beautiful and functional React applications with modern tools and frameworks.</p>
          <p className="text-gray-600">This project demonstrates the integration of React Router, Tailwind CSS, and shadcn components.</p>
        </div>
      </div>
    </div>
  )
}