import { AnnotationLabel, Container, PaperPanel, SectionHeader } from "@/components/foundation";
import { homeCopy } from "@/content/home";

export function RequestIsNotReservationSection() {
  const copy = homeCopy.leakageRecognition;

  return (
    <section className="vx-section vx-section--paper home-section home-section--paper" id="noplude">
      <Container size="wide">
        <div className="vx-stack">
          <SectionHeader
            description={copy.description}
            eyebrow={copy.eyebrow}
            title={copy.title}
          >
            <p className="vx-body">{copy.support}</p>
          </SectionHeader>

          <div className="home-card-list">
            {copy.cards.map((card, index) => (
              <PaperPanel className="home-mini-card" key={card.title}>
                <div className="vx-stack vx-stack--compact">
                  <AnnotationLabel>{String(index + 1).padStart(2, "0")}</AnnotationLabel>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </PaperPanel>
            ))}
          </div>

          <AnnotationLabel badge>{copy.microCta}</AnnotationLabel>
        </div>
      </Container>
    </section>
  );
}
