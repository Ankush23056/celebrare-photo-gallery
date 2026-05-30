import { useState } from 'react';
import useFetchPhotos from './hooks/useFetchPhotos';
import PhotoGrid from './components/PhotoGrid';

function App() {
  const { photos, loading, error } = useFetchPhotos();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPhotos = photos.filter(photo => {
    const matchesSearch = photo.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          photo.id.toString().includes(searchQuery);
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500 selection:text-white">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-900 px-6 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo / Title */}
          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-purple-400 bg-clip-text text-transparent">
                Photo Gallery App
              </h1>
              <p className="text-[10px] text-slate-500 tracking-wider uppercase font-semibold">Premium Showcase</p>
            </div>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search by author or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300"
            />
            <svg className="w-4 h-4 text-slate-500 absolute left-3 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-purple-400 mb-4 hover:border-purple-500/30 transition-all duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
            Live Picsum Stream
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white leading-tight">
            Visual stories that <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">inspire</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
            Discover breathtaking captures from across the globe, structured inside a minimalistic digital canvas. Built with React and Tailwind CSS.
          </p>
        </section>

        {/* Gallery Grid Section */}
        <PhotoGrid photos={filteredPhotos} loading={loading} error={error} />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-600">
        <p>© 2026 Photo Gallery App. Built using Vite, React, and Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
