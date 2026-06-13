import {
  AnchorButton,
  Badge,
  Container,
  SectionHeader,
  VisualFrame,
} from "@/components/foundation";
import { MessySignalsIllustration } from "@/components/illustrations/MessySignalsIllustration";
import { homeCopy } from "@/content/home";

export function HeroSection() {
  const copy = homeCopy.hero;

  return (
    <section className="vx-section vx-section--graphite home-section home-hero" id="top">
      <Container size="wide">
        <div className="vx-layout-two">
          <div className="vx-stack">
            <SectionHeader
              description={copy.description}
              eyebrow={copy.eyebrow}
              level="h1"
              title={copy.title}
            />

            <div className="vx-cta-group">
              <AnchorButton fullMobile href="#audits">
                {copy.primaryCta}
              </AnchorButton>
              <AnchorButton fullMobile href="#noplude" variant="secondary">
                {copy.secondaryCta}
              </AnchorButton>
            </div>

            <p className="home-hero__trust">
              <span className="vx-leakage-marker" aria-hidden="true" />
              {copy.trust}
            </p>
          </div>

          <VisualFrame className="home-visual-frame--diagram">
            <Badge variant="audit">pieprasījumi no visām pusēm</Badge>
            <MessySignalsIllustration />
          </VisualFrame>
        </div>
      </Container>
    </section>
  );
}
