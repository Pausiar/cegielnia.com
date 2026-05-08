import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description:
    "Informacje o przetwarzaniu danych osobowych przez Ceramika Sośnica Sp. z o.o. zgodnie z RODO.",
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="legal">
        <div className="shell">
          <h1>Polityka prywatności</h1>
          <p>
            Niniejsza polityka prywatności określa zasady przetwarzania danych osobowych
            w związku z korzystaniem ze strony internetowej{" "}
            <a href="https://cegielnia.com">cegielnia.com</a> (dalej: „Serwis”) oraz
            kontaktem z Ceramika Sośnica Sp. z o.o.
          </p>

          <h2>1. Administrator danych</h2>
          <p>
            Administratorem Twoich danych osobowych jest <strong>Ceramika Sośnica Sp. z o.o.</strong>,
            Sośnica 24, 55-080 Kąty Wrocławskie, NIP 913-00-02-640, REGON 931021211
            (dalej: „Administrator”).
          </p>
          <p>
            Kontakt w sprawach związanych z ochroną danych:{" "}
            <a href="mailto:biuro@cegielnia.com">biuro@cegielnia.com</a>, tel.{" "}
            <a href="tel:+48713166954">+48 (71) 316 69 54</a>.
          </p>

          <h2>2. Inspektor Ochrony Danych</h2>
          <p>
            Administrator nie powołał Inspektora Ochrony Danych. We wszystkich sprawach
            dotyczących przetwarzania danych prosimy o kontakt na adres podany powyżej.
            <br />
            <em>[UZUPEŁNIĆ jeśli IOD został powołany]</em>
          </p>

          <h2>3. Cele i podstawy prawne przetwarzania</h2>
          <ul>
            <li>
              <strong>Kontakt i obsługa zapytań</strong> — art. 6 ust. 1 lit. b oraz lit. f
              RODO (działania przed zawarciem umowy oraz prawnie uzasadniony interes
              Administratora w postaci udzielania odpowiedzi na zapytania).
            </li>
            <li>
              <strong>Realizacja zamówień i umów</strong> — art. 6 ust. 1 lit. b RODO
              (wykonanie umowy).
            </li>
            <li>
              <strong>Obowiązki podatkowe i rachunkowe</strong> — art. 6 ust. 1 lit. c RODO.
            </li>
            <li>
              <strong>Statystyki i analityka strony</strong> — art. 6 ust. 1 lit. a RODO
              (zgoda wyrażana poprzez baner cookies).
            </li>
            <li>
              <strong>Dochodzenie lub obrona roszczeń</strong> — art. 6 ust. 1 lit. f RODO.
            </li>
          </ul>

          <h2>4. Okres przechowywania danych</h2>
          <p>
            Dane przechowujemy przez okres niezbędny do realizacji celu przetwarzania,
            a następnie przez okres wynikający z przepisów prawa (m.in. Ordynacja
            podatkowa — 5 lat) lub do upływu okresu przedawnienia roszczeń.
          </p>

          <h2>5. Odbiorcy danych</h2>
          <p>
            Odbiorcami danych mogą być: dostawcy usług IT i hostingu, biuro rachunkowe,
            firmy kurierskie i transportowe, kancelarie prawne oraz organy uprawnione na
            podstawie przepisów prawa. <em>[UZUPEŁNIĆ pełną listą podmiotów przetwarzających]</em>
          </p>

          <h2>6. Przekazywanie danych poza EOG</h2>
          <p>
            Dane co do zasady nie są przekazywane poza Europejski Obszar Gospodarczy.
            W przypadku korzystania z dostawców spoza EOG (np. analityka), przekazanie
            odbywa się na podstawie standardowych klauzul umownych zatwierdzonych przez
            Komisję Europejską.
          </p>

          <h2>7. Twoje prawa</h2>
          <ul>
            <li>prawo dostępu do danych oraz otrzymania ich kopii,</li>
            <li>prawo do sprostowania (poprawiania) danych,</li>
            <li>prawo do usunięcia danych („prawo do bycia zapomnianym”),</li>
            <li>prawo do ograniczenia przetwarzania,</li>
            <li>prawo do przenoszenia danych,</li>
            <li>prawo do sprzeciwu wobec przetwarzania,</li>
            <li>prawo do cofnięcia zgody w dowolnym momencie,</li>
            <li>
              prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych
              (ul. Stawki 2, 00-193 Warszawa).
            </li>
          </ul>

          <h2>8. Dobrowolność podania danych</h2>
          <p>
            Podanie danych jest dobrowolne, lecz niezbędne do udzielenia odpowiedzi na
            zapytanie lub realizacji zamówienia.
          </p>

          <h2>9. Zmiany polityki</h2>
          <p>
            Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej
            polityce. Aktualna wersja jest publikowana w Serwisie. Data ostatniej
            aktualizacji: <em>[UZUPEŁNIĆ]</em>.
          </p>

          <a className="back-link" href="/">← Wróć na stronę główną</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
