export default function TopicTags({ topics }: { topics: string[] }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Topics Covered</h2>
      <div className="flex flex-wrap gap-2">
        { topics.map((topic) => (
          <span key={topic} className="bg-gray-200 dark:bg-zinc-800 px-4 py-2 rounded-full text-sm text-gray-700 dark:text-gray-300">{topic}</span>
          )
        )}
      </div>
    </div>
  );
}
