import { promises as fs } from "node:fs";
import path from "node:path";

// Fonction pour aplatir un objet imbriqué en clés avec des points
const flattenObject = (
  obj: Record<string, unknown>,
  prefix: string = ""
): Record<string, string> => {
  const flattened: Record<string, string> = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      const value = obj[key];

      if (Array.isArray(value)) {
        // Gérer les tableaux en les indexant
        value.forEach((item: unknown, index: number) => {
          flattened[`${newKey}.${index}`] = String(item);
        });
      } else if (typeof value === "object" && value !== null) {
        // Récursion pour les objets
        Object.assign(
          flattened,
          flattenObject(value as Record<string, unknown>, newKey)
        );
      } else {
        // Valeur primitive
        flattened[newKey] = String(value);
      }
    }
  }

  return flattened;
};

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
  const nestedTranslations = JSON.parse(content);

  // Aplatir l'objet imbriqué pour maintenir la compatibilité avec les clés existantes
  return flattenObject(nestedTranslations);
};
