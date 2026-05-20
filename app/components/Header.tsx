"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#cegielnia", label: "Cegielnia" },
  { href: "#sklad-opalu", label: "Skład opału" },
  { href: "#uslugi", label: "Usługi" },
  { href: "#historia", label: "Historia" },
  { href: "#kontakt", label: "Kontakt" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="header" data-scrolled={scrolled}>
      <a href="#top" className="brand" aria-label="Ceramika Sośnica">
        <span>Ceramika Sośnica</span>
        <small>od 1925</small>
      </a>
      <nav className="nav" aria-label="Menu główne">
        {links.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </nav>
      <a className="cta" href="mailto:biuro@cegielnia.com">
        biuro@cegielnia.com
      </a>
    </header>
  );
};

export default Header;
