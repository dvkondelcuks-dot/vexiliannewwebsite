const cards = [
  { x: 34, y: 42, title: "Jauni pieprasījumi", value: "4 šonedēļ" },
  { x: 222, y: 42, title: "Kam jāatbild šodien", value: "2 interesenti" },
  { x: 34, y: 130, title: "Avots", value: "Instagram / Booking" },
  { x: 222, y: 130, title: "Vērtība", value: "potenciāla rezervācija" },
  { x: 34, y: 218, title: "Statuss", value: "gaida lēmumu" },
  { x: 222, y: 218, title: "Nākamais solis", value: "rakstīt rīt" },
] as const;

export function OwnerControlBoardIllustration() {
  return (
    <svg
      aria-label="Īpašnieka skats ar pieprasījumu avotiem, statusu un nākamo soli"
      className="vx-svg-language"
      role="img"
      viewBox="0 0 430 330"
    >
      <rect className="home-svg-card" height="292" rx="28" width="372" x="28" y="20" />
      <text className="home-illustration-text" x="52" y="48">
        Īpašnieka skats
      </text>
      <text
        className="home-illustration-text home-illustration-text--note"
        x="252"
        y="48"
      >
        mazāk minēšanas
      </text>

      {cards.map((card, index) => (
        <g key={card.title}>
          <rect
            fill={index === 5 ? "rgba(208, 255, 0, 0.18)" : "rgba(255, 255, 255, 0.42)"}
            height="64"
            rx="15"
            stroke="rgba(10, 10, 10, 0.14)"
            width="154"
            x={card.x}
            y={card.y}
          />
          <text
            className="home-illustration-text home-illustration-text--small"
            x={card.x + 14}
            y={card.y + 25}
          >
            {card.title}
          </text>
          <text
            className={
              index === 5
                ? "home-illustration-text home-illustration-text--note"
                : "home-illustration-text home-illustration-text--small"
            }
            x={card.x + 14}
            y={card.y + 47}
          >
            {card.value}
          </text>
        </g>
      ))}

      <path
        className="vx-svg-line vx-svg-line--neon"
        d="M92 282 C128 300 184 300 236 282"
      />
    </svg>
  );
}
