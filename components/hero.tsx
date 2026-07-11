// hero.tsx
import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8F6F1] px-5 py-9 sm:px-8 md:py-11 lg:min-h-[600px] lg:px-12 lg:py-10"
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

      <div className="relative mx-auto flex w-full max-w-[1550px] flex-col items-center px-0 text-center lg:px-12 xl:px-16">
        {/* Main heading, logo and desktop side labels */}
        <div className="relative w-full">
          {/* Left label */}
          <p className="absolute left-0 top-[58%] hidden -translate-y-1/2 text-left font-sans text-[1.25rem] font-normal leading-[0.86] tracking-[-0.045em] text-foreground sm:text-[1.45rem] lg:block lg:text-[1.7rem]">
            Visual &amp;
            <br />
            Brand Identity
            <br />
            Designer
          </p>

          {/* Right label */}
          <p className="absolute right-0 top-[58%] hidden -translate-y-1/2 text-right font-sans text-[1.25rem] font-normal leading-[0.86] tracking-[-0.045em] text-foreground sm:text-[1.45rem] lg:block lg:text-[1.7rem]">
            Strategic
            <br />
            Emerging
            <br />
            Designer
          </p>

          {/*
            Shared central width:
            The heading, logo, description and buttons all stay inside
            the same visual boundaries.
          */}
          <div className="mx-auto w-full max-w-[760px]">
            <h1 className="w-full whitespace-nowrap font-sans text-[3.8rem] font-normal leading-[0.78] tracking-[-0.035em] text-foreground sm:text-[5rem] md:text-[6rem] lg:text-[7.2rem] xl:text-[8.5rem]">
              Muskan
            </h1>

            <div className="mt-3 w-full overflow-hidden">
              <img
                src="/muskan-logo.png"
                alt="Muskan portrait inside the brand logo"
                className="
                  block
                  h-auto
                  w-full
                  max-w-full
                  object-contain
                  mix-blend-multiply
                  contrast-[1.04]
                  saturate-[1.03]
                  transition-transform
                  duration-700
                  ease-out
                  hover:scale-[1.015]
                "
              />
            </div>
          </div>
        </div>

        {/* Mobile labels */}
        <div className="mt-6 flex w-full justify-between gap-6 lg:hidden">
          <p className="text-left font-sans text-[1.1rem] font-normal leading-[0.9] tracking-[-0.03em] text-foreground sm:text-[1.25rem]">
            Visual &amp;
            <br />
            Brand Identity
            <br />
            Designer
          </p>

          <p className="text-right font-sans text-[1.1rem] font-normal leading-[0.9] tracking-[-0.03em] text-foreground sm:text-[1.25rem]">
            Strategic
            <br />
            Emerging
            <br />
            Designer
          </p>
        </div>

        {/* Description and buttons use the same width as the logo */}
        <div className="mx-auto mt-9 flex w-full max-w-[760px] flex-col items-center lg:mt-11">
          <p className="w-full max-w-[620px] font-sans text-[1.25rem] font-normal leading-[1.35] tracking-[-0.025em] text-foreground sm:text-[1.4rem] lg:text-[1.5rem]">
            I turn ambitious ideas into memorable brands that capture
            attention, earn trust and help your business become the obvious
            choice.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4 lg:mt-9">
            <Link
              href="/#projects"
              className="group inline-flex h-12 items-center justify-center rounded-md border border-blue-brand bg-blue-brand px-7 font-sans text-sm font-normal text-white shadow-[0_10px_28px_rgba(108,147,255,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(108,147,255,0.25)] md:text-base"
            >
              View Projects
            </Link>

            <Link
              href="/#contact"
              className="group inline-flex h-12 items-center justify-center rounded-md border border-foreground bg-foreground px-7 font-sans text-sm font-normal text-background shadow-[0_10px_28px_rgba(40,38,33,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(40,38,33,0.18)] md:text-base"
            >
              Let&apos;s Work together!
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}