import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background px-5 pt-24 pb-16 md:px-8 md:pt-32 md:pb-24"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Name */}
        <h1 className="font-sans text-[4.5rem] font-normal leading-[0.88] tracking-[-0.065em] text-foreground sm:text-[6rem] md:text-[8rem] lg:text-[9.5rem]">
          Muskan
        </h1>

        {/* Image clipped inside logo mark */}
        <div className="-mt-1 w-full max-w-[560px] md:-mt-3 md:max-w-[650px]">
          <svg
            viewBox="0 0 720 300"
            role="img"
            aria-label="Muskan Varotaria portrait clipped inside the brand mark"
            className="h-auto w-full"
          >
            <defs>
              <clipPath id="muskan-logo-clip">
                <path d="M35 245L150 65H300L235 150L320 65H455L390 150L475 65H685L565 245H420L485 155L395 245H260L325 155L235 245H35Z" />
              </clipPath>
            </defs>

            {/* Original image */}
            <image
              href="/muskan-original.png"
              x="0"
              y="-115"
              width="720"
              height="540"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#muskan-logo-clip)"
            />

            {/* Same shape with brand-blue overlay */}
            <path
              d="M35 245L150 65H300L235 150L320 65H455L390 150L475 65H685L565 245H420L485 155L395 245H260L325 155L235 245H35Z"
              fill="var(--blue-brand)"
              opacity="0.28"
            />
          </svg>
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