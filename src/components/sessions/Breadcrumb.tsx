export default function Breadcrumb() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-4">
      <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        <a href="index.html" className="hover:text-codermana-orange">Home</a>
        <span>/</span>
        <a href="index.html#sessions" className="hover:text-codermana-orange">Sessions</a>
        <span>/</span>
        <span className="text-gray-900 dark:text-white">eBPF 101</span>
      </nav>
    </div>
  );
}
