import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-black px-5 pt-8 pb-10 text-center text-white"
    >
      {/* Name */}
      <h1 className="relative z-20 mx-auto text-[3rem] font-black uppercase leading-[0.82] tracking-[-0.06em] md:text-[5rem] lg:text-[7rem] xl:text-[8.5rem]">
        Muskan Varotaria
      </h1>

      {/* Portrait */}
      <div className="relative z-10 mx-auto -mt-2 flex justify-center md:-mt-4 lg:-mt-6">
        <div className="relative h-[280px] w-[200px] overflow-hidden rounded-t-[120px] bg-[#ff2b1f] md:h-[360px] md:w-[260px] md:rounded-t-[150px] lg:h-[440px] lg:w-[320px] lg:rounded-t-[180px]">
          <Image
            src="/muskan.png"
            alt="Muskan Varotaria"
            fill
            priority
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* Description */}
      <p className="relative z-20 mx-auto mt-6 max-w-3xl text-[1.2rem] font-black uppercase leading-[1] tracking-[-0.04em] md:text-[1.8rem] lg:text-[2.3rem]">
        I'M MUSKAN, A PASSIONATE VISUALLY STRIKING
        <br />
        AND USER-FRIENDLY DESIGNER.
      </p>

      {/* Button */}
      <Link
        href="/#contact"
        className="relative z-20 mt-10 inline-flex items-center gap-3 rounded-full bg-white/15 px-6 py-3 text-base font-medium text-white transition hover:bg-white hover:text-black"
      >
        Let's Work Together
        <span aria-hidden="true">→</span>
      </Link>
    </section>
  )
}
