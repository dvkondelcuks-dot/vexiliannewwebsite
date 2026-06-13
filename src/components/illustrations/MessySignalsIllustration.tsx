const signals = [
  { x: 22, y: 34, title: "Instagram DM", note: "jautāja par datumu" },
  { x: 206, y: 22, title: "Booking", note: "apskatīja cenu" },
  { x: 34, y: 148, title: "Telefona zvans", note: "palika sarunā" },
  { x: 218, y: 138, title: "E-pasts", note: "nav nākamā soļa" },
  { x: 122, y: 242, title: "Mājaslapas forma", note: "kurš kanāls?" },
] as const;

export function MessySignalsIllustration() {
  return (
    <svg
      aria-label="Pieprasījumi no dažādiem kanāliem pazūd pirms rezervācijas"
      className="vx-svg-language"
      role="img"
      viewBox="0 0 380 340"
    >
      <path
        className="vx-svg-line vx-svg-line--ink vx-svg-line--broken"
        d="M70 92 C118 126 143 126 177 143 C214 160 248 172 301 196"
      />
      <path
        className="vx-svg-line vx-svg-line--neon vx-path-draw"
        d="M87 251 C124 225 146 200 171 180"
      />
      <circle
        className="vx-svg-circle vx-svg-line--neon"
        cx="184"
        cy="166"
        r="54"
      />
      <text
        className="home-illustration-text home-illustration-text--note"
        x="139"
        y="157"
      >
        Kur pazuda
      </text>
      <text
        className="home-illustration-text home-illustration-text--note"
        x="145"
        y="174"
      >
        rezervācija?
      </text>

      {signals.map((signal) => (
        <g className="vx-float-gentle" key={signal.title}>
          <rect
            className="home-svg-card"
            height="60"
            rx="14"
            width="132"
            x={signal.x}
            y={signal.y}
          />
          <text className="home-illustration-text" x={signal.x + 14} y={signal.y + 25}>
            {signal.title}
          </text>
          <text
            className="home-illustration-text home-illustration-text--small"
            x={signal.x + 14}
            y={signal.y + 44}
          >
            {signal.note}
          </text>
        </g>
      ))}

      <path
        className="vx-svg-arrow vx-svg-line--ink"
        d="M255 217 C285 229 304 238 326 258"
      />
      <path className="vx-svg-arrow vx-svg-line--ink" d="M323 245 L329 260 L313 256" />
      <text className="home-illustration-text home-illustration-text--small" x="286" y="285">
        Rezervācija
      </text>
    </svg>
  );
}
