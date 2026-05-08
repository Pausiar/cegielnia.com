import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Polityka cookies",
  description:
    "Informacja o plikach cookies wykorzystywanych w serwisie Ceramika Sośnica.",
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="legal">
        <div className="shell">
          <h1>Polityka plików cookies</h1>
          <p>
            Serwis <a href="https://cegielnia.com">cegielnia.com</a> wykorzystuje pliki
            cookies (tzw. „ciasteczka”), czyli niewielkie pliki tekstowe zapisywane na
            urządzeniu końcowym Użytkownika.
          </p>

          <h2>1. Rodzaje wykorzystywanych cookies</h2>
          <ul>
            <li>
              <strong>Niezbędne</strong> — konieczne do prawidłowego funkcjonowania
              Serwisu, m.in. zapamiętanie wyboru w banerze zgody. Nie wymagają zgody
              Użytkownika (art. 173 ust. 3 Prawa telekomunikacyjnego).
            </li>
            <li>
              <strong>Analityczne</strong> — pomagają zrozumieć, jak Użytkownicy korzystają
              z Serwisu. Wymagają zgody. <em>[UZUPEŁNIĆ jeśli używany jest np. Google Analytics, Plausible]</em>
            </li>
            <li>
              <strong>Marketingowe</strong> — obecnie nie wykorzystujemy.
            </li>
          </ul>

          <h2>2. Zarządzanie zgodą</h2>
          <p>
            Zgodę na cookies analityczne możesz wyrazić lub cofnąć w dowolnym momencie
            poprzez baner zgody widoczny na stronie głównej, a także poprzez ustawienia
            swojej przeglądarki. Wycofanie zgody nie wpływa na zgodność z prawem
            przetwarzania, którego dokonano na podstawie zgody przed jej wycofaniem.
          </p>

          <h2>3. Zarządzanie cookies w przeglądarce</h2>
          <p>
            Większość przeglądarek pozwala na zarządzanie cookies w ustawieniach.
            Instrukcje:
          </p>
          <ul>
            <li>
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer">
                Google Chrome
              </a>
            </li>
            <li>
              <a href="https://support.mozilla.org/pl/kb/ciasteczka" target="_blank" rel="noreferrer">
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer">
                Safari
              </a>
            </li>
            <li>
              <a href="https://support.microsoft.com/pl-pl/microsoft-edge" target="_blank" rel="noreferrer">
                Microsoft Edge
              </a>
            </li>
          </ul>

          <h2>4. Podmioty zewnętrzne</h2>
          <p>
            <em>
              [UZUPEŁNIĆ — np. „W ramach analityki korzystamy z Google Analytics
              dostarczanego przez Google Ireland Limited. Szczegóły:
              policies.google.com/privacy.”]
            </em>
          </p>

          <h2>5. Kontakt</h2>
          <p>
            Pytania dotyczące cookies kierować można na adres{" "}
            <a href="mailto:biuro@cegielnia.com">biuro@cegielnia.com</a>.
          </p>

          <a className="back-link" href="/">← Wróć na stronę główną</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
