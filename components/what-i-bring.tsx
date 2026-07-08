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
      { threshold: 0.3 }
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
      {/* Desktop / Tablet */}
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

        {/* Perfectly Centered Logo */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'scale(1)' : 'scale(0.8)',
          }}
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="w-[260px] lg:w-[340px] xl:w-[400px] h-auto"
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col items-center md:hidden">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-52 h-auto transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'scale(1)' : 'scale(0.8)',
          }}
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {badges.map((badge, i) => (
            <span
              key={badge.label}
              className="rounded-full bg-blue-brand/15 px-4 py-2 text-sm font-semibold text-foreground transition-all duration-500 ease-out"
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
