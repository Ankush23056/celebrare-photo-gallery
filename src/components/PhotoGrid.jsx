import PhotoCard from './PhotoCard';

const PhotoGrid = ({ photos, loading, error }) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        {/* Centered animated spinner */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-purple-500/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-purple-500 animate-spin"></div>
        </div>
        <p className="text-slate-400 text-sm font-medium animate-pulse">Fetching stunning visuals...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-xl mx-auto my-12 p-6 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-center">
        <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-rose-200">Something went wrong</h3>
        <p className="text-sm text-rose-400/80 mt-2">{error}</p>
        <button 
          type="button"
          onClick={() => window.location.reload()}
          className="mt-5 px-4 py-2 rounded-xl bg-rose-500 text-white text-xs font-semibold hover:bg-rose-600 transition-all duration-300 shadow-lg shadow-rose-500/20"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!photos || photos.length === 0) {
    return (
      <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-dashed border-slate-800">
        <svg className="w-12 h-12 text-slate-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-base font-semibold text-slate-300">No photos found</h3>
        <p className="text-sm text-slate-500 mt-1">Check back later for fresh updates.</p>
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </section>
  );
};

export default PhotoGrid;
