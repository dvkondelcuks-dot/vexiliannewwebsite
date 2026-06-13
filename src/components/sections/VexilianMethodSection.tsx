import { AnchorButton, Container, SectionHeader } from "@/components/foundation";
import { homeCopy } from "@/content/home";

export function VexilianMethodSection() {
  const copy = homeCopy.method;

  return (
    <section className="vx-section vx-section--graphite home-section" id="metode">
      <Container size="wide">
        <div className="vx-stack">
          <div className="vx-layout-two vx-layout-two--balanced">
            <SectionHeader eyebrow={copy.eyebrow} title={copy.title} />
            <div className="vx-stack">
              <p className="vx-lede">{copy.intro}</p>
              <div className="vx-cta-group">
                <AnchorButton href="#audits" variant="secondary">
                  Noskaidrojiet, kur jums pazūd klienti
                </AnchorButton>
              </div>
            </div>
          </div>

          <div className="home-method-grid">
            {copy.steps.map((step, index) => (
              <article className="home-method-card vx-stack vx-stack--compact" key={step.title}>
                <span className="home-method-card__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p className="vx-body">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
