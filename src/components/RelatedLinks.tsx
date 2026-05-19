import Link from "next/link";

/**
 * Contextual cross-link block for internal link equity flow.
 *
 * Used by:
 *  - Duration pages (1mo, 3mo, 6mo, 12mo) — show siblings
 *  - Device pages (8 devices) — show siblings
 *  - Country pages — show subscription + 2 regional devices
 *  - Pillar pages — bridge informational → commercial
 *
 * Anchor-text diversity rule (see LINK-ARCHITECTURE.md §3): callers should
 * pass varied anchors per page; never duplicate the same anchor twice on
 * one page.
 */

export type RelatedLink = {
  href: string;
  label: string;
  /** Short subhead under the anchor — also helps users + LLMs disambiguate. */
  sub?: string;
};

type Props = {
  heading: string;
  links: RelatedLink[];
  /** Optional id for the section (anchor target). */
  id?: string;
  /** Visual variant. `cards` = grid of cards. `chips` = compact pill row. */
  variant?: "cards" | "chips";
};

export default function RelatedLinks({
  heading,
  links,
  id,
  variant = "cards",
}: Props) {
  const headingId = id ? `${id}-heading` : undefined;

  if (variant === "chips") {
    return (
      <section aria-labelledby={headingId} id={id} className="mt-12">
        <h2
          id={headingId}
          className="mb-4 text-sm font-bold uppercase tracking-wider text-text-secondary"
        >
          {heading}
        </h2>
        <ul className="flex flex-wrap gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-block rounded-lg border border-border px-3 py-1.5 text-sm text-text-secondary transition-all hover:border-accent/40 hover:text-text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section aria-labelledby={headingId} id={id} className="mt-16">
      <h2
        id={headingId}
        className="mb-6 text-xl font-bold text-text-primary sm:text-2xl"
      >
        {heading}
      </h2>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block rounded-xl border border-border bg-bg-card p-4 transition-all hover:border-accent/40 hover:bg-bg-card/80"
            >
              <div className="font-bold text-text-primary">{link.label}</div>
              {link.sub ? (
                <div className="mt-1 text-sm text-text-secondary">
                  {link.sub}
                </div>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
