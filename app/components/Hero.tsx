"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { withBasePath } from "../lib/withBasePath";

const HeroIntro = dynamic(() => import("./HeroIntro"), { ssr: false, loading: () => null });
const INTRO_PRELOAD_MS = 2000;

const stat = [
  { v: "1925", l: "rok założenia" },
  { v: "5", l: "linii produktów" },
  { v: "100%", l: "własna glina" },
];

const SESSION_KEY = "cs-intro-played";

const preloadImage = (src: string) =>
  new Promise<void>((resolve) => {
    if (typeof window === "undefined") {
      resolve();
      return;
    }

    const img = new window.Image();
    let settled = false;

    const finish = () => {
      if (settled) return;
      settled = true;
      resolve();
    };

    img.onload = finish;
    img.onerror = finish;
    img.src = src;

    if (img.complete) {
      finish();
      return;
    }

    if (typeof img.decode === "function") {
      img.decode().then(finish).catch(finish);
    }
  });

const wait = (ms: number) => new Promise<void>((resolve) => window.setTimeout(resolve, ms));

const Hero = () => {
  const [introState, setIntroState] = useState<"pending" | "playing" | "done">("pending");

  useEffect(() => {
    if (typeof window === "undefined") return;

    let cancelled = false;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const played = sessionStorage.getItem(SESSION_KEY) === "1";

    if (reduced || played) {
      setIntroState("done");
      return;
    }

    const warmIntro = async () => {
      await Promise.allSettled([
        import("./HeroIntro"),
        import("./HeroCanvas"),
        preloadImage(withBasePath("/img/satellite.jpg")),
        preloadImage(withBasePath("/img/476853282_1255270719938276_6191085373006634954_n-1.jpg")),
        wait(INTRO_PRELOAD_MS),
      ]);

      if (!cancelled) {
        setIntroState("playing");
      }
    };

    void warmIntro();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleIntroComplete = () => {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // ignore
    }
    setIntroState("done");
  };

  return (
    <section className="hero" id="top">
      {introState !== "done" && (
        <div className="hero-boot" aria-hidden>
          {introState === "pending" && (
            <div className="hero-loader">
              <span className="hero-loader-kicker">Ceramika Sośnica</span>
              <strong className="hero-loader-title">Przygotowujemy lot nad cegielnią</strong>
              <span className="hero-loader-copy">
                Ładujemy obrazy i scenę startową, żeby intro ruszyło płynniej.
              </span>
              <span className="hero-loader-track">
                <span className="hero-loader-bar" />
              </span>
            </div>
          )}
        </div>
      )}

      {/* Final-state background: factory photo */}
      <div className="hero-photo" aria-hidden>
        <Image
          src={withBasePath("/img/476853282_1255270719938276_6191085373006634954_n-1.jpg")}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="hero-vignette" aria-hidden />

      <div className="hero-inner">
        <motion.span
          className="eyebrow hero-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: introState === "done" ? 0 : 0.2 }}
        >
          Od 1925 roku · Sośnica 24
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        >
          Ceramika
          <br />
          Sośnica
        </motion.h1>

        <motion.p
          className="lead"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
        >
          Od 1925 roku Cegielnia „Sośnica” znana jest jako producent najwyższej jakości
          ceramiki budowlanej. Cegła pełna, gotycka, klasztorna, ręcznie formowana oraz
          pustaki ścienne i wentylacyjne — produkowane ekologicznie z własnych złóż gliny.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
        >
          <a className="cta" href="#oferta">Zobacz pełną ofertę →</a>
          <a className="cta-ghost" href="#historia">Historia firmy</a>
        </motion.div>

        <motion.div
          className="hero-meta"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.55 }}
        >
          {stat.map((s) => (
            <div key={s.l}>
              <strong>{s.v}</strong>
              <span>{s.l}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="scroll-cue" aria-hidden>scroll</div>

      {introState === "playing" && <HeroIntro onComplete={handleIntroComplete} />}
    </section>
  );
};

export default Hero;
