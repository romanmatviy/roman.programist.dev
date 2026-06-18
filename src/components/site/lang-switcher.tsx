import { useState } from "react";

const LANGS = ["UA", "EN"] as const;
type Lang = (typeof LANGS)[number];

export function LangSwitcher() {
  const [lang, setLang] = useState<Lang>("UA");
  return (
    <div
      role="group"
      aria-label="Мова сайту"
      className="hidden sm:flex items-center gap-0.5 rounded-full border border-border bg-card p-1"
    >
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          className={
            "px-2 py-0.5 text-[10px] font-mono font-semibold rounded-full transition-colors " +
            (lang === l
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground")
          }
          aria-pressed={lang === l}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
