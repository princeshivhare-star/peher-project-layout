import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8F6F1] px-5 py-12 sm:px-8 md:py-16 lg:min-h-[720px] lg:px-12"
    >
      {/* Soft background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[22%] top-0 h-[420px] w-[620px] rounded-full bg-white/75 blur-3xl" />
        <div className="absolute -left-24 top-48 h-72 w-72 rounded-full bg-blue-brand/5 blur-3xl" />
        <div className="absolute -right-24 top-40 h-80 w-80 rounded-full bg-[#D9D0EA]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1500px]">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
          {/* Left content */}
          <div className="relative z-20 flex flex-col items-start text-left">
            {/* Name */}
            <h1 className="font-sans text-[4.5rem] font-normal leading-[0.78] tracking-[-0.07em] text-foreground sm:text-[6rem] md:text-[7rem] lg:text-[8.5rem] xl:text-[9.5rem]">
              Muskan
            </h1>

            {/* Labels */}
            <div className="mt-5 grid w-full max-w-[560px] grid-cols-2 gap-8 sm:mt-6 sm:gap-12">
              <p className="text-[1.45rem] font-normal leading-[0.86] tracking-[-0.045em] text-foreground sm:text-[1.7rem] lg:text-[2rem]">
                Visual &amp;
                <br />
                Brand Identity
                <br />
                Designer
              </p>

              <p className="text-[1.45rem] font-normal leading-[0.86] tracking-[-0.045em] text-foreground sm:text-[1.7rem] lg:text-[2rem]">
                Emerging
                <br />
                designer
              </p>
            </div>

            {/* Introduction */}
            <p className="mt-12 max-w-[560px] font-dribelland text-[1.65rem] font-normal leading-[0.9] tracking-normal text-foreground sm:text-[2rem] lg:mt-14 lg:text-[2.3rem]">
              I turn ambitious ideas into memorable brands that
              <br className="hidden sm:block" />
              capture attention, earn trust and help your
              <br className="hidden sm:block" />
              business become the obvious choice.
            </p>

            {/* Buttons */}
            <div className="mt-9 grid w-full max-w-[600px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-7">
              <Link
                href="/#projects"
                className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-lg border border-blue-brand bg-blue-brand px-6 text-base font-normal text-white shadow-[0_10px_28px_rgba(108,147,255,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(108,147,255,0.25)] md:text-lg"
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
                className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-lg border border-foreground bg-foreground px-6 text-base font-normal text-background shadow-[0_10px_28px_rgba(40,38,33,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(40,38,33,0.18)] md:text-lg"
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

          {/* Right logo image */}
          <div className="relative z-10 flex items-center justify-center lg:justify-end">
            <img
              src="/muskan-logo.png"
              alt="Muskan portrait inside the brand logo"
              className="
                h-auto
                w-full
                max-w-[720px]
                object-contain
                mix-blend-multiply
                contrast-[1.04]
                saturate-[1.03]
                transition-transform
                duration-700
                ease-out
                hover:scale-[1.015]
                lg:max-w-[790px]
                xl:max-w-[860px]
              "
            />
          </div>
        </div>
      </div>
    </section>
  )
}