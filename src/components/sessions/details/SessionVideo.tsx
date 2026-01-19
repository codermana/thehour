export default function SessionVideo() {
  return (
    <>
      <div className="bg-gray-900 rounded-xl overflow-hidden mb-8 shadow-2xl">
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
            title="eBPF 101: Observing the Linux Kernel Safely"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
          </iframe>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 mb-8">
        <a href="https://youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          Watch on YouTube
        </a>
        <a href="https://odysee.com/@codermana" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.073 18.617a5.813 5.813 0 01-5.813-5.813 5.813 5.813 0 015.813-5.813 5.813 5.813 0 015.813 5.813 5.813 5.813 0 01-5.813 5.813z"/>
          </svg>
          Watch on Odysee
        </a>
        <button onClick={() => alert("pending!")} className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700 text-gray-900 dark:text-white rounded-lg transition-colors font-medium">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
          </svg>
          Share
        </button>
      </div>
    </>
  );
}
