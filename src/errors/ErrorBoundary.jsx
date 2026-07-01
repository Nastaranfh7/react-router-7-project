export default function ErrorBoundary({ error }) {
  return (
    <div className="max-w-lg mx-auto mt-16 p-8 bg-white rounded-xl shadow-lg text-center">
      
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        Something went wrong
      </h2>

      <p className="text-gray-700 text-lg mb-6">
        {error?.message || "An unexpected error occurred."}
      </p>

      <div className="flex justify-center gap-4 mt-6">
        
        <button
          onClick={() => window.history.back()}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Back
        </button>

        <button
          onClick={() => window.location.reload()}
          className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Retry
        </button>

      </div>
    </div>
  );
}
