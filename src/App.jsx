import { useState } from 'react';

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Nature', 'Architecture', 'Travel', 'Minimalism'];

  const photos = [
    {
      id: 1,
      title: 'Serene Lakes',
      category: 'Nature',
      gradient: 'from-blue-600 to-cyan-500',
      author: 'Lucas Vance'
    },
    {
      id: 2,
      title: 'Brutalist Towers',
      category: 'Architecture',
      gradient: 'from-amber-500 to-rose-500',
      author: 'Elena Rostova'
    },
    {
      id: 3,
      title: 'Neon Tokyo Streets',
      category: 'Travel',
      gradient: 'from-purple-600 to-pink-500',
      author: 'Sora Sato'
    },
    {
      id: 4,
      title: 'Geometric Shadows',
      category: 'Minimalism',
      gradient: 'from-teal-500 to-emerald-400',
      author: 'Marc Aubert'
    },
    {
      id: 5,
      title: 'Mountain Ridges',
      category: 'Nature',
      gradient: 'from-violet-600 to-indigo-600',
      author: 'Sarah Jenkins'
    },
    {
      id: 6,
      title: 'Golden Archways',
      category: 'Architecture',
      gradient: 'from-orange-500 to-yellow-400',
      author: 'Mateo Silva'
    }
  ];

  const filteredPhotos = photos.filter(photo => {
    const matchesCategory = activeCategory === 'All' || photo.category === activeCategory;
    const matchesSearch = photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          photo.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
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
              placeholder="Search photos or creators..."
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
            Curated Collections
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white leading-tight">
            Visual stories that <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">inspire</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
            Discover breathtaking captures from across the globe, structured inside a minimalistic digital canvas. Built with React and Tailwind CSS.
          </p>
        </section>

        {/* Filters */}
        <section className="mb-8 flex flex-wrap gap-2 items-center justify-start pb-4 border-b border-slate-900">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all duration-300 uppercase ${
                activeCategory === category
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 scale-105'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </section>

        {/* Gallery Grid */}
        {filteredPhotos.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800/80 hover:border-slate-700/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/5"
              >
                {/* Image Placeholder with Gradient */}
                <div className={`aspect-[4/3] w-full bg-gradient-to-br ${photo.gradient} relative flex items-center justify-center p-8 overflow-hidden`}>
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors duration-300"></div>
                  {/* Subtle Grid Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                  
                  {/* Decorative Icon */}
                  <svg className="w-12 h-12 text-white/40 group-hover:scale-110 group-hover:text-white/60 transition-all duration-500 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>

                {/* Info Overlay / Footer */}
                <div className="p-5 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-md">
                      {photo.category}
                    </span>
                    <h3 className="font-semibold text-slate-100 mt-2 text-base group-hover:text-purple-400 transition-colors duration-300">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">by {photo.author}</p>
                  </div>
                  <button className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-600/30 flex items-center justify-center transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </section>
        ) : (
          <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-dashed border-slate-800">
            <svg className="w-12 h-12 text-slate-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-base font-semibold text-slate-300">No photos found</h3>
            <p className="text-sm text-slate-500 mt-1">Try expanding your search or selecting a different category.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-600">
        <p>© 2026 Photo Gallery App. Built using Vite, React, and Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
