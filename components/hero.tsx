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
      className="relative overflow-hidden bg-background px-5 pb-4 pt-10 md:px-8 md:pb-8 md:pt-12"
    >
      {/* Soft background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-16 h-64 w-64 rounded-full bg-blue-brand/8 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 right-0 h-64 w-64 rounded-full bg-lilac-brand/8 blur-[120px]"
      />

      <div className="relative mx-auto flex w-full max-w-[1500px] flex-col items-center text-center">
        {/* Name */}
        <h1 className="relative z-20 font-sans text-[4.4rem] font-normal leading-[0.84] tracking-[-0.065em] text-foreground sm:text-[5.5rem] md:text-[6.8rem] lg:text-[7.8rem]">
          Muskan
        </h1>

        {/* Portrait clipped inside actual logo */}
        <div className="group relative z-10 -mt-3 w-[112%] max-w-none sm:w-[105%] md:-mt-6 md:w-[92vw] lg:w-[88vw] xl:w-[1120px]">
          <div className="relative aspect-[2.3/1] w-full">
            {/* Soft offset logo shadow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 bg-blue-brand/12 transition-transform duration-700 ease-out group-hover:translate-x-4 group-hover:translate-y-4"
              style={logoMaskStyle}
            />

            {/* Main masked image area */}
            <div
              role="img"
              aria-label="Muskan Varotaria portrait clipped inside the brand logo"
              className="absolute inset-0 overflow-hidden"
              style={logoMaskStyle}
            >
              {/* Background fills the complete logo */}
              <img
                src="/muskan-original.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full scale-[0.96] object-cover object-[center_48%] blur-[0.5px] transition-transform duration-700 ease-out group-hover:scale-[1]"
              />

              {/* Clear Muskan portrait */}
              <img
                src="/muskan-original.png"
                alt=""
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[66%] w-auto max-w-none -translate-x-1/2 -translate-y-[34%] object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            </div>

            {/* Brand blue overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-blue-brand/18 transition-colors duration-700 group-hover:bg-blue-brand/12"
              style={logoMaskStyle}
            />

            {/* Soft highlight */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/18 via-transparent to-blue-brand/8"
              style={logoMaskStyle}
            />
          </div>
        </div>

        {/* Supporting labels */}
        <div className="-mt-8 grid w-full max-w-[700px] grid-cols-2 gap-10 text-left sm:gap-20 md:-mt-12">
          <p className="text-[1.3rem] font-normal leading-[0.9] tracking-[-0.04em] text-foreground sm:text-[1.6rem] md:text-[1.85rem]">
            Visual &amp;
            <br />
            Brand Identity
            <br />
            Designer
          </p>

          <p className="text-right text-[1.3rem] font-normal leading-[0.9] tracking-[-0.04em] text-foreground sm:text-[1.6rem] md:text-[1.85rem]">
            Emerging
            <br />
            designer
          </p>
        </div>

        {/* Introduction */}
        <p className="mt-5 max-w-[650px] font-dribelland text-[1.95rem] font-normal leading-[0.82] tracking-normal text-foreground sm:text-[2.35rem] md:text-[2.8rem]">
          I turn smart ideas into brands
          <br className="hidden sm:block" />
          people notice, trust and choose.
        </p>

        {/* Buttons */}
        <div className="mt-7 grid w-full max-w-[620px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          <Link
            href="/#projects"
            className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-blue-brand bg-blue-brand px-7 text-base font-normal text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(108,147,255,0.22)] md:text-lg"
          >
            <span>View Projects</span>

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>

          <Link
            href="/#contact"
            className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-foreground bg-foreground px-7 text-base font-normal text-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(40,38,33,0.16)] md:text-lg"
          >
            <span>Let&apos;s Work together!</span>

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}