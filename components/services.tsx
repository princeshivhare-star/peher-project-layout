const services = [
  {
    number: '01',
    title: 'Brand Identity Systems',
    description:
      'Complete visual systems that give your brand a recognisable personality across every place it appears. Because a logo cannot do all the heavy lifting.',
  },
  {
    number: '02',
    title: 'Packaging Design',
    description:
      'Packaging that communicates quickly, looks distinctive and gives customers one more reason to choose your product. Designed to earn the double take and the pick-up.',
  },
  {
    number: '03',
    title: 'Visual Storytelling & Art Direction',
    description:
      'Imagery, campaigns and creative direction that turn a visual identity into a world people can step into. Making the brand feel like more than a colour palette.',
  },
  {
    number: '04',
    title: 'Content Strategy & Brand Consistency',
    description:
      'Clear visual direction that keeps everything cohesive across social media, campaigns, packaging, print and digital. One brand. Many platforms. No identity crisis.',
  },
]

export function Services() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <h2 className="text-4xl font-bold tracking-tight md:text-6xl">What I Offer</h2>

      <div className="mt-10 flex flex-col md:mt-14">
        {services.map((service) => (
          <article
            key={service.number}
            className="group grid gap-3 border-t border-border py-8 last:border-b md:grid-cols-[6rem_1fr_1fr] md:items-start md:gap-8 md:py-10"
          >
            <span className="text-sm font-semibold text-muted-foreground">{service.number}</span>
            <h3 className="text-2xl font-bold transition-colors group-hover:text-primary md:text-3xl">
              {service.title}
            </h3>
            <p className="leading-relaxed text-muted-foreground text-pretty">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
