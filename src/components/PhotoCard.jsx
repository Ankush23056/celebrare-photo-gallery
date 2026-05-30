const PhotoCard = ({ photo }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800/80 hover:border-slate-700/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/5">
      {/* Image container with fixed aspect ratio */}
      <div className="aspect-[4/3] w-full overflow-hidden relative bg-slate-950">
        <img
          src={photo.download_url}
          alt={photo.author ? `Photo by ${photo.author}` : 'Picsum Photo'}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Info and Heart Button */}
      <div className="p-4 flex items-center justify-between gap-4">
        <div className="min-w-0">
          <span className="text-[10px] uppercase font-bold tracking-wider text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-md inline-block">
            ID: {photo.id}
          </span>
          <h3 className="font-semibold text-slate-200 mt-2 text-sm truncate group-hover:text-purple-400 transition-colors duration-300">
            {photo.author}
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">Picsum Collection</p>
        </div>
        
        {/* Placeholder Heart Button (Inline SVG Icon) */}
        <button 
          type="button"
          aria-label="Favorite photo"
          className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 hover:text-rose-500 hover:bg-rose-500/10 flex items-center justify-center transition-all duration-300 shrink-0"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PhotoCard;
