// hero.tsx
import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8F6F1] px-5 pb-9 pt-4 sm:px-8 sm:pt-6 md:pb-11 lg:min-h-[600px] lg:px-12 lg:pb-10 lg:pt-5 xl:pt-6"
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
        {/*
          Grid instead of absolute positioning. Row 1 is
          [ label | Muskan + logo | label ] with items-end, so both labels
          sit flush with the BOTTOM of the logo no matter how wide/tall
          "Muskan" renders at a given breakpoint — that's your point 5.
          Row 2 is the description, placed in the SAME column as the logo
          (col-start-2 = the "auto" column), so its width always matches
          the logo/heading exactly, instead of being a separately-guessed
          percentage — that's point 4. The logo itself is w-full of the
          center block below, so its left/right edges land exactly on the
          "M" and "n" of the heading — that's point 3.

          The two outer columns are 1fr/1fr, so they split whatever space
          is left over after the center column equally — the labels use
          justify-self-start/end to pin to the true outer edge of this
          max-w-[1550px] wrapper. That width is the one variable controlling
          how far out the labels sit: if your nav's content container is
          narrower than 1550px, tighten this (or give just this grid its
          own narrower max-width) and the labels move in with it.
        */}
        <div className="grid w-full grid-cols-1 lg:grid-cols-[1fr_auto_1fr] lg:items-end lg:gap-x-6 xl:gap-x-10">
          {/* Left desktop label */}
          <p className="hidden whitespace-nowrap text-left font-sans font-normal leading-[0.86] tracking-[-0.05em] text-foreground lg:block lg:justify-self-start lg:text-[1.45rem] xl:text-[1.65rem]">
            Visual &amp;
            <br />
            Brand Identity
            <br />
            Designer
          </p>

          {/* Central Muskan block — logo is w-full of THIS block, so it
              inherits the heading's exact rendered width */}
          <div className="mx-auto w-fit lg:col-start-2">
            <h1 className="whitespace-nowrap font-sans text-[3.8rem] font-normal leading-[0.78] tracking-[-0.035em] text-foreground sm:text-[5rem] md:text-[6rem] lg:text-[7.2rem] xl:text-[8.5rem]">
              Muskan
            </h1>

            <div className="mt-4 w-full lg:mt-5">
              <img
                src="/muskan-logo.png"
                alt="Muskan portrait inside the brand logo"
                className="block h-auto w-full object-contain mix-blend-multiply contrast-[1.04] saturate-[1.03] transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Right desktop label */}
          <p className="hidden whitespace-nowrap text-right font-sans font-normal leading-[0.86] tracking-[-0.05em] text-foreground lg:block lg:justify-self-end lg:text-[1.45rem] xl:text-[1.65rem]">
            Strategic
            <br />
            Emerging
            <br />
            Designer
          </p>

          {/* Description — same grid column as the logo (col 2 on desktop),
              so it is always exactly logo-width, flush on both sides */}
          <p className="mx-auto mt-8 w-full max-w-md text-center font-[family-name:var(--font-neue-haas)] text-[1.1rem] font-normal leading-[1.35] tracking-[-0.025em] text-foreground sm:max-w-lg sm:text-[1.25rem] lg:col-start-2 lg:mt-9 lg:max-w-none lg:text-[1.35rem] xl:text-[1.45rem]">
            I turn ambitious ideas into memorable brands
            <br />
            that capture attention, earn trust and help
            <br />
            your business become the obvious choice.
          </p>
        </div>

        {/* Mobile-only labels */}
        <div className="mt-7 flex w-full justify-between gap-6 lg:hidden">
          <p className="text-left font-sans text-[1.05rem] font-normal leading-[0.9] tracking-[-0.035em] text-foreground sm:text-[1.2rem]">
            Visual &amp;
            <br />
            Brand Identity
            <br />
            Designer
          </p>

          <p className="text-right font-sans text-[1.05rem] font-normal leading-[0.9] tracking-[-0.035em] text-foreground sm:text-[1.2rem]">
            Strategic
            <br />
            Emerging
            <br />
            Designer
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4 lg:mt-10">
          <Link
            href="/#projects"
            className="group inline-flex h-12 items-center justify-center gap-3 rounded-md border border-blue-brand bg-blue-brand px-7 font-sans text-sm font-normal text-white shadow-[0_10px_28px_rgba(108,147,255,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(108,147,255,0.25)] md:text-base"
          >
            <span>View Projects</span>
          </Link>

          <Link
            href="/#contact"
            className="group inline-flex h-12 items-center justify-center gap-3 rounded-md border border-foreground bg-foreground px-7 font-sans text-sm font-normal text-background shadow-[0_10px_28px_rgba(40,38,33,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(40,38,33,0.18)] md:text-base"
          >
            <span>Let&apos;s Work together!</span>
          </Link>
        </div>
      </div>
    </section>
  )
}