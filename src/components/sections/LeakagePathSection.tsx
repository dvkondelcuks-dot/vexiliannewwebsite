import { Container, SectionHeader, VisualFrame } from "@/components/foundation";
import { LeakagePathIllustration } from "@/components/illustrations/LeakagePathIllustration";
import { homeCopy } from "@/content/home";

export function LeakagePathSection() {
  const copy = homeCopy.leakagePath;

  return (
    <section className="vx-section vx-section--graphite home-section">
      <Container size="wide">
        <div className="vx-stack">
          <SectionHeader
            description={copy.description}
            eyebrow={copy.eyebrow}
            title={copy.title}
          />

          <VisualFrame className="home-visual-frame--diagram">
            <LeakagePathIllustration />
          </VisualFrame>

          <div className="home-card-list">
            {copy.stages.map((stage) => (
              <div className="home-dark-panel" key={stage.label}>
                <div className="vx-stack vx-stack--compact">
                  <span className="vx-chip vx-chip--status">{stage.label}</span>
                  <p>{stage.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
