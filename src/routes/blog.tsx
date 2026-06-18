import { createFileRoute, Link } from "@tanstack/react-router";

const POSTS = [
  { slug: "rust-vs-node-highload", date: "12.05.2026", cat: "Архітектура", title: "Чому Rust — найкращий вибір для high-load бекенду", excerpt: "Реальні бенчмарки та досвід міграції з Node.js на Rust для системи з 5k RPS." },
  { slug: "react-bundle-60", date: "05.05.2026", cat: "Performance", title: "Як ми зменшили розмір React-бандла на 60%", excerpt: "Покроковий розбір оптимізацій, які покращили Core Web Vitals і конверсію на 18%." },
  { slug: "seo-spa-ai", date: "28.04.2026", cat: "SEO", title: "Технічне SEO для SPA: SSR, hreflang і AI-сніпети", excerpt: "Як побудувати багатомовний сайт, який ранжується в Google та цитується LLM." },
  { slug: "postgres-indexes", date: "14.04.2026", cat: "Бази даних", title: "PostgreSQL індекси на пальцях: коли і навіщо", excerpt: "B-tree, GIN, BRIN — практичний гайд із прикладами та результатами EXPLAIN ANALYZE." },
  { slug: "tanstack-start-prod", date: "02.04.2026", cat: "Frameworks", title: "TanStack Start у продакшені: рік досвіду", excerpt: "Що працює добре, де болить, і чи варто переходити з Next.js." },
  { slug: "fractional-cto", date: "20.03.2026", cat: "Бізнес", title: "Fractional CTO для стартапу: коли це має сенс", excerpt: "Як зекономити на найманні CTO в перший рік життя продукту." },
];

const TITLE = "Блог про розробку — Roman.programist.dev";
const DESC = "Статті про full-stack розробку, архітектуру, performance, SEO та продуктовий інжиніринг. Українською мовою.";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/blog" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <div className="container-page py-20 md:py-28">
      <p className="eyebrow">Журнал</p>
      <h1 className="mt-3 font-display text-5xl md:text-6xl leading-[1.02] tracking-tight max-w-3xl">
        Нотатки про <em className="text-primary not-italic" style={{ fontStyle: "italic" }}>код</em>, архітектуру та продукт.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Пишу про те, що бачу зсередини: реальні задачі, помилки та рішення з
        проєктів, які зараз у продакшені.
      </p>

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        {POSTS.map((p) => (
          <article
            key={p.slug}
            className="group rounded-2xl border border-border bg-card p-8 hover:border-primary/40 transition-colors"
          >
            <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              <time>{p.date}</time>
              <span>·</span>
              <span className="text-primary">{p.cat}</span>
            </div>
            <h2 className="mt-5 font-display text-2xl leading-tight group-hover:text-primary transition-colors">
              {p.title}
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{p.excerpt}</p>
            <Link
              to="/"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium"
            >
              Читати →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
