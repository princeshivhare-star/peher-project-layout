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
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Name */}
        <h1 className="font-sans text-[4.5rem] font-normal leading-[0.88] tracking-[-0.065em] text-foreground sm:text-[6rem] md:text-[8rem] lg:text-[9.5rem]">
          Muskan
        </h1>

        {/* Portrait clipped inside the real logo */}
        <div className="-mt-1 w-full max-w-[560px] md:-mt-3 md:max-w-[650px]">
          <div className="relative aspect-[2.8/1] w-full">
            {/* Original photograph clipped by logo.png */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={logoMaskStyle}
              role="img"
              aria-label="Muskan Varotaria portrait clipped inside the brand logo"
            >
              <img
                src="/muskan-original.png"
                alt=""
                className="h-full w-full scale-[1.2] object-cover object-[center_44%]"
              />
            </div>

            {/* Same logo shape with lowered blue opacity */}
            <div
              className="pointer-events-none absolute inset-0 bg-blue-brand/25"
              style={logoMaskStyle}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Supporting labels */}
        <div className="mt-2 grid w-full max-w-[610px] grid-cols-2 gap-8 text-left sm:gap-20">
          <p className="text-[1.65rem] font-normal leading-[0.88] tracking-[-0.045em] text-foreground sm:text-[2rem] md:text-[2.35rem]">
            Visual &amp;
            <br />
            Brand Identity
            <br />
            Designer
          </p>

          <p className="text-right text-[1.65rem] font-normal leading-[0.88] tracking-[-0.045em] text-foreground sm:text-[2rem] md:text-[2.35rem]">
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
            className="inline-flex min-h-16 items-center justify-center rounded-xl border border-blue-brand bg-blue-brand px-8 text-lg font-normal text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg md:text-xl"
          >
            View Projects
          </Link>

          <Link
            href="/#contact"
            className="inline-flex min-h-16 items-center justify-center rounded-xl border border-foreground bg-foreground px-8 text-lg font-normal text-background transition duration-300 hover:-translate-y-1 hover:shadow-lg md:text-xl"
          >
            Let&apos;s Work together!
          </Link>
        </div>
      </div>
    </section>
  )
}