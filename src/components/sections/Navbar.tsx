export default function Navbar() {
  function toggleTheme() {
      const html = document.documentElement;
      const isDark = html.classList.contains('dark');
      html.classList.toggle('dark', !isDark);
      localStorage.setItem('theme', isDark ? 'light' : 'dark');
  }

  return (
    <header className="border-b border-gray-200 dark:border-zinc-800 sticky top-0 bg-white/95 dark:bg-black/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="text-2xl font-black text-codermana-orange hover:text-codermana-dark-orange transition-colors">
                <div className="flex items-center gap-2 text-2xl font-bold">
                    <img
                        src="/favicon.svg"
                        alt="CoderMana Logo"
                        className="h-10 display-inline-block"
                        width={35}
                        height={40}
                    />

                    <span>THE CODERMANA HOUR</span>
                </div>
            </a>
            <nav className="flex items-center gap-6">
                <a href="/sessions" className="text-gray-600 dark:text-gray-400 hover:text-codermana-orange dark:hover:text-codermana-orange transition-colors hidden sm:block">
                    Sessions
                </a>
                <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-codermana-orange dark:hover:text-codermana-orange transition-colors hidden sm:block">
                    About
                </a>

                <button id="theme-toggle" onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors" aria-label="Toggle theme">
                    <svg id="theme-icon-light" className="w-5 h-5 hidden dark:block text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                    <svg id="theme-icon-dark" className="w-5 h-5 block dark:hidden text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                    </svg>
                </button>

                <a href="/#subscribe" className="bg-codermana-orange hover:bg-codermana-dark-orange text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
                    Subscribe
                </a>
            </nav>
        </div>
    </header>
  );
}
