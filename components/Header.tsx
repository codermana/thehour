import Link from 'next/link';

const Header = () => {
    return (
        <header className="border-b border-zinc-800 sticky top-0 bg-black/95 backdrop-blur-sm z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="text-2xl font-black text-codermana-orange">THE CODERMANA HOUR</div>
                    <span className="hidden sm:inline-block bg-red-600 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">LIVE</span>
                </div>
                <nav className="flex items-center gap-6">
                    <Link href="#schedule" className="text-gray-400 hover:text-codermana-orange transition-colors hidden sm:block">Schedule</Link>
                    <Link href="#about" className="text-gray-400 hover:text-codermana-orange transition-colors hidden sm:block">About</Link>
                    <button className="bg-codermana-orange hover:bg-codermana-dark-orange px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
                        Join Session
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
