export function PlatformDependenceIllustration() {
  return (
    <svg
      aria-label="Platformu redzamība pāriet īpašnieka klientu ceļā"
      className="vx-svg-language"
      role="img"
      viewBox="0 0 520 300"
    >
      <rect className="home-svg-card" height="210" rx="24" width="190" x="34" y="48" />
      <rect className="home-svg-card" height="210" rx="24" width="220" x="266" y="48" />

      <text className="home-illustration-text" x="62" y="86">
        Platformas
      </text>
      <text className="home-illustration-text home-illustration-text--small" x="62" y="108">
        redzamība
      </text>

      <text className="home-illustration-text" x="296" y="86">
        Jūsu klientu ceļš
      </text>
      <text className="home-illustration-text home-illustration-text--small" x="296" y="108">
        tiešā saziņa
      </text>

      <path
        className="vx-svg-line vx-svg-line--ink vx-svg-line--broken"
        d="M94 166 C158 134 202 140 234 156 C250 164 258 172 266 180"
      />
      <path
        className="vx-svg-line vx-svg-line--neon vx-path-draw"
        d="M282 180 C322 142 368 140 418 164 C446 178 454 205 440 230"
      />

      <circle className="vx-svg-circle vx-svg-line--ink" cx="94" cy="166" r="18" />
      <circle className="vx-svg-circle vx-svg-line--neon" cx="282" cy="180" r="18" />
      <circle className="vx-svg-circle vx-svg-line--neon" cx="440" cy="230" r="18" />

      <text className="home-illustration-text home-illustration-text--small" x="58" y="212">
        atrada jūs
      </text>
      <text
        className="home-illustration-text home-illustration-text--note"
        x="126"
        y="190"
      >
        vai varat uzrunāt vēlreiz?
      </text>
      <text className="home-illustration-text home-illustration-text--small" x="300" y="222">
        nākamais solis
      </text>
      <text
        className="home-illustration-text home-illustration-text--note"
        x="366"
        y="262"
      >
        atkārtots viesis
      </text>
    </svg>
  );
}
