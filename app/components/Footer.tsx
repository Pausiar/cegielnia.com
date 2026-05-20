import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="shell">
        <div className="row">
          <div>
            <strong style={{ color: "var(--ink)", fontWeight: 600 }}>Ceramika Sośnica Sp. z o.o.</strong>
            <p style={{ marginTop: "0.5rem" }}>
              <a
                href="https://www.google.com/maps/search/?api=1&query=So%C5%9Bnica%2024%2055-080%20K%C4%85ty%20Wroc%C5%82awskie"
                target="_blank"
                rel="noreferrer"
              >
                Sośnica 24, 55-080 Kąty Wrocławskie
              </a>
              <br />
              NIP 913-00-02-640 · REGON 931021211
            </p>
          </div>
          <nav className="footer-links" aria-label="Stopka">
            <a href="#cegielnia">Cegielnia</a>
            <a href="#sklad-opalu">Skład opału</a>
            <a href="#uslugi">Usługi</a>
            <a href="#historia">Historia</a>
            <a href="#kontakt">Kontakt</a>
            <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
            <Link href="/polityka-cookies">Polityka cookies</Link>
          </nav>
        </div>
        <div className="meta">
          <span>© {year} Ceramika Sośnica Sp. z o.o.</span>
          <span>Wszystkie prawa zastrzeżone.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
