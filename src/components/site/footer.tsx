import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="font-display text-2xl tracking-tight">Roman<span className="text-primary">.</span>programist.dev</div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Senior Full-stack розробник. Будую цифрові продукти, що приносять
            результат — від MVP до high-load систем.
          </p>
          <p className="mt-6 text-xs font-mono text-muted-foreground">{SITE.location} · GMT+2</p>
        </div>

        <div>
          <h3 className="eyebrow mb-4">Сайт</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/#services" className="hover:text-primary">Послуги</a></li>
            <li><a href="/#work" className="hover:text-primary">Проєкти</a></li>
            <li><a href="/#about" className="hover:text-primary">Про мене</a></li>
            <li><Link to="/blog" className="hover:text-primary">Блог</Link></li>
            <li><a href="/#faq" className="hover:text-primary">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-4">Контакти</h3>
          <ul className="space-y-2 text-sm">
            <li><a href={`mailto:${SITE.email}`} className="hover:text-primary">{SITE.email}</a></li>
            <li><a href={SITE.telegram} className="hover:text-primary">Telegram</a></li>
            <li><a href={SITE.github} className="hover:text-primary">GitHub</a></li>
            <li><a href={SITE.linkedin} className="hover:text-primary">LinkedIn</a></li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-4">Мови</h3>
          <ul className="space-y-2 text-sm font-mono">
            <li>UA · Українська</li>
            <li>EN · English</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-muted-foreground font-mono">
          <p>© {new Date().getFullYear()} Roman.programist.dev — Усі права захищено.</p>
          <p className="tracking-widest uppercase">Crafted with code, not templates</p>
        </div>
      </div>
    </footer>
  );
}
