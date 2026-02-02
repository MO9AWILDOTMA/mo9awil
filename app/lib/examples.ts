export type Example = {
  slug: string
  name: string
  href: string
  description: string
  tags: string[]
  imageSrc?: string
}

export const EXAMPLES: Example[] = [
  {
    slug: "snack-dada-sfia",
    name: "Snack Dada Sfia",
    href: "https://snack-dada-sfia.vercel.app/",
    description: "Landing restaurant mobile-first avec menu, galerie, localisation et CTA WhatsApp.",
    tags: ["Restaurant", "Landing page", "Mobile-first"],
    imageSrc: "/portfolio/snack-dada-sfia-cover.svg",
  },
]

