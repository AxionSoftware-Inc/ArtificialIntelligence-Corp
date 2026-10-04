import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, theme } from "@/lib/design-system";

export function Products() {
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
            <span>Products</span>
          </div>
          <h2 className={theme.typography.h2}>
            Three agents. <br />
            <span className={theme.typography.gradientText}>One research lab.</span>
          </h2>
          <p className={theme.typography.bodyLarge}>
            Models we build and ship ourselves, from a local assistant on your
            phone to autonomous agents for engineering and science.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {siteConfig.products.map((product) => (
            <article
              key={product.id}
              className={`${theme.components.card} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-10 pb-4 border-b border-white/[0.08]">
                  <span className="font-mono text-xs text-neutral-500">
                    {product.index} / {product.category}
                  </span>
                  <span className="font-mono text-[11px] text-neutral-400 border border-white/[0.08] px-2.5 py-1 rounded-full bg-white/[0.02]">
                    {product.status}
                  </span>
                </div>

                <h3 className={`${theme.typography.h3} mb-3`}>{product.name}</h3>
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

              <div className="mt-10 pt-6 border-t border-white/[0.06]">
                <Link href={product.cta.href} className={theme.components.buttonSecondary}>
                  <span>{product.cta.label}</span>
                  <ArrowUpRight className="h-4 w-4 ml-1 text-neutral-500 group-hover:text-white transition-colors" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
