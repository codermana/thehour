import type { CollectionEntry } from "astro:content";
import ResourceEntry from "./ResourceEntry";

type SessionResources = CollectionEntry<"sessions">["data"]["resources"];

let downloadIcon = (
  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
  </svg>
);

let externalIcon = (
  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
  </svg>
);

let resourceMap = {
  slides: {
    emoji: "📄",
    icon: externalIcon,
    description: "Slide Deck",
    tooltip: "Print to save as PDF",
  },
  code: {
    emoji: "💻",
    icon: externalIcon,
    description: "Code Examples",
  },
  blog: {
    emoji: "📝",
    description: "Companion Blog Post",
    icon: externalIcon,
  },
  background: {
    emoji: "🔗",
    description: "Additional Reading/Viewing",
    icon: externalIcon,
  }
}

export default function SessionResources({ resources }: { resources: SessionResources }) {
  if(!resources) {
    return null;
  }

  let slides = resources?.slides;
  let code = resources?.code;
  let blog = resources?.blog;
  let background = resources?.background;

  return (
    <div className="bg-gray-50 dark:bg-zinc-900 rounded-xl p-8 mb-8 border border-gray-200 dark:border-zinc-800">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">📚 Session Resources</h2>
      <div className="space-y-3">

        { slides &&
          <ResourceEntry link={slides} structure={resourceMap.slides}/>
        }

        { code &&
          <ResourceEntry link={code} structure={resourceMap.code}/>
        }

        { blog &&
          <ResourceEntry link={blog} structure={resourceMap.blog}/>
        }

        { background &&
          <ResourceEntry link={background} structure={resourceMap.background}/>
        }
      </div>
    </div>
  );
}
