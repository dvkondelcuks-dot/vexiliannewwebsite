import { Container } from "@/components/foundation";
import { homeCopy } from "@/content/home";

export function Footer() {
  return (
    <footer className="home-footer">
      <Container size="wide">
        <div className="home-footer__inner">
          <div className="vx-stack vx-stack--compact">
            <a className="home-brand" href="#top" aria-label="Vexilian sākums">
              Vexilian
            </a>
            <p>{homeCopy.footer}</p>
          </div>

          <nav aria-label="Kājenes saites" className="home-footer__links">
            <a href="#audits">Audits</a>
            <a href="mailto:hello@vexilian.com">Kontakti</a>
            <a href="#audits">Privātuma politika</a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
