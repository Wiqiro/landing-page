"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { locales } from "@/helpers/i18n";

export default function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const search = useSearchParams();

  const [, currentLocale, ...rest] = pathname.split("/");
  const restPath = rest.join("/");

  const queryString = search.toString();
  const qs = queryString ? `?${queryString}` : "";

  return (
    <div className="flex gap-2">
      {locales.map((l) => {
        const href = `/${l}${restPath ? `/${restPath}` : ""}${qs}`;
        const active = currentLocale === l;
        return (
          <Link
            key={l}
            href={href}
            prefetch
            className={`px-2 py-1 rounded ${
              active ? "bg-neutral-200" : "bg-neutral-100"
            }`}
          >
            {l.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
