import { AnnotationLabel, Container, SectionHeader, VisualFrame } from "@/components/foundation";
import { OffSeasonCalendarIllustration } from "@/components/illustrations/OffSeasonCalendarIllustration";
import { homeCopy } from "@/content/home";

export function OffSeasonSection() {
  const copy = homeCopy.offSeason;

  return (
    <section
      className="vx-section vx-section--graphite home-section"
      id="klusie-menesi"
    >
      <Container size="wide">
        <div className="vx-layout-two vx-layout-two--balanced">
          <div className="vx-stack">
            <SectionHeader
              description={copy.description}
              eyebrow={copy.eyebrow}
              title={copy.title}
            />

            <div className="home-dark-panel">
              <p>{copy.intro}</p>
            </div>

            <ul className="home-question-list">
              {copy.questions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>

            <AnnotationLabel badge>{copy.microCta}</AnnotationLabel>
          </div>

          <VisualFrame>
            <OffSeasonCalendarIllustration />
          </VisualFrame>
        </div>
      </Container>
    </section>
  );
}
