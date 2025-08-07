// loading animations
const shimmer = 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

function EventsSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.10]">
      <div className={`relative w-full h-48 sm:h-64 md:h-72 bg-gray-200 ${shimmer}`}></div>

      <div className="p-6">
        <div className={`h-6 bg-gray-200 rounded w-3/4 mb-4 ${shimmer}`}></div>
        <div className={`h-4 bg-gray-200 rounded w-full ${shimmer}`}></div>
      </div>
    </div>
  );
}

export function EventsSkeletons() {
  return (
    <div className="min-h-screen mt-[90vh] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#d59f0f] mb-4">School Events</h1>
          <p className="text-lg text-gray-600">Stay updated with our latest events and activities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <EventsSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
