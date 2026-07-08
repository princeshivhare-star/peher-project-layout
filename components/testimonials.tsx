// Placeholder testimonials matching the reference layout.
// Replace with the client's real testimonials when provided.
const testimonials = [
  {
    name: 'Emily',
    role: 'CEO',
    quote:
      'The level of professionalism and creativity was truly impressive. She took our initial ideas and transformed them into an identity that perfectly aligns with our mission and vision.',
  },
  {
    name: 'Jason T.',
    role: 'Startup Founder',
    quote:
      'As a new startup, we needed a brand that not only represented us but also converted visitors into customers. Delivered beyond our expectations.',
  },
  {
    name: 'Anny Merry',
    role: 'Small Business Owner',
    quote:
      'We partnered on our full brand refresh, and the results have been beyond our expectations.',
  },
  {
    name: 'William R.',
    role: 'Startup Founder',
    quote:
      'A brand identity that reflects who we are and makes every touchpoint feel considered. I was impressed with the attention to detail across packaging and digital.',
  },
]

export function Testimonials() {
  return (
    <section aria-label="Client testimonials" className="py-16 md:py-24">
      <h2 className="mx-auto max-w-6xl px-5 text-4xl font-bold tracking-tight md:px-8 md:text-6xl">
        Words From Clients
      </h2>

      <div className="mt-10 overflow-hidden md:mt-14">
        <div className="animate-marquee flex w-max gap-5 px-5">
          {[...testimonials, ...testimonials].map((t, i) => (
            <figure
              key={i}
              aria-hidden={i >= testimonials.length}
              className="flex w-80 shrink-0 flex-col gap-5 rounded-2xl border border-border bg-card p-7 md:w-96"
            >
              <figcaption>
                <p className="text-sm font-bold tracking-widest uppercase">{t.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{t.role}</p>
              </figcaption>
              <blockquote className="text-sm leading-relaxed text-muted-foreground">
                {'"'}
                {t.quote}
                {'"'}
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
