import Image from 'next/image'
import Link from 'next/link'
import { peherImages } from '@/lib/peher'

// Horizontal auto-scrolling reel of brand work, like the reference hero strip.
// Swap these for the dedicated reel images once provided.
const reelImages = [
  peherImages[10],
  peherImages[3],
  peherImages[6],
  peherImages[0],
  peherImages[9],
  peherImages[5],
]

export function ProjectReel() {
  return (
    <section aria-label="Visual project reel" className="py-6 md:py-10">
      <div className="overflow-hidden">
        <div className="animate-marquee flex w-max gap-4 px-4">
          {[...reelImages, ...reelImages].map((img, i) => (
            <Link
              key={i}
              href="/projects/peher"
              tabIndex={i >= reelImages.length ? -1 : 0}
              aria-hidden={i >= reelImages.length}
              className="relative block h-52 w-72 shrink-0 overflow-hidden rounded-2xl bg-secondary md:h-72 md:w-[26rem]"
            >
              <Image
                src={img.src || "/placeholder.svg"}
                alt={i < reelImages.length ? img.alt : ''}
                fill
                sizes="(max-width: 768px) 288px, 416px"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
