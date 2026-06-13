import {
  AnchorButton,
  AnnotationLabel,
  Badge,
  Button,
  Container,
  PaperPanel,
  SectionHeader,
  VisualFrame,
} from "./components/foundation";

/**
 * Design-foundation showcase page.
 *
 * This is a development harness that renders the existing Vexilian design
 * primitives and CSS tokens so the foundation can be viewed in a browser.
 * It is intentionally not the final marketing landing page (see docs/).
 */
export function App() {
  return (
    <div className="vx-page-shell">
      <section className="vx-section vx-section--graphite">
        <Container className="vx-stack">
          <SectionHeader
            eyebrow="Vexilian · Design Foundation"
            title="Rezervāciju noplūdes sistēma"
            description="Šī lapa demonstrē dizaina pamatu primitīvus un CSS marķierus izstrādes vidē."
            level="h1"
          >
            <div className="vx-cta-group">
              <Button variant="primary">Pieteikt bezmaksas auditu</Button>
              <AnchorButton href="#piemeri" variant="secondary">
                Apskatīt noplūdes piemērus
              </AnchorButton>
              <Button variant="quiet">Klusais skats</Button>
            </div>
          </SectionHeader>

          <div className="vx-cta-group">
            <Badge>Dizaina pamats</Badge>
            <Badge variant="audit">Audita statuss</Badge>
            <AnnotationLabel>pazūd šeit</AnnotationLabel>
            <AnnotationLabel badge>nav follow-up</AnnotationLabel>
          </div>
        </Container>
      </section>

      <section className="vx-section vx-section--paper" id="piemeri">
        <Container className="vx-stack">
          <SectionHeader
            eyebrow="Komponenšu paraugi"
            title="Paneļi un vizuālie rāmji"
            description="Warm paper paneļi un grafīta vizuālie rāmji izmanto kopīgos dizaina marķierus."
          />
          <div className="vx-layout-two">
            <PaperPanel>
              <h3 className="vx-heading-md">Īpašnieka skats</h3>
              <p className="vx-body">
                No kura kanāla cilvēks atnāca un kam jāraksta tālāk — viss vienā
                skaidrā skatā.
              </p>
              <div className="vx-cta-group">
                <span className="vx-chip vx-chip--source">Instagram DM</span>
                <span className="vx-chip vx-chip--status">Jauns</span>
                <span className="vx-chip vx-chip--next-step">Sekot līdzi</span>
              </div>
            </PaperPanel>
            <VisualFrame>
              <h3 className="vx-heading-md">Pieprasījumu ceļš</h3>
              <p className="vx-body vx-muted">
                Ceļš no intereses līdz rezervācijai — ar noplūdes marķieri.
              </p>
              <span className="vx-leakage-marker" aria-hidden="true" />
            </VisualFrame>
          </div>
        </Container>
      </section>
    </div>
  );
}
