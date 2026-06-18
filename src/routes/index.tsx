import { createFileRoute } from "@tanstack/react-router";
import { HomeSections } from "@/components/site/home-sections";
import { SITE } from "@/lib/site";

const TITLE = "Roman — Senior Full-stack Розробник | React, Node.js, AWS";
const DESCRIPTION =
  "Senior Full-stack розробник з України. Розробка MVP, SaaS, high-load систем. React, Next.js, Node.js, PostgreSQL, AWS. UA · EN.";

const PERSON_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Roman",
  jobTitle: SITE.jobTitle,
  url: SITE.url,
  email: `mailto:${SITE.email}`,
  knowsLanguage: SITE.languages,
  knowsAbout: [
    "Full-stack development",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "AWS",
    "System architecture",
    "MVP development",
  ],
  sameAs: [SITE.github, SITE.linkedin, SITE.telegram],
  address: { "@type": "PostalAddress", addressCountry: "UA" },
};

const PROSERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Roman.programist.dev — Full-stack Development",
  url: SITE.url,
  image: `${SITE.url}/og.jpg`,
  priceRange: "$$",
  areaServed: "Worldwide",
  serviceType: ["MVP Development", "SaaS Architecture", "Technical Audit", "Fractional CTO"],
  provider: { "@type": "Person", name: "Roman" },
};

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Які типові терміни запуску MVP?", acceptedAnswer: { "@type": "Answer", text: "Для MVP я працюю в циклах 4–8 тижнів залежно від складності. Архітектурні аудити — 3–5 робочих днів." } },
    { "@type": "Question", name: "Чи працюєте ви з існуючими командами?", acceptedAnswer: { "@type": "Answer", text: "Так — як fractional CTO або lead-розробник, що підсилює команду." } },
    { "@type": "Question", name: "Як ви забезпечуєте багатомовне SEO?", acceptedAnswer: { "@type": "Answer", text: "SSR, hreflang, structured data (JSON-LD), автоматична генерація метаданих." } },
    { "@type": "Question", name: "Якими мовами ви спілкуєтесь?", acceptedAnswer: { "@type": "Answer", text: "Українська, English." } },
    { "@type": "Question", name: "Як ви приймаєте оплату?", acceptedAnswer: { "@type": "Answer", text: "ФОП (Україна), Wise, SWIFT, USDT. Передоплата 30–50%." } },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "розробник, програміст, full-stack, React, Next.js, Node.js, фріланс розробник, замовити сайт, MVP, SaaS, Україна, Roman, програміст Україна" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "uk_UA" },
      { property: "og:locale:alternate", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "alternate", hrefLang: "uk", href: "/" },
      { rel: "alternate", hrefLang: "en", href: "/en" },
      { rel: "alternate", hrefLang: "x-default", href: "/" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(PERSON_JSONLD) },
      { type: "application/ld+json", children: JSON.stringify(PROSERVICE_JSONLD) },
      { type: "application/ld+json", children: JSON.stringify(FAQ_JSONLD) },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return <HomeSections />;
}
