import { promises as fs } from "node:fs";
import path from "node:path";
import type { Locale } from "./locales";

export type Messages = Record<string, string>;

export async function loadMessages(locale: string | Locale): Promise<Messages> {
  const base = path.join(process.cwd(), "dictionaries", locale);
  const exists = await fs
    .stat(base)
    .then(() => true)
    .catch(() => false);
  if (!exists) return {};
  const files = await fs.readdir(base);
  const all: Messages = {};
  await Promise.all(
    files
      .filter((f) => f.endsWith(".json"))
      .map(async (file) => {
        const content = await fs.readFile(path.join(base, file), "utf-8");
        Object.assign(all, JSON.parse(content));
      })
  );
  return all;
}
