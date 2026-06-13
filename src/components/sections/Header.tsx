import { AnchorButton, Container } from "@/components/foundation";
import { navItems } from "@/content/home";

export function Header() {
  return (
    <header className="home-header">
      <Container size="wide">
        <div className="home-header__inner">
          <a className="home-brand" href="#top" aria-label="Vexilian sākums">
            Vexilian
          </a>

          <nav aria-label="Galvenā navigācija" className="home-nav">
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="home-header__cta">
            <AnchorButton href="#audits" variant="secondary">
              Noskaidrot noplūdi
            </AnchorButton>
          </div>
        </div>
      </Container>
    </header>
  );
}
