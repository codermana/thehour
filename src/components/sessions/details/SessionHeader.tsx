export default function SessionHeader() {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase text-white bg-blue-600">
          RECORDED
        </span>
        <span className="text-gray-600 dark:text-gray-400 text-sm">
          58:32 minutes
        </span>
      </div>
      <p className="text-codermana-orange font-semibold mb-3">
        Thursday, January 9, 2025 • 7:00 PM IST
      </p>
      <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">
        eBPF 101: Observing the Linux Kernel Safely
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400">
        Discover how eBPF enables safe, performant kernel-level observability without kernel modules.
      </p>
    </div>
  );
}
