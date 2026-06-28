import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CASE_STUDIES_DIR = path.join(process.cwd(), "src/content/case-studies");

export type CaseStudyMeta = {
  slug: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  stack: string;
  illustrative: boolean;
};

export function getAllCaseStudies(): CaseStudyMeta[] {
  const files = fs.readdirSync(CASE_STUDIES_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(CASE_STUDIES_DIR, filename), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        tag: data.tag as string,
        excerpt: data.excerpt as string,
        stack: data.stack as string,
        illustrative: Boolean(data.illustrative),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getCaseStudyBySlug(slug: string) {
  const filePath = path.join(CASE_STUDIES_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    meta: {
      title: data.title as string,
      date: data.date as string,
      tag: data.tag as string,
      excerpt: data.excerpt as string,
      stack: data.stack as string,
      illustrative: Boolean(data.illustrative),
    },
    content,
  };
}
