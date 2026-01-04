import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="border-t border-zinc-800 mt-12">
            <div className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-400 text-sm">
                <p className="mb-2">© 2025 CoderMana. All rights reserved.</p>
                <div className="flex justify-center gap-4">
                    <Link href="#" className="hover:text-codermana-orange transition-colors">About</Link>
                    <Link href="#schedule" className="hover:text-codermana-orange transition-colors">Schedule</Link>
                    <Link href="#" className="hover:text-codermana-orange transition-colors">Archive</Link>
                    <Link href="#" className="hover:text-codermana-orange transition-colors">Contact</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
