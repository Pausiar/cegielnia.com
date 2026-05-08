import Image from "next/image";
import Reveal from "./Reveal";
import { withBasePath } from "../lib/withBasePath";

const offer = [
  { num: "01", title: "Cegła pełna" },
  { num: "02", title: "Cegła gotycka" },
  { num: "03", title: "Cegła klasztorna" },
  { num: "04", title: "Cegła ręcznie formowana" },
  { num: "05", title: "Pustaki ścienne i wentylacyjne" },
];

const timeline = [
  {
    head: "1925 — początek tradycji",
    body: "Od 1925 roku Cegielnia „Sośnica” znana jest jako producent najwyższej jakości ceramiki budowlanej.",
  },
  {
    head: "Indywidualne realizacje",
    body: "Zgodnie z życzeniami klientów poszerzamy nasz asortyment o cegłę licową oraz inne wyroby na indywidualne zamówienie. Produkcja oparta jest na własnych złożach gliny.",
  },
  {
    head: "Dolny Śląsk i Zamek Królewski",
    body: "Z Sośnicy pochodzą cegły na budowę domów, kościołów i innych budynków na terenie całego Dolnego Śląska. Można je równocześnie spotkać w murach odbudowanego Zamku Królewskiego.",
  },
  {
    head: "Ekologia i atest",
    body: "Tradycja zobowiązuje — wszystkie nasze wyroby produkowane są ekologicznie i posiadają atest.",
  },
];

const Sections = () => {
  return (
    <>
      {/* ---------- Oferta ---------- */}
      <section className="section" id="oferta">
        <div className="shell">
          <div className="kicker-row">
            <div>
              <Reveal>
                <span className="eyebrow">Oferta</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="serif" style={{ marginTop: "1rem" }}>
                  Ceramika budowlana
                  <br />
                  o precyzji manufaktury.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <p className="lead">
                Cegła pełna, gotycka, klasztorna, ręcznie formowana oraz pustaki ścienne i
                wentylacyjne. Każda partia kontrolowana, każdy wyrób z atestem.
              </p>
            </Reveal>
          </div>

          <div className="offer-grid">
            {offer.map((o, i) => (
              <Reveal key={o.num} delay={i * 0.05}>
                <article className="offer-card">
                  <span className="num">{o.num} / 05</span>
                  <h3 className="serif">{o.title}</h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Proces ---------- */}
      <section className="section dark" id="proces">
        <div className="shell">
          <div className="split">
            <Reveal>
              <div className="image-frame">
                <Image
                  src={withBasePath("/img/cegielnia02.jpg")}
                  alt="Cegielnia Sośnica — zakład produkcyjny"
                  fill
                  sizes="(min-width: 880px) 50vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <span className="eyebrow">Proces</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="serif" style={{ margin: "1rem 0 1.5rem" }}>
                  Złoża gliny, rzemiosło i przemysłowa powtarzalność.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="lead">
                  Produkcja oparta jest na własnych złożach gliny. Zgodnie z życzeniami
                  klientów poszerzamy obecnie asortyment o cegłę licową oraz inne wyroby
                  na indywidualne zamówienie.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="chips" style={{ marginTop: "1.5rem" }}>
                  <span className="chip">własne złoża</span>
                  <span className="chip">wyroby ekologiczne</span>
                  <span className="chip">materiał atestowany</span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Historia ---------- */}
      <section className="section" id="historia">
        <div className="shell">
          <div className="kicker-row">
            <div>
              <Reveal>
                <span className="eyebrow">Historia firmy</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="serif" style={{ marginTop: "1rem" }}>
                  Od Dolnego Śląska
                  <br />
                  po mury Zamku Królewskiego.
                </h2>
              </Reveal>
            </div>
          </div>

          <div className="split" style={{ marginTop: "3rem" }}>
            <div className="timeline">
              {timeline.map((t, i) => (
                <Reveal key={t.head} delay={i * 0.05}>
                  <p>
                    <strong>{t.head}</strong>
                    {t.body}
                  </p>
                </Reveal>
              ))}
            </div>
            <div className="gallery" style={{ marginTop: 0 }}>
              {["amek.jpg", "cegielnia01.jpg", "cegielnia02.jpg"].map((src, i) => (
                <Reveal key={src} delay={i * 0.05}>
                  <div className="image-frame">
                    <Image
                      src={withBasePath(`/img/${src}`)}
                      alt="Realizacje z ceramiką Sośnica"
                      fill
                      sizes="(min-width: 880px) 25vw, 50vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Transport / Usługi ---------- */}
      <section className="section dark" id="transport">
        <div className="shell">
          <div className="split">
            <div>
              <Reveal>
                <span className="eyebrow">Usługi</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="serif" style={{ margin: "1rem 0 1.5rem" }}>
                  Ekologia, transport i pewna obsługa zleceń.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="lead">
                  W celu zapewnienia kompleksowej obsługi naszym klientom oraz zachowania
                  najwyższych standardów rozwinęliśmy firmę o kolejne działy.
                </p>
              </Reveal>
            </div>
            <div className="service-stack">
              <Reveal>
                <article className="service-card">
                  <h3>Rekultywacja i utylizacja</h3>
                  <p>
                    Odbieramy odpady i utylizujemy je poprzez rekultywację terenów
                    niekorzystnie przekształconych. Dzięki tej działalności coraz mniej
                    odpadów trafia do lasów i na dzikie wysypiska. W trosce o przyszłe
                    pokolenia warto powierzyć je firmie, która zgodnie z prawem je
                    zutylizuje.
                  </p>
                  <div className="chips">
                    <span className="chip">rekultywacja</span>
                    <span className="chip">utylizacja</span>
                    <span className="chip">ekologia</span>
                  </div>
                </article>
              </Reveal>
              <Reveal delay={0.05}>
                <article className="service-card">
                  <h3>Usługi transportowe</h3>
                  <p>
                    Stale rozwijamy dział transportu. Dysponujemy specjalistyczną flotą:
                    ciągnikami siodłowymi i naczepami WALKING FLOOR przystosowanymi do
                    ładunków przestrzennych — odpadów, glin czy mączek ceglanych.
                    Zaopatrujemy korty tenisowe, stadiony żużlowe oraz boiska baseballowe.
                    Posiadamy także samochody ciężarowe z HDS (19 i 6 paletowe).
                  </p>
                  <div className="chips">
                    <span className="chip">walking floor</span>
                    <span className="chip">HDS</span>
                    <span className="chip">materiały budowlane</span>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Kontakt ---------- */}
      <section className="section cream" id="kontakt">
        <div className="shell">
          <div className="contact-grid">
            <div>
              <Reveal>
                <span className="eyebrow">Kontakt</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="serif" style={{ margin: "1rem 0 1.5rem" }}>
                  Ceramika Sośnica
                  <br />
                  Sp. z o.o.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="lead" style={{ color: "#4a4e44" }}>
                  Sośnica 24, 55-080 Kąty Wrocławskie
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="hero-actions" style={{ marginTop: "2rem" }}>
                  <a className="cta" href="mailto:biuro@cegielnia.com">Napisz e-mail</a>
                  <a
                    className="cta-ghost"
                    href="tel:+48713166954"
                    style={{ color: "#1a1c17", borderColor: "rgba(0,0,0,0.18)" }}
                  >
                    +48 (71) 316 69 54
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <aside
                className="contact-card"
                style={{
                  background: "rgba(0,0,0,0.04)",
                  borderColor: "rgba(0,0,0,0.08)",
                  color: "#1a1c17",
                }}
              >
                <dl>
                  <div><dt>NIP</dt><dd>913-00-02-640</dd></div>
                  <div><dt>REGON</dt><dd>931021211</dd></div>
                  <div><dt>tel</dt><dd><a href="tel:+48713166954" style={{ color: "#1a1c17" }}>+48 (71) 316 69 54</a></dd></div>
                  <div><dt>mobile</dt><dd><a href="tel:+48601079205" style={{ color: "#1a1c17" }}>+48 601 079 205</a></dd></div>
                  <div><dt>fax</dt><dd>+48 (71) 316 78 89</dd></div>
                  <div><dt>e-mail</dt><dd><a href="mailto:biuro@cegielnia.com" style={{ color: "#1a1c17" }}>biuro@cegielnia.com</a></dd></div>
                </dl>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sections;
