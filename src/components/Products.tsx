import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { theme } from "@/lib/design-system";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

interface ProductsProps {
  dict: Dictionary["products"];
  lang: Locale;
}

export function Products({ dict, lang }: ProductsProps) {
  return (
    <section
      id="products"
      className={`${theme.layout.section} ${theme.layout.sectionBorder} bg-black`}
    >
      <div className={theme.layout.container}>
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
            <span>{dict.eyebrow}</span>
          </div>
          <h2 className={theme.typography.h2}>
            {dict.titleLine1} <br />
            <span className={theme.typography.gradientText}>{dict.titleLine2}</span>
          </h2>
          <p className={theme.typography.bodyLarge}>
            {dict.description}
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {dict.items.map((product, idx) => (
            <article
              key={product.id}
              className={`${theme.components.card} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-10 pb-4 border-b border-white/[0.08]">
                  <span className="font-mono text-xs text-neutral-500">
                    {String(idx + 1).padStart(2, "0")} / {product.category}
                  </span>
                  <span className="font-mono text-[11px] text-neutral-400 border border-white/[0.08] px-2.5 py-1 rounded-full bg-white/[0.02]">
                    {product.status}
                  </span>
                </div>

                <Link href={`/${lang}/products/${product.slug}`} className="group/title block">
                  <h3 className={`${theme.typography.h3} mb-3 group-hover/title:text-white transition-colors flex items-center justify-between`}>
                    <span>{product.name}</span>
                    <ArrowUpRight className="h-4 w-4 text-neutral-500 group-hover/title:text-cyan-400 transition-colors" />
                  </h3>
                </Link>

                <p className={`${theme.typography.bodyMedium} mb-8`}>
                  {product.summary}
                </p>

                <ul className="space-y-3">
                  {product.capabilities.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-neutral-300 leading-snug"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <Link
                  href={`/${lang}/products/${product.slug}`}
                  className={theme.components.buttonSecondary}
                >
                  <span>{dict.learnMore}</span>
                  <ArrowUpRight className="h-4 w-4 ml-1 text-neutral-500 group-hover:text-white transition-colors" />
                </Link>

                <Link
                  href={`/${lang}#contact`}
                  className="text-xs font-mono text-neutral-400 hover:text-white transition-colors px-2 py-1"
                >
                  {product.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
