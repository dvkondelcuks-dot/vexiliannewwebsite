import { AnnotationLabel, Container, SectionHeader } from "@/components/foundation";
import { homeCopy } from "@/content/home";

export function PricingSelectivitySection() {
  const copy = homeCopy.pricing;

  return (
    <section className="vx-section vx-section--graphite home-section">
      <Container size="wide">
        <div className="vx-stack">
          <SectionHeader
            description={copy.description}
            eyebrow={copy.eyebrow}
            title={copy.title}
          />

          <div className="home-pricing-grid">
            {copy.items.map((item) => (
              <article className="home-price-card vx-stack vx-stack--compact" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <AnnotationLabel badge>{copy.note}</AnnotationLabel>
        </div>
      </Container>
    </section>
  );
}
