export default function SessionResources() {
  return (
    <div className="bg-gray-50 dark:bg-zinc-900 rounded-xl p-8 mb-8 border border-gray-200 dark:border-zinc-800">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">📚 Session Resources</h2>
      <div className="space-y-3">
        <a href="#" className="flex items-center justify-between p-4 bg-white dark:bg-zinc-800 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors group border border-gray-200 dark:border-zinc-700">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📄</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-codermana-orange transition-colors">Slide Deck</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">PDF, 2.4 MB</p>
            </div>
          </div>
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
        </a>

        <a href="https://github.com/codermana/ebpf-examples" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-zinc-800 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors group border border-gray-200 dark:border-zinc-700">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💻</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-codermana-orange transition-colors">Code Examples</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">GitHub Repository</p>
            </div>
          </div>
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </a>

        <a href="https://blog.codermana.com/ebpf-deep-dive" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-zinc-800 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors group border border-gray-200 dark:border-zinc-700">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📝</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-codermana-orange transition-colors">Companion Blog Post</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Deep dive into eBPF concepts</p>
            </div>
          </div>
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </a>

        <a href="#" className="flex items-center justify-between p-4 bg-white dark:bg-zinc-800 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors group border border-gray-200 dark:border-zinc-700">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🔗</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-codermana-orange transition-colors">Additional Reading</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Curated links and documentation</p>
            </div>
          </div>
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
