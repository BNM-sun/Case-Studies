import fs from "fs";
import path from "path";
import matter from "gray-matter";

const WRITING_DIR = path.join(process.cwd(), "src/content/writing");

export type WritingMeta = {
  slug: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
};

export function getAllWriting(): WritingMeta[] {
  const files = fs.readdirSync(WRITING_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(WRITING_DIR, filename), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        tag: data.tag as string,
        excerpt: data.excerpt as string,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getWritingBySlug(slug: string) {
  const filePath = path.join(WRITING_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { meta: data as Omit<WritingMeta, "slug">, content };
}
