export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Home</h1>
        <p className="text-lg text-gray-600 mb-8">This is the home page of your React application with Tailwind CSS and shadcn components.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Feature 1</h2>
            <p className="text-gray-600">Description of your first feature goes here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Feature 2</h2>
            <p className="text-gray-600">Description of your second feature goes here.</p>
          </div>
        </div>
      </div>
    </div>
  )
}