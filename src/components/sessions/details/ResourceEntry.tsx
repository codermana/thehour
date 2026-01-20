interface ResourceEntryProps {
  link: string,
  structure: {
    emoji: string,
    icon: React.ReactNode,
    description: string,
    tooltip?: string,
  }
}

export default function ResourceEntry( {link, structure}: ResourceEntryProps ) {
  return (
    <a href={link} className="flex items-center justify-between p-4 bg-white dark:bg-zinc-800 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors group border border-gray-200 dark:border-zinc-700" title={structure.tooltip}>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
          <span className="text-2xl">{structure.emoji}</span>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-codermana-orange transition-colors">{structure.description}</h3>
        </div>
      </div>
      {structure.icon}
    </a>
  );
}
