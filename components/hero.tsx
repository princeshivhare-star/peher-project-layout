import Link from 'next/link'

const logoMaskStyle = {
  WebkitMaskImage: "url('/logo.png')",
  maskImage: "url('/logo.png')",
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  WebkitMaskPosition: 'center',
  maskPosition: 'center',
  WebkitMaskSize: 'contain',
  maskSize: 'contain',
} as const

export function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background px-5 pb-16 pt-24 md:px-8 md:pb-24 md:pt-32"
    >
      {/* Soft decorative background */}
      <div
        className="pointer-events-none absolute left-[8%] top-[18%] h-64 w-64 rounded-full bg-blue-brand/10 blur-[110px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-[12%] right-[8%] h-64 w-64 rounded-full bg-lilac-brand/10 blur-[110px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">
        {/* Name */}
        <h1 className="relative z-20 font-sans text-[4.5rem] font-normal leading-[0.88] tracking-[-0.065em] text-foreground sm:text-[6rem] md:text-[8rem] lg:text-[9.5rem]">
          Muskan
        </h1>

        {/* Portrait clipped inside the actual logo */}
        <div className="group relative z-10 -mt-1 w-full max-w-[720px] sm:max-w-[780px] md:-mt-4 md:max-w-[860px]">
          <div className="relative aspect-[3/1] w-full">
            {/* Soft offset logo behind */}
            <div
              className="pointer-events-none absolute inset-0 translate-x-2 translate-y-3 bg-blue-brand/12 transition-transform duration-700 ease-out group-hover:translate-x-3 group-hover:translate-y-4"
              style={logoMaskStyle}
              aria-hidden="true"
            />

            {/* Portrait inside logo */}
            <div
              className="absolute inset-0 overflow-hidden transition-transform duration-700 ease-out group-hover:-translate-y-1 group-hover:scale-[1.015]"
              style={logoMaskStyle}
              role="img"
              aria-label="Muskan Varotaria portrait clipped inside the brand logo"
            >
              <img
                src="/muskan-original.png"
                alt=""
                className="h-full w-full scale-[1.01] object-cover object-[center_52%] transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
            </div>

            {/* Brand-blue overlay */}
            <div
              className="pointer-events-none absolute inset-0 bg-blue-brand/20 transition-colors duration-700 group-hover:bg-blue-brand/14"
              style={logoMaskStyle}
              aria-hidden="true"
            />

            {/* Subtle highlight */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-blue-brand/10"
              style={logoMaskStyle}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Supporting labels */}
        <div className="relative z-20 -mt-1 grid w-full max-w-[730px] grid-cols-2 gap-8 text-left sm:gap-16 md:-mt-3 md:gap-24">
          <p className="text-[1.45rem] font-normal leading-[0.88] tracking-[-0.045em] text-foreground sm:text-[1.8rem] md:text-[2.15rem]">
            Visual &amp;
            <br />
            Brand Identity
            <br />
            Designer
          </p>

          <p className="text-right text-[1.45rem] font-normal leading-[0.88] tracking-[-0.045em] text-foreground sm:text-[1.8rem] md:text-[2.15rem]">
            Emerging
            <br />
            designer
          </p>
        </div>

        {/* Introduction */}
        <p className="mt-10 max-w-[690px] font-dribelland text-[2.2rem] font-normal leading-[0.82] tracking-normal text-foreground sm:text-[2.8rem] md:text-[3.4rem]">
          I turn smart ideas into brands
          <br className="hidden sm:block" />
          people notice, trust and choose.
        </p>

        {/* Buttons */}
        <div className="mt-12 grid w-full max-w-[650px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
          <Link
            href="/#projects"
            className="group/button inline-flex min-h-16 items-center justify-center gap-3 rounded-xl border border-blue-brand bg-blue-brand px-8 text-lg font-normal text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(108,147,255,0.24)] md:text-xl"
          >
            <span>View Projects</span>

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover/button:translate-x-1"
            >
              →
            </span>
          </Link>

          <Link
            href="/#contact"
            className="group/button inline-flex min-h-16 items-center justify-center gap-3 rounded-xl border border-foreground bg-foreground px-8 text-lg font-normal text-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(40,38,33,0.18)] md:text-xl"
          >
            <span>Let&apos;s Work together!</span>

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover/button:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}