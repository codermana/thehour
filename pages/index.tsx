import Head from 'next/head';
import Header from '../components/Header';
import MainVideoArea from '../components/MainVideoArea';
import ChatSidebar from '../components/ChatSidebar';
import UpcomingSessions from '../components/UpcomingSessions';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="bg-black text-white">
            <Head>
                <title>The CoderMana Hour - Live Now</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://cdn.tailwindcss.com" />
                <style jsx global>{`
                    :root {
                        --codermana-orange: #FF8C42;
                        --codermana-dark-orange: #FF6B1A;
                    }
                `}</style>
            </Head>

            <Header />

            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <MainVideoArea />
                    <ChatSidebar />
                </div>

                <UpcomingSessions />
            </div>

            <Footer />
        </div>
    );
}
