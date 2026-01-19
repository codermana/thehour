export default function TopicTags() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Topics Covered</h2>
      <div className="flex flex-wrap gap-2">
        <span className="bg-gray-200 dark:bg-zinc-800 px-4 py-2 rounded-full text-sm text-gray-700 dark:text-gray-300">eBPF Basics</span>
        <span className="bg-gray-200 dark:bg-zinc-800 px-4 py-2 rounded-full text-sm text-gray-700 dark:text-gray-300">BPF Maps</span>
        <span className="bg-gray-200 dark:bg-zinc-800 px-4 py-2 rounded-full text-sm text-gray-700 dark:text-gray-300">Tracing</span>
        <span className="bg-gray-200 dark:bg-zinc-800 px-4 py-2 rounded-full text-sm text-gray-700 dark:text-gray-300">Performance Monitoring</span>
        <span className="bg-gray-200 dark:bg-zinc-800 px-4 py-2 rounded-full text-sm text-gray-700 dark:text-gray-300">bpftrace</span>
        <span className="bg-gray-200 dark:bg-zinc-800 px-4 py-2 rounded-full text-sm text-gray-700 dark:text-gray-300">Kernel Observability</span>
      </div>
    </div>
  );
}
