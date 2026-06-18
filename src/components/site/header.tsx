import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./theme-toggle";
import { LangSwitcher } from "./lang-switcher";
import { NAV } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="container-page h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="size-8 grid place-items-center rounded-md bg-foreground text-background font-display font-black text-base">
            R
          </span>
          <span className="font-mono text-[13px] tracking-tight font-semibold">
            roman<span className="text-primary">.</span>programist.dev
          </span>
        </Link>

        <nav aria-label="Головна навігація" className="hidden md:flex items-center gap-7 text-sm">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitcher />
          <ThemeToggle />
          <a
            href="/#contact"
            className="hidden sm:inline-flex h-9 items-center px-4 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary transition-colors"
          >
            Замовити
          </a>
        </div>
      </div>
    </header>
  );
}
