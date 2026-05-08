"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { withBasePath } from "../lib/withBasePath";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false, loading: () => null });

const DURATION_MS = 9800;      // cloud -> satellite flight
const HOLD_MS = 900;           // brief hold on sky before descent
const LANDING_HOLD_MS = 1400;  // keep the factory shot on screen before fading out
const PHOTO_REVEAL = 0.84;     // reveal factory later so the satellite descent reads clearly

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

declare global {
  interface Window {
    __flightProgress?: number;
  }
}

interface Props {
  onComplete: () => void;
}

const HeroIntro = ({ onComplete }: Props) => {
  const [skipped, setSkipped] = useState(false);
  const [photoVisible, setPhotoVisible] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const satRef = useRef<HTMLDivElement>(null);
  const cloudsRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<number>(0);
  const landingAtRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);
  const completedRef = useRef(false);

  const finish = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    cancelAnimationFrame(rafRef.current);
    window.__flightProgress = 1;
    setFadingOut(true);
    // Let the overlay fade out (CSS .9s) then notify parent
    window.setTimeout(() => onComplete(), 950);
  };

  useEffect(() => {
    document.body.classList.add("intro-locked");
    const tick = (now: number) => {
      if (!startRef.current) startRef.current = now;
      const flightElapsed = now - startRef.current - HOLD_MS;
      const raw = Math.max(0, Math.min(1, flightElapsed / DURATION_MS));
      const p = easeInOutCubic(raw);
      window.__flightProgress = p;

      // Satellite zoom + drift toward target (upper-left of frame)
      const sat = satRef.current;
      if (sat) {
        const scale = 1 + p * 1.3;
        const tx = -p * 4.2;
        const ty = p * 2.8;
        sat.style.transform = `translate3d(${tx}vw, ${ty}vh, 0) scale(${scale})`;
        sat.style.opacity = String(Math.min(1, p * 2.4));
      }
      // Clouds CSS layer parallax (the 3D canvas reads __flightProgress itself)
      const cl = cloudsRef.current;
      if (cl) {
        const op = p < 0.58 ? 1 : Math.max(0, 1 - (p - 0.58) / 0.28);
        cl.style.opacity = String(op);
      }
      if (raw >= PHOTO_REVEAL && !photoVisible) setPhotoVisible(true);

      if (raw < 1) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      if (landingAtRef.current === null) landingAtRef.current = now;

      if (now - landingAtRef.current >= LANDING_HOLD_MS) {
        finish();
      } else {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      document.body.classList.remove("intro-locked");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSkip = () => {
    setSkipped(true);
    finish();
  };

  return (
    <div
      ref={overlayRef}
      className={`hero-intro ${fadingOut ? "is-leaving" : ""}`}
      aria-hidden={skipped || fadingOut}
    >
      <div className="hero-intro-sky" />
      <div ref={satRef} className="hero-intro-satellite">
        <Image
          src={withBasePath("/img/satellite.jpg")}
          alt=""
          fill
          priority
          quality={95}
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div ref={cloudsRef} className="hero-intro-clouds">
        <HeroCanvas />
      </div>
      <div className={`hero-intro-photo ${photoVisible ? "is-visible" : ""}`}>
        <Image
          src={withBasePath("/img/476853282_1255270719938276_6191085373006634954_n-1.jpg")}
          alt="Cegielnia Sośnica — widok z lotu ptaka"
          fill
          priority
          quality={92}
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <button type="button" className="hero-intro-skip" onClick={handleSkip}>
        Pomiń intro
      </button>
    </div>
  );
};

export default HeroIntro;
