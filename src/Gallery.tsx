import {
  MessySignalsIllustration,
  LeakagePathIllustration,
  OffSeasonCalendarIllustration,
  PlatformDependenceIllustration,
  OwnerControlBoardIllustration,
  FinalAuditNoteIllustration,
} from "./components/illustrations";
import { Container, SectionHeader, VisualFrame } from "./components/foundation";

const entries = [
  {
    id: "messy",
    eyebrow: "Hero · Section 1",
    title: "Messy signals",
    Illustration: MessySignalsIllustration,
    tone: "graphite" as const,
  },
  {
    id: "leakage",
    eyebrow: "Section 3",
    title: "Reservation leakage path",
    Illustration: LeakagePathIllustration,
    tone: "paper" as const,
  },
  {
    id: "calendar",
    eyebrow: "Section 4",
    title: "Off-season calendar",
    Illustration: OffSeasonCalendarIllustration,
    tone: "paper" as const,
  },
  {
    id: "platform",
    eyebrow: "Section 5",
    title: "Platform dependence",
    Illustration: PlatformDependenceIllustration,
    tone: "paper" as const,
  },
  {
    id: "board",
    eyebrow: "Section 7",
    title: "Owner control board",
    Illustration: OwnerControlBoardIllustration,
    tone: "graphite" as const,
  },
  {
    id: "audit",
    eyebrow: "Section 10",
    title: "Final audit note",
    Illustration: FinalAuditNoteIllustration,
    tone: "paper" as const,
  },
];

export default function Gallery() {
  return (
    <div className="vx-page-shell">
      <section className="vx-section vx-section--graphite">
        <Container>
          <SectionHeader
            eyebrow="Vexilian · illustration system"
            title="Custom hospitality field diagrams"
            description="Six section-specific SVG illustrations rebuilt as deliberate, hand-crafted commercial diagrams."
          />
        </Container>
      </section>

      {entries.map((e) => (
        <section
          key={e.id}
          id={e.id}
          className={`vx-section ${e.tone === "paper" ? "vx-section--paper" : "vx-section--graphite"}`}
        >
          <Container>
            <div className="vx-stack">
              <SectionHeader level="h3" eyebrow={e.eyebrow} title={e.title} />
              <VisualFrame tone={e.tone === "paper" ? "paper" : "graphite"}>
                <div className="vx-diagram-safe">
                  <e.Illustration />
                </div>
              </VisualFrame>
            </div>
          </Container>
        </section>
      ))}
    </div>
  );
}
