'use client';

import React, { useRef, useSyncExternalStore } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
  useReducedMotion,
} from 'framer-motion';

export interface HeroScrollAnimationProps {
  children?: React.ReactNode;
  skySrc?: string;
  showcaseSrc?: string;
}

function subscribeMediaQuery(callback: () => void) {
  const mql = window.matchMedia('(min-width: 768px)');
  mql.addEventListener('change', callback);
  return () => mql.removeEventListener('change', callback);
}

function getMediaSnapshot() {
  return window.matchMedia('(min-width: 768px)').matches;
}

function getServerSnapshot() {
  return true;
}

/**
 * HeroScrollAnimation — Prime Capital Partners
 *
 * Choreographed scroll stage with an architectural showcase image
 * rising, centering, settling beside executive copy, and exiting.
 */
export default function HeroScrollAnimation({
  children,
  skySrc = '/images/sky-hero.jpg',
  showcaseSrc = '/images/hero-showcase.jpg',
}: HeroScrollAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isDesktop = useSyncExternalStore(subscribeMediaQuery, getMediaSnapshot, getServerSnapshot);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 20,
    mass: 0.2,
  });

  // 1. Sky & Page Background
  // 0.25 to 0.5: Sky blurs 0 to 8px and cross-fades into --bg-page
  const skyBlurValue = useTransform(smoothProgress, [0.25, 0.5], [0, 8]);
  const skyFilter = useMotionTemplate`blur(${skyBlurValue}px)`;
  const skyScale = useTransform(smoothProgress, [0, 0.5], [1, 1.06]);
  const pageOverlayOpacity = useTransform(smoothProgress, [0.25, 0.5], [0, 1]);

  // 2. Headline & CTA Block
  // Fully visible 0 to 0.22, fades and lifts (opacity 1 to 0, y 0 to -40) over 0.22 to 0.38
  const heroTextOpacity = useTransform(smoothProgress, [0.22, 0.38], [1, 0]);
  const heroTextY = useTransform(smoothProgress, [0.22, 0.38], [0, -40]);
  const heroPointerEvents = useTransform(smoothProgress, (v) => (v > 0.28 ? 'none' : 'auto'));

  // 3. Showcase Image Choreography
  // Opacity: rises from 0.2 to 1 over 0 to 0.18, exits 0.85 to 1
  const imageOpacity = useTransform(smoothProgress, [0, 0.18, 0.85, 1], [0.2, 1, 1, 0]);

  // Desktop transforms:
  // 0 -> 0.25 RISE: y 75vh to 18vh, rotateX 12deg to 0, scale 0.92 to 1
  // 0.25 -> 0.5 CENTRE: y 18vh to 0, flat and full size
  // 0.5 -> 0.8 SETTLE: scale to 0.58, x to +24vw, rotateY -14deg, rotateX 3deg
  // 0.8 -> 1.0 EXIT: y to -70vh, x to +32vw
  const desktopImageX = useTransform(smoothProgress, [0, 0.25, 0.5, 0.8, 1], ['0vw', '0vw', '0vw', '24vw', '32vw']);
  const desktopImageY = useTransform(smoothProgress, [0, 0.25, 0.5, 0.8, 1], ['75vh', '18vh', '0vh', '0vh', '-70vh']);
  const desktopImageScale = useTransform(smoothProgress, [0, 0.25, 0.5, 0.8, 1], [0.92, 1, 1, 0.58, 0.58]);
  const desktopImageRotateX = useTransform(smoothProgress, [0, 0.25, 0.5, 0.8, 1], [12, 0, 0, 3, 3]);
  const desktopImageRotateY = useTransform(smoothProgress, [0, 0.25, 0.5, 0.8, 1], [0, 0, 0, -14, -14]);

  // Mobile transforms (no side-by-side, no rotateY, scales to ~0.78, moves down to make room for side text above):
  // At 0.82 side text has fully faded to 0; image moves up from 0.84 to 1.0 cleanly
  const mobileImageX = useTransform(smoothProgress, [0, 0.25, 0.5, 0.8, 1], ['0vw', '0vw', '0vw', '0vw', '0vw']);
  const mobileImageY = useTransform(smoothProgress, [0, 0.25, 0.5, 0.78, 0.84, 1], ['70vh', '18vh', '0vh', '14vh', '14vh', '-75vh']);
  const mobileImageScale = useTransform(smoothProgress, [0, 0.25, 0.5, 0.8, 1], [0.92, 1, 1, 0.78, 0.78]);
  const mobileImageRotateX = useTransform(smoothProgress, [0, 0.25, 0.5, 0.8, 1], [10, 0, 0, 0, 0]);
  const mobileImageRotateY = useTransform(smoothProgress, [0, 1], [0, 0]);

  // Active transforms based on viewport
  const imageX = isDesktop ? desktopImageX : mobileImageX;
  const imageY = isDesktop ? desktopImageY : mobileImageY;
  const imageScale = isDesktop ? desktopImageScale : mobileImageScale;
  const imageRotateX = isDesktop ? desktopImageRotateX : mobileImageRotateX;
  const imageRotateY = isDesktop ? desktopImageRotateY : mobileImageRotateY;

  // 4. Side Text Choreography
  // Desktop: Fades in once image is ~70% settled (0.65 to 0.78), exits 0.82 to 0.95
  const desktopSideOpacity = useTransform(smoothProgress, [0.65, 0.78, 0.82, 0.95], [0, 1, 1, 0]);
  const desktopSideX = useTransform(smoothProgress, [0.65, 0.78], [-24, 0]);
  const desktopSideY = useTransform(smoothProgress, [0.82, 0.95], [0, -30]);

  // Mobile: Sits above the image, fades in 0.65 to 0.76, exits fully by 0.82 before image rises
  const mobileSideOpacity = useTransform(smoothProgress, [0.65, 0.76, 0.80, 0.82], [0, 1, 1, 0]);
  const mobileSideY = useTransform(smoothProgress, [0.65, 0.76, 0.80, 0.82], [-16, 0, 0, -36]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: '450vh' }}>
      <div className="sticky top-0 h-svh min-h-screen w-full overflow-hidden">
        {/* Light canvas base layer */}
        <div
          className="absolute inset-0 -z-30 pointer-events-none"
          style={{ backgroundColor: 'var(--bg-page)' }}
        />

        {/* Sky photography layer */}
        <motion.div
          className="absolute inset-0 -z-20 pointer-events-none overflow-hidden"
          style={{
            filter: shouldReduceMotion ? 'blur(0px)' : skyFilter,
            scale: shouldReduceMotion ? 1 : skyScale,
          }}
        >
          <Image
            src={skySrc}
            alt="Expansive sky"
            fill
            priority
            sizes="100vw"
            quality={95}
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(35,41,70,0.22) 0%, rgba(35,41,70,0.10) 45%, rgba(245,244,252,0.40) 80%, rgba(245,244,252,0.85) 100%)',
            }}
          />
        </motion.div>

        {/* Page-colour overlay layer (--bg-page) fading in over sky */}
        <motion.div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            backgroundColor: 'var(--bg-page)',
            opacity: shouldReduceMotion ? 1 : pageOverlayOpacity,
          }}
        />

        {/* Hero headline & CTA layer */}
        <motion.div
          className="absolute inset-0 z-20 flex items-center justify-center px-4"
          style={{
            opacity: shouldReduceMotion ? 1 : heroTextOpacity,
            y: shouldReduceMotion ? 0 : heroTextY,
            pointerEvents: shouldReduceMotion ? 'auto' : heroPointerEvents,
          }}
        >
          {children || (
            <div className="text-center max-w-2xl mx-auto flex flex-col items-center">
              <h1
                className="text-white font-bold tracking-tight mb-5"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.25rem, 4.8vw, 3.25rem)',
                  lineHeight: 1.12,
                  letterSpacing: '-0.02em',
                  textShadow: '0 2px 18px rgba(18, 28, 66, 0.25)',
                }}
              >
                Capital, connected<br />with discretion.
              </h1>

              <p
                className="max-w-lg mb-7"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.8125rem, 1vw, 0.9375rem)',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.88)',
                }}
              >
                Prime Capital works between principals, opportunities and aligned capital — bringing considered advice, private introductions and coordinated execution to the situations that require a measured approach.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <Link href="/connect" className="sky-btn-glass">
                  Begin a Conversation
                </Link>
                <Link
                  href="/focus"
                  className="text-white/85 font-medium text-sm hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Explore Focus →
                </Link>
              </div>
            </div>
          )}
        </motion.div>

        {/* Showcase Image 3D Stage */}
        <div
          className="absolute inset-0 z-20 flex items-center justify-center px-4 pointer-events-none"
          style={{ perspective: 1600 }}
        >
          <motion.div
            className="w-full max-w-[1040px] pointer-events-auto"
            style={{
              x: shouldReduceMotion ? '0vw' : imageX,
              y: shouldReduceMotion ? '0vh' : imageY,
              scale: shouldReduceMotion ? 1 : imageScale,
              rotateX: shouldReduceMotion ? 0 : imageRotateX,
              rotateY: shouldReduceMotion ? 0 : imageRotateY,
              opacity: shouldReduceMotion ? 1 : imageOpacity,
              transformOrigin: 'center center',
              willChange: 'transform',
            }}
          >
            <div
              className="relative w-full aspect-[16/10] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-2xl"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow:
                  '0 30px 90px -15px rgba(20, 25, 45, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.12)',
                backgroundColor: 'var(--card-dark)',
              }}
            >
              <Image
                src={showcaseSrc}
                alt="Illustrative Mayfair townhouse facade at dusk"
                fill
                priority
                sizes="(max-width: 1040px) 92vw, 1040px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Desktop Side Text Block (Settles on Left) */}
        {isDesktop && (
          <motion.div
            className="absolute left-[3.5vw] lg:left-[8vw] top-1/2 -translate-y-1/2 max-w-[290px] lg:max-w-[420px] z-20 pointer-events-none"
            style={{
              opacity: shouldReduceMotion ? 1 : desktopSideOpacity,
              x: shouldReduceMotion ? 0 : desktopSideX,
              y: shouldReduceMotion ? 0 : desktopSideY,
              willChange: 'transform',
            }}
          >
            <h3
              className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[var(--text-heading)] mb-3 leading-snug"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Introductions, made quietly.
            </h3>
            <p
              className="text-xs sm:text-sm lg:text-base text-[var(--text-body)] leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              We connect principals and capital across London, Edinburgh, the Gulf and Africa, on a confidential, mandate-by-mandate basis.
            </p>
          </motion.div>
        )}

        {/* Mobile Side Text Block (Settles Above Image) */}
        {!isDesktop && (
          <motion.div
            className="absolute top-[16vh] left-0 right-0 px-6 text-center max-w-sm mx-auto z-20 pointer-events-none"
            style={{
              opacity: shouldReduceMotion ? 1 : mobileSideOpacity,
              y: shouldReduceMotion ? 0 : mobileSideY,
              willChange: 'transform',
            }}
          >
            <h3
              className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-heading)] mb-2 leading-snug"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Introductions, made quietly.
            </h3>
            <p
              className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              We connect principals and capital across London, Edinburgh, the Gulf and Africa, on a confidential, mandate-by-mandate basis.
            </p>
          </motion.div>
        )}

        {/* Initial Scroll Hint */}
        <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center pointer-events-none">
          <motion.div
            style={{ opacity: shouldReduceMotion ? 0 : heroTextOpacity }}
            className="text-[10px] font-semibold text-white/70 flex items-center gap-1.5 tracking-wider uppercase"
          >
            <span>Scroll to explore</span>
            <span className="animate-bounce">↓</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
