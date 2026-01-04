import { Feed } from 'feed';
import fs from 'fs';
import path from 'path';

export default async (req, res) => {
    const feed = new Feed({
        title: "The CoderMana Hour",
        description: "Fortnightly sessions on programming languages, OSS, ebpf, distributed systems, LLMs, etc.",
        id: "https://thehour.codermana.com",
        link: "https://thehour.codermana.com",
        language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/RSS/#ltpubdategtSubelementOfLtitemgt
        image: "https://thehour.codermana.com/icon.png",
        favicon: "https://thehour.codermana.com/favicon.ico",
        copyright: "All rights reserved 2025, CoderMana",
        updated: new Date(2025, 1, 9), // optional, default = today
        generator: "Next.js", // optional, default = 'Feed for Node.js'
        feedLinks: {
            json: "https://thehour.codermana.com/feed.json",
            atom: "https://thehour.codermana.com/atom.xml",
            rss: "https://thehour.codermana.com/rss.xml"
        }
    });

    const postsDirectory = path.join(process.cwd(), 'posts');
    const filenames = fs.readdirSync(postsDirectory);

    filenames.forEach((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');

        // Assuming each post is a markdown file with front matter
        const [frontMatter, content] = fileContents.split('---\n', 2);

        const { title, date } = JSON.parse(frontMatter);

        feed.addItem({
            title: title,
            id: `https://thehour.codermana.com/posts/${filename.replace('.md', '')}`,
            link: `https://thehour.codermana.com/posts/${filename.replace('.md', '')}`,
            description: content.substring(0, 200),
            content: content,
            author: [
                {
                    name: "CoderMana Team",
                    email: "contact@codermana.com"
                }
            ],
            date: new Date(date)
        });
    });

    res.setHeader('Content-Type', 'application/rss+xml');
    res.send(feed.rss2());
};
