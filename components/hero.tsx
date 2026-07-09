import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-black px-5 pt-10 pb-12 text-center text-white"
    >
      <h1 className="relative z-20 mx-auto text-[4.2rem] font-black uppercase leading-[0.82] tracking-[-0.06em] md:text-[8rem] lg:text-[11rem] xl:text-[13rem]">
        Muskan Varotaria
      </h1>

      <div className="relative z-10 mx-auto -mt-4 flex justify-center md:-mt-8 lg:-mt-12">
        <div className="relative h-[430px] w-[300px] overflow-hidden rounded-t-full bg-[#ff2b1f] md:h-[560px] md:w-[390px] lg:h-[620px] lg:w-[430px]">
          <Image
            src="/muskan.png"
            alt="Muskan Varotaria"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </div>

      <p className="relative z-20 mx-auto -mt-8 max-w-4xl text-[2rem] font-black uppercase leading-[0.95] tracking-[-0.04em] md:-mt-12 md:text-[3rem] lg:text-[3.7rem]">
        I’m Muskan, a passionate visually striking and user-friendly designer.
      </p>

      <Link
        href="/#contact"
        className="relative z-20 mt-12 inline-flex items-center gap-4 rounded-full bg-white/15 px-8 py-4 text-lg font-medium text-white transition hover:bg-white hover:text-black"
      >
        Let&apos;s Work Together
        <span aria-hidden="true">→</span>
      </Link>
    </section>
  )
}
