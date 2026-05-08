"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const KEY = "cs-cookie-consent";

const CookieBanner = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.localStorage.getItem(KEY)) {
      // Defer to next tick to avoid hydration jank
      const id = window.setTimeout(() => setOpen(true), 600);
      return () => window.clearTimeout(id);
    }
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    try {
      window.localStorage.setItem(KEY, value);
    } catch {
      /* storage may be blocked */
    }
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          className="cookie"
          role="dialog"
          aria-label="Zgoda na pliki cookies"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <p>
            Używamy wyłącznie niezbędnych plików cookies oraz — za Twoją zgodą — plików
            analitycznych, aby ulepszać tę stronę. Szczegóły znajdziesz w{" "}
            <a href="/polityka-cookies">polityce cookies</a>.
          </p>
          <button className="reject" onClick={() => decide("rejected")}>
            Tylko niezbędne
          </button>
          <button className="accept" onClick={() => decide("accepted")}>
            Akceptuję
          </button>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
