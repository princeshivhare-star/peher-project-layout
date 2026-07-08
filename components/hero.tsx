import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="about"
      className="flex flex-col items-center px-5 pt-24 pb-14 text-center md:pt-36 md:pb-20"
    >
      <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">
        Brand &amp; Visual Identity Designer
      </p>

      <h1 className="mt-6 text-6xl font-bold leading-[0.95] tracking-tight text-balance md:text-8xl lg:text-[9rem]">
        Muskan
        <br />
        Varotaria
      </h1>

      <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
        I turn smart ideas into brands people notice, trust and choose.
      </p>

      <Link
        href="/#contact"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-105"
      >
        Let&apos;s Work Together
        <span aria-hidden="true">→</span>
      </Link>
    </section>
  )
}
