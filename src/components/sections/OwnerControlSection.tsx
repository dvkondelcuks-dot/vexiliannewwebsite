import { AnnotationLabel, Container, SectionHeader, VisualFrame } from "@/components/foundation";
import { OwnerControlBoardIllustration } from "@/components/illustrations/OwnerControlBoardIllustration";
import { homeCopy } from "@/content/home";

export function OwnerControlSection() {
  const copy = homeCopy.ownerControl;

  return (
    <section className="vx-section vx-section--paper home-section home-section--paper">
      <Container size="wide">
        <div className="home-control-layout">
          <div className="vx-stack">
            <SectionHeader
              description={copy.description}
              eyebrow={copy.eyebrow}
              title={copy.title}
            />
            <AnnotationLabel badge>{copy.support}</AnnotationLabel>
          </div>

          <VisualFrame tone="paper">
            <OwnerControlBoardIllustration />
          </VisualFrame>
        </div>
      </Container>
    </section>
  );
}
