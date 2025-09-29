import { promises as fs } from "node:fs";
import path from "node:path";

export const loadTranslations = async (
  locale: "fr" | "en"
): Promise<Record<string, string>> => {
  const root = path.join(process.cwd(), "translations");

  const file = path.join(root, `${String(locale)}.json`);
  const exists = await fs
    .stat(file)
    .then(() => true)
    .catch(() => false);
  if (!exists) return {};

  const content = await fs.readFile(file, "utf-8");
  return JSON.parse(content);
};
