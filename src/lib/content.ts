import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface AanbodPage {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  subtitle: string;
  herkenning: string[];
  hulp: string[];
  verwachting: string[];
}

export function getAanbodSlugs(): string[] {
  const dir = path.join(contentDir, "aanbod");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAanbodPage(slug: string): AanbodPage | null {
  const filePath = path.join(contentDir, "aanbod", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  // Parse sections from markdown content
  const sections = content.split(/^## /m).filter(Boolean);
  const parseSection = (heading: string): string[] => {
    const section = sections.find((s) =>
      s.trim().toLowerCase().startsWith(heading.toLowerCase())
    );
    if (!section) return [];
    return section
      .split("\n")
      .slice(1)
      .filter((line) => line.trim().startsWith("- ") || line.trim().startsWith("* "))
      .map((line) => line.replace(/^[\s]*[-*]\s*/, "").trim())
      .filter(Boolean);
  };

  const parseParagraphs = (heading: string): string[] => {
    const section = sections.find((s) =>
      s.trim().toLowerCase().startsWith(heading.toLowerCase())
    );
    if (!section) return [];
    return section
      .split("\n")
      .slice(1)
      .join("\n")
      .split(/\n\n+/)
      .map((p) => p.trim())
      .filter(Boolean);
  };

  return {
    slug,
    title: data.title || slug,
    seoTitle: data.seoTitle || `${data.title} | Romy Tielens`,
    seoDescription: data.seoDescription || "",
    subtitle: data.subtitle || "",
    herkenning: parseSection("Herken je dit"),
    hulp: parseParagraphs("Hoe ik je kan helpen"),
    verwachting: parseParagraphs("Wat kun je verwachten"),
  };
}

export function getAllAanbodPages(): AanbodPage[] {
  return getAanbodSlugs()
    .map(getAanbodPage)
    .filter((p): p is AanbodPage => p !== null);
}
