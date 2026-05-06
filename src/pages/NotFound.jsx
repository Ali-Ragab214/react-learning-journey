import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">

      <div className="text-center max-w-xl">

        <h1 className="text-8xl font-bold tracking-tight text-red-500">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-semibold">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-400 leading-relaxed">
          Sorry, the page you are looking for does not exist
          or has been moved.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">

          <Link
            to="/"
            className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="border border-gray-700 px-5 py-2 rounded-lg hover:bg-gray-900 transition"
          >
            Go Back
          </button>

        </div>

      </div>

    </div>
  );
}