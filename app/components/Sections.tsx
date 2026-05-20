import Image from "next/image";
import Reveal from "./Reveal";
import { withBasePath } from "../lib/withBasePath";

const offer = [
  { num: "01", title: "Cegła pełna", desc: "Klasyczna cegła pełna formowana z własnej gliny." },
  { num: "02", title: "Płytki elewacyjne cięte", desc: "Plakietki licowe cięte z cegły — naturalna faktura ściany." },
  { num: "03", title: "Mączka ceglana", desc: "Drobno mielona cegła — korty tenisowe, stadiony i boiska." },
  { num: "04", title: "Mączka gliniana", desc: "Czysta glina mielona — zastosowania budowlane i sportowe." },
];

const history = [
  {
    head: "Lata czterdzieste XIX wieku — początki. ",
    body: "Inicjatorem powstania cegielni w Sośnicy był Eugen von Sauerma, brat Ksawerego. Po przeprowadzeniu badań geologicznych terenów pomiędzy Sośnicą a Krobielowicami uznał, że znajdująca się tam glina doskonale nadaje się do produkcji cegieł, i postanowił odkupić ziemię od swojego brata.",
  },
  {
    head: "Pierwsze umowy (1842–1843). ",
    body: "20 grudnia 1842 roku Eugen nabył grunt o powierzchni 99 mórg magdeburskich za 3000 talarów. Rok później, 17 maja 1843 roku, podpisano kolejną umowę, według której sprzedano mu 55 mórg ziemi za 2000 talarów. Wkrótce po zakupie rozpoczął budowę cegielni oraz wydobycie wysokiej jakości gliny.",
  },
  {
    head: "Rozruch zakładu (ok. 1850). ",
    body: "Nie zachowały się dokładne informacje dotyczące kosztów budowy, jednak przypuszcza się, że pierwszy rozruch cegielni mógł nastąpić około 1850 roku. Zakład wraz z kopalnią pozostawał własnością rodziny von Sauerma do 1888 roku.",
  },
  {
    head: "Kompleks przemysłowo-gospodarczy. ",
    body: "Cegielnia wyposażona była w duży okrągły piec do wypalania cegieł. Na terenie zakładu znajdowały się ponadto wiaty do suszenia gliny, dom mieszkalny dla majstra cegielnianego, stajnie dla koni, obora oraz niewielka stodoła — dobrze zorganizowany kompleks przemysłowo-gospodarczy.",
  },
  {
    head: "Kolej Wrocław–Świebodzice (1843). ",
    body: "Istotny wpływ na rozwój regionu miało otwarcie 28 października 1843 roku linii kolejowej Wrocław–Świebodzice. Mieszkańcy Sośnicy mogli korzystać ze stacji w Kątach oraz Sadkowicach. Jeszcze do 1856 roku towary przewożono furmankami do Wrocławia; dopiero w listopadzie tego roku odnotowano pierwszą wysyłkę nową linią kolejową.",
  },
  {
    head: "Odkrycie botaniczne. ",
    body: "W czasie wydobywania gliny, na głębokości około 25 stóp, odnaleziono liczne warstwy z doskonale zachowanymi odciskami liści, kwiatów i pąków. Znalezisko zainteresowało botanika Henryka Roberta Göpperta, który prowadził na miejscu badania i opisał wiele gatunków roślin Europy Środkowej.",
  },
];

const Sections = () => {
  return (
    <>
      {/* ---------- Cegielnia ---------- */}
      <section className="section" id="cegielnia">
        <div className="shell">
          <div className="kicker-row">
            <div>
              <Reveal>
                <span className="eyebrow">Cegielnia</span>
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
                Cegła pełna, płytki elewacyjne cięte oraz mączki — ceglana i gliniana.
                Każda partia kontrolowana, każdy wyrób z atestem.
              </p>
            </Reveal>
          </div>

          <div className="offer-grid">
            {offer.map((o, i) => (
              <Reveal key={o.num} delay={i * 0.05}>
                <article className="offer-card">
                  <span className="num">{o.num} / 04</span>
                  <h3 className="serif">{o.title}</h3>
                  <p style={{ marginTop: "0.75rem", color: "var(--ink-muted, #6b6f63)" }}>
                    {o.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Skład opału ---------- */}
      <section className="section dark" id="sklad-opalu">
        <div className="shell">
          <div className="split">
            <Reveal>
              <div className="image-frame">
                <Image
                  src={withBasePath("/img/img2.png")}
                  alt="Skład opału — Cegielnia Sośnica"
                  fill
                  sizes="(min-width: 880px) 50vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <span className="eyebrow">Skład opału</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="serif" style={{ margin: "1rem 0 1.5rem" }}>
                  Opał na sezon — zaufana jakość prosto z Sośnicy.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="lead">
                  Na terenie zakładu prowadzimy skład opału. Szczegółowa oferta oraz
                  cennik zostaną wkrótce uzupełnione — w sprawie dostępności i cen
                  prosimy o kontakt telefoniczny.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="chips" style={{ marginTop: "1.5rem" }}>
                  <span className="chip">opał</span>
                  <span className="chip">sprzedaż na miejscu</span>
                  <span className="chip">odbiór i dostawa</span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Usługi ---------- */}
      <section className="section" id="uslugi">
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
              <Reveal delay={0.1}>
                <article className="service-card">
                  <h3>Ładowarki kołowe</h3>
                  <p>
                    Świadczymy usługi ładowarkami kołowymi. Szczegółowy opis zakresu
                    prac oraz parametry maszyn zostaną wkrótce uzupełnione — w sprawie
                    wycen i dostępności prosimy o kontakt.
                  </p>
                  <div className="chips">
                    <span className="chip">ładowarki kołowe</span>
                    <span className="chip">prace ziemne</span>
                    <span className="chip">załadunek</span>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Historia ---------- */}
      <section className="section dark" id="historia">
        <div className="shell">
          <div className="kicker-row">
            <div>
              <Reveal>
                <span className="eyebrow">Historia cegielni w Sośnicy</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="serif" style={{ marginTop: "1rem" }}>
                  Od Eugena von Sauerma
                  <br />
                  do dzisiaj.
                </h2>
              </Reveal>
            </div>
          </div>

          <div className="split" style={{ marginTop: "3rem" }}>
            <div className="timeline">
              {history.map((t, i) => (
                <Reveal key={t.head} delay={i * 0.05}>
                  <p>
                    <strong>{t.head}</strong>
                    {t.body}
                  </p>
                </Reveal>
              ))}
              <Reveal delay={history.length * 0.05}>
                <p style={{ opacity: 0.7, fontStyle: "italic", marginTop: "1.5rem" }}>
                  Źródło: ks. Mieczysław Kogut, „Sośnica — Z dziejów wsi i katolickiej
                  parafii”, Wrocław 2009.
                </p>
              </Reveal>
            </div>
            <div className="gallery" style={{ marginTop: 0 }}>
              {[
                { src: "book1.png", alt: "Portada książki Sośnica" },
                { src: "book2.png", alt: "Strona tytułowa książki Sośnica" },
                { src: "img1.png", alt: "Realizacja cegielni Sośnica" },
                { src: "amek.jpg", alt: "Dawne zdjęcie z Sośnicy" },
                { src: "img2.png", alt: "Widok zakładu cegielni Sośnica" },
              ].map((image, i) => (
                <Reveal key={image.src} delay={i * 0.05}>
                  <div className="image-frame">
                    <Image
                      src={withBasePath(`/img/${image.src}`)}
                      alt={image.alt}
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
