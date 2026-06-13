import { AnnotationLabel, Button, Container, SectionHeader, VisualFrame } from "@/components/foundation";
import { FinalAuditNoteIllustration } from "@/components/illustrations/FinalAuditNoteIllustration";
import { formFields, homeCopy } from "@/content/home";

export function FinalAuditSection() {
  const copy = homeCopy.finalAudit;

  return (
    <section className="vx-section vx-section--graphite home-section" id="audits">
      <Container size="wide">
        <div className="vx-layout-two vx-layout-two--balanced">
          <div className="vx-stack">
            <SectionHeader
              description={copy.description}
              eyebrow={copy.eyebrow}
              title={copy.title}
            />
            <p className="vx-lede">{copy.trust}</p>
            <VisualFrame className="home-visual-frame--diagram">
              <FinalAuditNoteIllustration />
            </VisualFrame>
          </div>

          <div className="home-form__panel">
            <form aria-describedby="static-form-note" className="home-form">
              <div className="vx-stack vx-stack--compact">
                <AnnotationLabel>diagnostikas pieteikums</AnnotationLabel>
                <p className="home-form-note">{copy.helper}</p>
              </div>

              <fieldset className="home-form-group">
                <legend className="sr-only">Svarīgākie audita lauki</legend>
                <div className="home-form-group__header">
                  <h3>Svarīgākā situācija</h3>
                  <p>Īsi dati, lai saprastu vietu, kanālus un galveno noplūdi.</p>
                </div>
                <div className="home-form-grid">
                  {formFields.required.map((label, index) => (
                    <Field
                      key={label}
                      label={label}
                      required
                      textarea={index === 5}
                    />
                  ))}
                </div>
              </fieldset>

              <fieldset className="home-form-group home-form-group--optional">
                <legend className="sr-only">Papildu konteksts</legend>
                <div className="home-form-group__header">
                  <h3>Papildu konteksts</h3>
                  <p>Var palīdzēt ātrāk saprast, vai auditam ir skaidrs potenciāls.</p>
                </div>
                <div className="home-form-grid">
                  <Field label={formFields.optional[0]} />
                  <Field label={formFields.optional[1]} />
                  <SelectField
                    label={formFields.optional[2]}
                    options={["Jā, sakārtoti", "Daļēji", "Nē", "Nezinu"]}
                  />
                  <SelectField
                    label={formFields.optional[3]}
                    options={["Jā, tas ir svarīgi", "Jā, bet nezinām, kā", "Daļēji", "Nezinu"]}
                  />
                  <SelectField
                    label={formFields.optional[4]}
                    options={["€100–€250", "€250–€500", "€500–€1,000", "€1,000+", "Grūti pateikt"]}
                  />
                </div>
              </fieldset>

              <label className="home-consent">
                <input type="checkbox" />
                <span>{copy.consent}</span>
              </label>

              <Button className="home-static-submit" disabled type="button">
                Pieteikt bezmaksas auditu
              </Button>
              <p className="home-form-note home-form__static-note" id="static-form-note">
                Statiskas formas priekšskatījums. Nosūtīšana vēl nav pieslēgta.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  required = false,
  textarea = false,
}: {
  label: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const id = label.toLowerCase().replaceAll(" ", "-").replaceAll("/", "");

  return (
    <div className={textarea ? "home-field home-field--wide" : "home-field"}>
      <label htmlFor={id}>
        {label}
        {required ? " *" : ""}
      </label>
      {textarea ? (
        <textarea id={id} placeholder="Īsi aprakstiet situāciju" />
      ) : (
        <input id={id} placeholder={required ? "Obligāts lauks" : "Nav obligāti"} type="text" />
      )}
    </div>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  const id = label.toLowerCase().replaceAll(" ", "-").replaceAll("/", "");

  return (
    <div className="home-field">
      <label htmlFor={id}>{label}</label>
      <select defaultValue="" id={id}>
        <option disabled value="">
          Izvēlieties, ja attiecas
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
