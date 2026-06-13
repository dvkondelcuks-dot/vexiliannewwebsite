import { AnnotationLabel, Container, SectionHeader, VisualFrame } from "@/components/foundation";
import { PlatformDependenceIllustration } from "@/components/illustrations/PlatformDependenceIllustration";
import { homeCopy } from "@/content/home";

export function PlatformReframeSection() {
  const copy = homeCopy.platform;

  return (
    <section className="vx-section vx-section--paper home-section home-section--paper" id="platformas">
      <Container size="wide">
        <div className="vx-layout-two vx-layout-two--balanced">
          <div className="vx-stack">
            <SectionHeader
              description={copy.description}
              eyebrow={copy.eyebrow}
              title={copy.title}
            />

            <PaperLikeReframe text={copy.reframe} />
          </div>

          <div className="vx-stack">
            <VisualFrame className="home-visual-frame--diagram" tone="paper">
              <PlatformDependenceIllustration />
            </VisualFrame>

            <ul className="home-question-list">
              {copy.questions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PaperLikeReframe({ text }: { text: string }) {
  return (
    <div className="vx-diagnostic-note vx-on-paper">
      <div className="vx-stack vx-stack--compact">
        <AnnotationLabel>noplūde pēc platformas</AnnotationLabel>
        <p className="vx-body">{text}</p>
      </div>
    </div>
  );
}
