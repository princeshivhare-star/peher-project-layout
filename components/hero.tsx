import Link from "next/link";

export function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8F6F1] px-5 pb-10 pt-8 md:px-8 md:pb-14 md:pt-10"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />
        <div className="absolute -left-28 top-56 h-72 w-72 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute -right-28 top-56 h-72 w-72 rounded-full bg-purple-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1500px] flex-col items-center text-center">
        {/* Name */}
        <h1 className="relative z-20 mb-1 font-sans text-[4.2rem] font-normal leading-[0.82] tracking-[-0.065em] text-foreground sm:text-[5.5rem] md:text-[7rem] lg:text-[8.5rem]">
          Muskan
        </h1>

        {/* Logo */}
        <div className="relative z-10 w-full max-w-[760px]">
          <img
            src="/muskan-logo.png"
            alt="Muskan portrait inside the brand logo"
            className="mx-auto h-auto w-[92%] object-contain mix-blend-multiply transition-transform duration-700 hover:scale-[1.015] sm:w-[88%] md:w-full"
          />

          {/* Desktop Labels */}
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            {/* Left */}
            <p
              className="
                absolute
                left-[-145px]
                top-[87%]
                text-left
                text-[2rem]
                font-normal
                leading-[0.9]
                tracking-[-0.045em]
                text-foreground
              "
            >
              Visual &amp;
              <br />
              Brand Identity
              <br />
              Designer
            </p>

            {/* Right */}
            <p
              className="
                absolute
                right-[-165px]
                top-[83%]
                text-right
                text-[2rem]
                font-normal
                leading-[0.9]
                tracking-[-0.045em]
                text-foreground
              "
            >
              Emerging
              <br />
              designer
            </p>
          </div>

          {/* Mobile Labels */}
          <div className="mt-4 grid grid-cols-2 md:hidden">
            <p className="text-left text-[1.15rem] leading-[0.9] tracking-[-0.04em]">
              Visual &amp;
              <br />
              Brand Identity
              <br />
              Designer
            </p>

            <p className="text-right text-[1.15rem] leading-[0.9] tracking-[-0.04em]">
              Emerging
              <br />
              designer
            </p>
          </div>
        </div>

        {/* Intro */}
        <p className="mt-10 max-w-[700px] font-dribelland text-[1.8rem] leading-[0.82] text-foreground sm:text-[2.2rem] md:text-[2.7rem]">
          I turn smart ideas into brands
          <br className="hidden sm:block" />
          people notice, trust and choose.
        </p>

        {/* Buttons */}
        <div className="mt-8 grid w-full max-w-[760px] grid-cols-1 gap-4 sm:grid-cols-2">
          <Link
            href="/#projects"
            className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-blue-brand px-6 text-base text-white shadow-[0_10px_30px_rgba(108,147,255,0.18)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(108,147,255,0.25)] md:text-lg"
          >
            View Projects
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>

          <Link
            href="/#contact"
            className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-black/10 bg-white px-6 text-base text-foreground shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-1 hover:bg-white md:text-lg"
          >
            Let's Work together!
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}