'use client'

import { useEffect, useRef, useState } from 'react'

type Badge = {
  label: string
  top: string
  left: string
  rotate: number
  fx: number
  fy: number
  delay: number
}

// Desktop cloud positions. `fx` / `fy` describe the direction each pill
// travels FROM (pulled toward the centre) so the pop-in animation reads
// as "inner to outer" — pills start collapsed near the logo and spring
// outward into place, staggered by `delay`.
const badges: Badge[] = [
  { label: 'Brand Identity Systems', top: '3%', left: '46%', rotate: -6, fx: -10, fy: 170, delay: 60 },
  { label: 'Visual Storytelling', top: '13%', left: '71%', rotate: 5, fx: -150, fy: 150, delay: 160 },
  { label: 'Design Systems', top: '17%', left: '18%', rotate: -4, fx: 150, fy: 140, delay: 20 },
  { label: 'Art Direction', top: '40%', left: '80%', rotate: 4, fx: -180, fy: 40, delay: 220 },
  { label: 'Brand Strategy', top: '40%', left: '10%', rotate: -5, fx: 180, fy: 40, delay: 100 },
  { label: 'Packaging Design', top: '64%', left: '81%', rotate: -6, fx: -160, fy: -80, delay: 260 },
  { label: 'Pitch Deck Design', top: '67%', left: '14%', rotate: 6, fx: 160, fy: -70, delay: 200 },
  { label: 'Campaign Design', top: '80%', left: '66%', rotate: -4, fx: -80, fy: -150, delay: 320 },
  { label: 'Content Strategy', top: '82%', left: '34%', rotate: 5, fx: 60, fy: -160, delay: 340 },
]

export function WhatIBring() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-label="What I bring to the table"
      className="mx-auto max-w-6xl overflow-hidden px-5 py-16 md:px-8 md:py-24"
    >
      {/* Desktop / tablet — floating badge cloud */}
      <div className="relative hidden min-h-[620px] md:block">
        {badges.map((badge) => (
          <span
            key={badge.label}
            className="absolute rounded-full bg-blue-brand/15 px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-foreground transition-[transform,opacity] duration-700 ease-out will-change-transform"
            style={{
              top: badge.top,
              left: badge.left,
              transitionDelay: `${badge.delay}ms`,
              opacity: visible ? 1 : 0,
              transform: visible
                ? `translate(-50%, -50%) rotate(${badge.rotate}deg) scale(1)`
                : `translate(calc(-50% + ${badge.fx}px), calc(-50% + ${badge.fy}px)) rotate(${badge.rotate}deg) scale(0.35)`,
            }}
          >
            {badge.label}
          </span>
        ))}

        {/* Centre content */}
        <div
          className="absolute top-1/2 left-1/2 flex w-full max-w-md flex-col items-center text-center transition-[transform,opacity] duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? 'translate(-50%, -50%) scale(1)'
              : 'translate(-50%, -50%) scale(0.8)',
          }}
        >
          <img src="/logo.png" alt="Logo" className="mb-5 h-28 w-auto" />
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            What I Bring
            <br />
            to the Table
          </h2>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-muted-foreground text-pretty">
            Brand systems and visual identities that make businesses easier to
            recognise, trust and remember.
          </p>
        </div>
      </div>

      {/* Mobile — simple stacked layout with a lighter stagger */}
      <div className="flex flex-col items-center text-center md:hidden">
        <img src="/logo.png" alt="Logo" className="mb-5 h-10 w-auto" />
        <h2 className="text-4xl font-bold tracking-tight">
          What I Bring
          <br />
          to the Table
        </h2>
        <p className="mt-6 max-w-sm text-base leading-relaxed text-muted-foreground text-pretty">
          Brand systems and visual identities that make businesses easier to
          recognise, trust and remember.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {badges.map((badge, i) => (
            <span
              key={badge.label}
              className="rounded-full bg-blue-brand/15 px-4 py-2 text-sm font-semibold text-foreground transition-[transform,opacity] duration-500 ease-out"
              style={{
                transitionDelay: `${i * 60}ms`,
                opacity: visible ? 1 : 0,
                transform: visible
                  ? 'scale(1) translateY(0)'
                  : 'scale(0.6) translateY(12px)',
              }}
            >
              {badge.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
