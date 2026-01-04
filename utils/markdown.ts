import { Remarkable } from 'remarkable';

const md = new Remarkable();

export const markdownToHtml = (markdown: string) => {
    return md.render(markdown);
};
