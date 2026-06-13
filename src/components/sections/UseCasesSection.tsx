import { AnnotationLabel, Container, PaperPanel, SectionHeader } from "@/components/foundation";
import { homeCopy } from "@/content/home";

export function UseCasesSection() {
  const copy = homeCopy.useCases;

  return (
    <section className="vx-section vx-section--paper home-section home-section--paper" id="kam-tas-der">
      <Container size="wide">
        <div className="vx-stack">
          <SectionHeader
            description={copy.intro}
            eyebrow={copy.eyebrow}
            title={copy.title}
          />

          <div className="vx-card-grid">
            {copy.cards.map((card, index) => (
              <PaperPanel className="home-use-card" key={card.title}>
                <AnnotationLabel>{String(index + 1).padStart(2, "0")}</AnnotationLabel>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <p className="home-use-card__visible">{card.visible}</p>
              </PaperPanel>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
