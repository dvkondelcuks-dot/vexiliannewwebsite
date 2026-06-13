const cards = [
  { x: 54, y: 92, title: "Jauni pieprasījumi", note: "redzams" },
  { x: 248, y: 92, title: "Kam jāatbild šodien", note: "jārīkojas" },
  { x: 54, y: 176, title: "Avots", note: "no kura kanāla" },
  { x: 248, y: 176, title: "Vērtība", note: "prioritāte" },
  { x: 54, y: 260, title: "Statuss", note: "nepazūd" },
  { x: 248, y: 260, title: "Nākamais solis", note: "kam rakstīt" },
] as const;

export function OwnerControlBoardIllustration() {
  return (
    <svg
      aria-label="Īpašnieka skats ar pieprasījumu avotiem, statusu un nākamo soli"
      className="vx-svg-language home-illustration-svg"
      role="img"
      viewBox="0 0 520 420"
    >
      <title>Īpašnieka kontroles dēlis ar skaidriem nākamajiem soļiem</title>
      <rect className="home-svg-dark-sheet" height="390" rx="30" width="490" x="15" y="15" />
      <rect className="home-svg-sheet" height="340" rx="26" width="420" x="50" y="42" />
      <text className="home-illustration-text home-illustration-text--ink" x="78" y="76">
        Īpašnieka kontroles dēlis
      </text>
      <text
        className="home-illustration-text home-illustration-text--note"
        x="330"
        y="76"
      >
        mazāk minēšanas
      </text>

      {cards.map((card) => (
        <g key={card.title}>
          <rect
            fill="rgba(255, 255, 255, 0.38)"
            height="58"
            rx="14"
            stroke="rgba(10, 10, 10, 0.14)"
            width="168"
            x={card.x}
            y={card.y}
          />
          <circle className="home-svg-neon-fill" cx={card.x + 18} cy={card.y + 20} r="5" />
          <text
            className="home-illustration-text home-illustration-text--tiny home-illustration-text--ink"
            x={card.x + 32}
            y={card.y + 24}
          >
            {card.title}
          </text>
          <text
            className="home-illustration-text home-illustration-text--muted-ink"
            x={card.x + 32}
            y={card.y + 45}
          >
            {card.note}
          </text>
        </g>
      ))}

      <rect className="home-svg-sheet-soft" height="54" rx="16" width="168" x="152" y="334" />
      <text className="home-illustration-text home-illustration-text--ink" x="182" y="367">
        Atkārtotais viesis
      </text>
      <path
        className="home-svg-neon-line"
        d="M332 290 C328 328 292 348 320 360"
      />
      <path className="home-svg-neon-line" d="M310 350 L322 360 L306 368" />
      <text className="home-illustration-text home-illustration-text--note" x="334" y="356">
        nepazūd
      </text>
    </svg>
  );
}
