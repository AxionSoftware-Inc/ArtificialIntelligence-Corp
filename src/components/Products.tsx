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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-xl space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>{dict.eyebrow}</span>
            </div>
            <h2 className={theme.typography.h2}>
              {dict.titleLine1}{" "}
              <span className={theme.typography.gradientText}>{dict.titleLine2}</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-400">
              {dict.description}
            </p>
          </div>

          <Link
            href={`/${lang}/products`}
            className="hidden md:inline-flex items-center text-xs font-mono font-medium text-white hover:text-cyan-400 transition-colors"
          >
            <span>{dict.viewAll}</span>
            <ArrowUpRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
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

                <p className={`${theme.typography.bodyMedium} line-clamp-3 mb-6`}>
                  {product.summary}
                </p>
              </div>

              <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between">
                <Link
                  href={`/${lang}/products/${product.slug}`}
                  className="inline-flex items-center text-xs font-mono text-cyan-400 hover:text-white transition-colors"
                >
                  <span>{dict.learnMore}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
                </Link>

                <span className="font-mono text-[11px] text-neutral-500">
                  {product.category}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center pt-2">
          <Link
            href={`/${lang}/products`}
            className={theme.components.buttonOutline}
          >
            <span>{dict.viewAll}</span>
            <ArrowUpRight className="h-4 w-4 ml-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
