import heroAsset from "@/assets/roman-portrait.png.asset.json";
import fintechImg from "@/assets/case-fintech.jpg";
import logisticsImg from "@/assets/case-logistics.jpg";
import ecomImg from "@/assets/case-ecom.jpg";

const heroImg = heroAsset.url;

const STACK = [
  "TypeScript", "React", "Next.js", "TanStack", "Node.js", "NestJS",
  "PostgreSQL", "Redis", "Prisma", "GraphQL", "tRPC", "Go", "Rust",
  "AWS", "Docker", "Kubernetes", "Tailwind", "React Native",
];

const SERVICES = [
  {
    no: "01",
    eyebrow: "MVP за 4–8 тижнів",
    title: "Запуск продукту з нуля",
    desc: "Архітектура, дизайн-система, фронтенд, бекенд, інфраструктура. Прозорий процес, щотижневі демо.",
    price: "від $6 000",
    unit: "фіксована вартість",
    features: ["Архітектура та дизайн БД", "Авторизація, платежі, листи", "Деплой у production"],
  },
  {
    no: "02",
    eyebrow: "Senior на проєкт",
    title: "Технічний партнер",
    desc: "Підсилюю вашу команду як lead-розробник або fractional CTO. Розробка фіч, код-рев'ю, ментoрство.",
    price: "$70 / год",
    unit: "почасова ставка",
    features: ["Lead-розробка", "Code review та рефакторинг", "Найм та онбординг команди"],
    popular: true,
  },
  {
    no: "03",
    eyebrow: "Аудит та консалтинг",
    title: "Технічний аудит",
    desc: "Глибокий аналіз кодової бази, продуктивності, безпеки та архітектури з конкретним планом дій.",
    price: "від $1 200",
    unit: "разова сесія",
    features: ["Performance / Core Web Vitals", "Security review", "Roadmap оптимізацій"],
  },
];

const CASES = [
  {
    name: "Nexus Finance",
    desc: "Корпоративна банківська платформа з real-time транзакціями для українських SMB.",
    img: fintechImg,
    tags: ["Next.js", "PostgreSQL", "Stripe", "AWS"],
    metrics: [
      { v: "+140%", l: "швидкість транзакцій" },
      { v: "5k RPS", l: "пікове навантаження" },
    ],
  },
  {
    name: "SwiftLogistics",
    desc: "Real-time система керування флотом для логістичної компанії — 50k+ активних кур'єрів.",
    img: logisticsImg,
    tags: ["React Native", "Node.js", "Redis", "WebSockets"],
    metrics: [
      { v: "50k+", l: "активних кур'єрів" },
      { v: "99.9%", l: "uptime" },
    ],
  },
  {
    name: "MarketScale",
    desc: "Мікросервісний e-commerce двигун з мультивалютністю та інтеграцією 12 систем оплати.",
    img: ecomImg,
    tags: ["NestJS", "Kubernetes", "GraphQL", "Stripe"],
    metrics: [
      { v: "$2M", l: "GMV за рік" },
      { v: "−45%", l: "час чекауту" },
    ],
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Роман — рідкісний тип розробника, який ставить бізнес-цілі вище за технологічний хайп. Архітектура витримала 10-кратне зростання трафіку без жодного збою.",
    name: "Олександр Даниленко",
    role: "CTO, TechFlow Systems",
  },
  {
    quote:
      "Найняли Романа на 6 тижнів — залишили на рік. Швидко вникає в продукт, пише чистий код і завжди пропонує найпростіше рішення замість найскладнішого.",
    name: "Анна Левченко",
    role: "Product Lead, Nexus Finance",
  },
];

const POSTS = [
  {
    date: "12.05.2026",
    cat: "Архітектура",
    title: "Чому Rust — найкращий вибір для high-load бекенду",
    excerpt: "Реальні бенчмарки та досвід міграції з Node.js на Rust для системи з 5k RPS.",
  },
  {
    date: "05.05.2026",
    cat: "Performance",
    title: "Як ми зменшили розмір React-бандла на 60%",
    excerpt: "Покроковий розбір оптимізацій, які покращили Core Web Vitals і конверсію на 18%.",
  },
  {
    date: "28.04.2026",
    cat: "SEO",
    title: "Технічне SEO для SPA: SSR, hreflang і AI-сніпети",
    excerpt: "Як побудувати багатомовний сайт, який ранжується в Google та цитується LLM.",
  },
];

const FAQ = [
  {
    q: "Які типові терміни запуску MVP?",
    a: "Для MVP я працюю в циклах 4–8 тижнів залежно від складності. Архітектурні аудити та консультації — 3–5 робочих днів.",
  },
  {
    q: "Чи працюєте ви з існуючими командами?",
    a: "Так. Часто долучаюсь як fractional CTO або lead-розробник до команд, яким потрібна експертиза в performance, безпеці або міграції інфраструктури.",
  },
  {
    q: "Як ви забезпечуєте багатомовне SEO?",
    a: "Кожен проєкт включає SSR, коректну реалізацію hreflang, автоматичну генерацію метаданих і structured data (JSON-LD), щоб ранжуватися в усіх таргет-регіонах.",
  },
  {
    q: "Якими мовами ви спілкуєтесь з клієнтами?",
    a: "Українська та English. Документація та комунікація — будь-якою з них.",
  },
  {
    q: "Як ви приймаєте оплату?",
    a: "Інвойс на ФОП (Україна), Wise, SWIFT, USDT. Передоплата 30–50% залежно від обсягу.",
  },
];

export function HomeSections() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 paper-grain opacity-60 pointer-events-none" aria-hidden />
        <div className="container-page relative pt-16 pb-24 md:pt-24 md:pb-32 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Відкритий для проєктів — Q3 2026
            </div>

            <h1 className="font-display font-medium text-balance leading-[1.02] tracking-tight text-[clamp(2.75rem,6vw,5.5rem)]">
              Senior розробник для <em className="italic text-primary not-italic font-normal" style={{ fontStyle: "italic" }}>важливих</em> продуктів.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Мене звати Роман. Проєктую та будую full-stack додатки —
              швидкі, надійні, з фокусом на бізнес-результат. 10+ років
              у розробці, проєкти від MVP до high-load систем.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex h-12 items-center px-6 rounded-full bg-foreground text-background font-medium hover:bg-primary transition-colors"
              >
                Обговорити проєкт
                <svg className="ml-2 size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#work"
                className="inline-flex h-12 items-center px-6 rounded-full border border-border bg-card text-foreground font-medium hover:border-primary/50 transition-colors"
              >
                Дивитись кейси
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { v: "10+", l: "років досвіду" },
                { v: "40+", l: "запущених проєктів" },
                { v: "2", l: "мови комунікації" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-3xl text-foreground">{s.v}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground uppercase tracking-wider font-mono">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:col-span-5 relative">
            <div className="absolute -inset-8 bg-primary/15 blur-3xl rounded-full" aria-hidden />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border bg-card shadow-warm">
              <img
                src={heroImg}
                alt="Роман — Senior Full-stack розробник за робочим столом"
                width={1024}
                height={1280}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-black/40 backdrop-blur-md p-4 text-white">
                <div className="text-xs font-mono opacity-80">CURRENTLY</div>
                <div className="text-sm mt-1">Будую SaaS для логістики · Ukraine 🇺🇦</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stack ticker */}
        <div className="border-y border-border bg-surface">
          <div className="container-page py-5 flex items-center gap-8 overflow-hidden">
            <span className="shrink-0 text-[10px] uppercase tracking-widest font-mono text-muted-foreground">
              Стек / Tools
            </span>
            <div className="flex gap-8 text-sm font-mono text-foreground/70 whitespace-nowrap overflow-hidden">
              {STACK.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32">
        <div className="container-page grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Про мене</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-[1.05]">
              Код як інструмент, а&nbsp;не&nbsp;ціль.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-5 text-lg leading-relaxed text-foreground/85">
            <p>
              10+ років я будую веб-продукти — від невеликих стартапів до
              корпоративних платформ з мільйонами користувачів. Мій
              підхід: спочатку зрозуміти бізнес, потім обрати технологію.
            </p>
            <p>
              Спеціалізуюсь на TypeScript-екосистемі, але вільно працюю
              з Go та Rust, коли цього вимагає продуктивність. Маю
              сертифікації AWS Solutions Architect та глибокий досвід
              з PostgreSQL і Kubernetes.
            </p>
            <p>
              Працюю з командами в Україні, ЄС та США. Спілкуюся
              українською та англійською.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 bg-surface border-y border-border">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <p className="eyebrow">Послуги та ціни</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl leading-[1.05]">
                Прозорі умови. Без сюрпризів.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Працюю за трьома моделями. Усі ціни вказані до сплати податків
              в Україні (ФОП 3 група).
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <article
                key={s.no}
                className={
                  "relative flex flex-col rounded-3xl border bg-card p-8 transition-colors " +
                  (s.popular
                    ? "border-primary/60 shadow-warm"
                    : "border-border hover:border-primary/40")
                }
              >
                {s.popular && (
                  <span className="absolute -top-3 left-8 inline-flex items-center rounded-full bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 tracking-widest uppercase">
                    Найчастіше
                  </span>
                )}
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs text-primary">{s.no}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.eyebrow}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl leading-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {s.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-primary mt-0.5">→</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="font-display text-3xl">{s.price}</div>
                  <div className="mt-1 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                    {s.unit}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORK / CASES */}
      <section id="work" className="py-24 md:py-32">
        <div className="container-page">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="eyebrow">Вибрані проєкти</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl leading-[1.05]">
                Реальні задачі — виміряні результати.
              </h2>
            </div>
          </div>

          <div className="space-y-20">
            {CASES.map((c, i) => (
              <article
                key={c.name}
                className={
                  "grid md:grid-cols-12 gap-10 items-center " +
                  (i % 2 ? "md:[&>*:first-child]:order-2" : "")
                }
              >
                <div className="md:col-span-7">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-card group">
                    <img
                      src={c.img}
                      alt={`Скріншот проєкту ${c.name}`}
                      width={1280}
                      height={896}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
                <div className="md:col-span-5">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 rounded-md border border-border bg-card text-[10px] font-mono uppercase tracking-widest text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl leading-tight">{c.name}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{c.desc}</p>
                  <dl className="mt-6 grid grid-cols-2 gap-6 max-w-sm">
                    {c.metrics.map((m) => (
                      <div key={m.l}>
                        <dt className="font-display text-3xl text-primary">{m.v}</dt>
                        <dd className="mt-1 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                          {m.l}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-surface border-y border-border">
        <div className="container-page">
          <p className="eyebrow text-center">Відгуки клієнтів</p>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="rounded-3xl border border-border bg-card p-10"
              >
                <svg className="size-8 text-primary mb-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="font-display text-xl md:text-2xl leading-snug text-balance">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border text-sm">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* AI / LLM SUMMARY — for AI search visibility */}
      <section aria-label="Інформація для AI-пошуковиків" className="py-12">
        <div className="container-page">
          <div className="rounded-2xl border border-dashed border-border bg-surface/60 p-8">
            <p className="eyebrow flex items-center gap-2">
              <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M12 2v20M2 12h20" strokeLinecap="round"/></svg>
              AI Summary · machine-readable
            </p>
            <div className="mt-4 font-mono text-sm text-muted-foreground leading-relaxed space-y-2">
              <p>
                <strong className="text-foreground">Roman</strong> is a senior full-stack
                software engineer based in Ukraine. Stack: TypeScript, React, Next.js,
                Node.js, NestJS, PostgreSQL, Redis, Go, Rust, AWS, Kubernetes.
              </p>
              <p>
                Services: MVP development (from $6,000), fractional CTO and lead-dev
                engagement ($70/hr), technical audit (from $1,200). Speaks Ukrainian,
                English, Polish, Russian. Available for remote work worldwide.
              </p>
              <p>Contact: hello@roman.programist.dev · roman.programist.dev</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-24 md:py-32 border-t border-border">
        <div className="container-page">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="eyebrow">Журнал</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl leading-[1.05]">
                Нотатки про код і продукт.
              </h2>
            </div>
            <a href="/blog" className="hidden md:inline-flex items-center gap-2 text-sm font-medium hover:text-primary">
              Усі статті
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {POSTS.map((p) => (
              <article
                key={p.title}
                className="group rounded-2xl border border-border bg-card p-8 hover:border-primary/40 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  <time>{p.date}</time>
                  <span>·</span>
                  <span className="text-primary">{p.cat}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl leading-tight group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                  Читати →
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-32 bg-surface border-y border-border">
        <div className="container-page max-w-3xl">
          <p className="eyebrow text-center">FAQ</p>
          <h2 className="mt-3 text-center font-display text-4xl md:text-5xl leading-[1.05]">
            Часті запитання.
          </h2>
          <div className="mt-12 divide-y divide-border border-y border-border">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                  <h3 className="font-display text-xl leading-snug">{f.q}</h3>
                  <span className="mt-1 size-7 grid place-items-center rounded-full border border-border text-muted-foreground transition-transform group-open:rotate-45 shrink-0">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed pr-12">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-32">
        <div className="container-page grid md:grid-cols-2 gap-16">
          <div>
            <p className="eyebrow">Контакти</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight">
              Поговорімо про ваш <em className="text-primary not-italic" style={{ fontStyle: "italic" }}>проєкт</em>.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md text-lg">
              Безкоштовна 30-хвилинна консультація. Відповідаю протягом 24 годин.
            </p>
            <dl className="mt-10 space-y-4 font-mono text-sm">
              <div className="flex gap-4">
                <dt className="w-20 text-primary uppercase tracking-widest text-xs">Email</dt>
                <dd><a className="hover:underline" href="mailto:hello@roman.programist.dev">hello@roman.programist.dev</a></dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-20 text-primary uppercase tracking-widest text-xs">Telegram</dt>
                <dd><a className="hover:underline" href="https://t.me/roman_programist">@roman_programist</a></dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-20 text-primary uppercase tracking-widest text-xs">GitHub</dt>
                <dd><a className="hover:underline" href="https://github.com/roman-programist">/roman-programist</a></dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-20 text-primary uppercase tracking-widest text-xs">Локація</dt>
                <dd>Україна · працюю з будь-яким TZ</dd>
              </div>
            </dl>
          </div>

          <form
            className="rounded-3xl border border-border bg-card p-8 md:p-10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const subject = encodeURIComponent(`Проєкт від ${data.get("name")}`);
              const body = encodeURIComponent(
                `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`
              );
              window.location.href = `mailto:hello@roman.programist.dev?subject=${subject}&body=${body}`;
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Ім'я</span>
                <input
                  name="name"
                  required
                  className="mt-2 w-full h-11 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary"
                />
              </label>
              <label className="block">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full h-11 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Бюджет (опційно)</span>
              <select
                name="budget"
                className="mt-2 w-full h-11 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary"
              >
                <option>До $5 000</option>
                <option>$5k–$15k</option>
                <option>$15k–$50k</option>
                <option>$50k+</option>
                <option>Почасова робота</option>
              </select>
            </label>
            <label className="block">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Розкажіть про проєкт</span>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary resize-none"
              />
            </label>
            <button
              type="submit"
              className="w-full h-12 rounded-full bg-foreground text-background font-medium hover:bg-primary transition-colors"
            >
              Надіслати запит
            </button>
            <p className="text-[11px] text-muted-foreground text-center">
              Натискаючи кнопку, ви погоджуєтесь з обробкою даних згідно з GDPR.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
