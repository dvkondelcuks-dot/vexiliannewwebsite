import {
  AnnotationLabel,
  Badge,
  Button,
  Container,
  PaperPanel,
  SectionHeader,
  VisualFrame,
} from "@/components/foundation";

export default function Page() {
  return (
    <main className="vx-page-shell">
      <section className="vx-section vx-section--graphite">
        <Container size="wide">
          <div className="vx-layout-two">
            <div className="vx-stack">
              <Badge variant="audit">Vexilian foundation test</Badge>
              <SectionHeader
                eyebrow="Pamata pārbaude"
                level="h1"
                title="Dizaina pamats"
                description="Īss skats, lai pārbaudītu Vexilian grafīta, papīra un anotāciju sistēmu pirms īstās lapas sadaļām."
              />
              <div className="vx-cta-group">
                <Button fullMobile>Pārbaudīt skatu</Button>
              </div>
            </div>

            <VisualFrame>
              <div className="vx-stack">
                <AnnotationLabel badge>kur pazūd?</AnnotationLabel>
                <svg
                  aria-label="Pamata vizuālās līnijas pārbaude"
                  className="vx-svg-language"
                  role="img"
                  viewBox="0 0 360 170"
                >
                  <path
                    className="vx-svg-line vx-svg-line--ink vx-svg-line--broken"
                    d="M28 92 C84 34 136 138 188 78 S284 42 328 106"
                  />
                  <path
                    className="vx-svg-line vx-svg-line--neon"
                    d="M34 126 C96 112 142 114 196 98"
                  />
                  <circle
                    className="vx-svg-circle vx-svg-line--neon"
                    cx="214"
                    cy="91"
                    r="14"
                  />
                </svg>
              </div>
            </VisualFrame>
          </div>

          <div className="vx-stack" style={{ marginTop: "var(--vx-space-8)" }}>
            <PaperPanel>
              <div className="vx-stack vx-stack--compact">
                <AnnotationLabel>piezīme</AnnotationLabel>
                <h2 className="vx-heading-md">Silts papīra panelis</h2>
                <p className="vx-body">
                  Šis ir tikai pamata primitīvu pārbaudes bloks. Īstās sākumlapas
                  sadaļas vēl netiek būvētas.
                </p>
              </div>
            </PaperPanel>
          </div>
        </Container>
      </section>
    </main>
  );
}
