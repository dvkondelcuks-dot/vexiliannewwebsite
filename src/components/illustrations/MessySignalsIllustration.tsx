export function MessySignalsIllustration() {
  return (
    <svg
      aria-label="Pieprasījumi no dažādiem kanāliem pazūd pirms rezervācijas"
      className="vx-svg-language home-illustration-svg"
      role="img"
      viewBox="0 0 560 420"
    >
      <title>Pieprasījumi no dažādiem kanāliem un pārtrūcis ceļš līdz rezervācijai</title>
      <rect className="home-svg-dark-sheet" height="390" rx="30" width="530" x="15" y="15" />

      <path
        className="home-svg-ink-line home-svg-ink-line--light home-svg-route-broken"
        d="M105 104 C158 132 192 142 234 176"
      />
      <path
        className="home-svg-ink-line home-svg-ink-line--light home-svg-route-broken"
        d="M452 96 C392 124 350 139 312 178"
      />
      <path
        className="home-svg-ink-line home-svg-ink-line--light home-svg-route-broken"
        d="M92 292 C144 252 184 230 236 218"
      />
      <path
        className="home-svg-ink-line home-svg-ink-line--light home-svg-route-broken"
        d="M455 286 C394 254 352 232 315 215"
      />

      <rect className="home-svg-sheet" height="136" rx="22" width="190" x="184" y="137" />
      <path className="home-svg-ink-line home-svg-ink-line--faint" d="M210 178 H348" />
      <path className="home-svg-ink-line home-svg-ink-line--faint" d="M210 215 H326" />
      <text className="home-illustration-text home-illustration-text--ink" x="214" y="174">
        Kur pazūd
      </text>
      <text className="home-illustration-text home-illustration-text--ink" x="214" y="199">
        rezervācija?
      </text>
      <text
        className="home-illustration-text home-illustration-text--muted-ink"
        x="214"
        y="239"
      >
        avots · statuss · solis
      </text>

      <SignalSlip note="jautāja par datumu" title="Instagram DM" x={44} y={54} />
      <SignalSlip note="apskatīja cenu" title="Booking pieprasījums" x={354} y={48} />
      <SignalSlip note="palika sarunā" title="Telefona zvans" x={45} y={260} />
      <SignalSlip note="nav nākamā soļa" title="E-pasts" x={363} y={258} />
      <SignalSlip note="kurš kanāls?" title="Mājaslapas forma" x={176} y={316} />

      <path
        className="home-svg-neon-line vx-path-draw"
        d="M300 268 C340 288 375 302 418 314"
      />
      <path className="home-svg-neon-line" d="M414 304 L428 318 L408 323" />
      <path
        className="home-svg-ink-line home-svg-ink-line--light home-svg-route-broken"
        d="M428 318 C456 328 480 326 507 312"
      />
      <circle className="home-svg-leak" cx="441" cy="318" r="20" />
      <text
        className="home-illustration-text home-illustration-text--note"
        textAnchor="middle"
        x="441"
        y="323"
      >
        pazūd šeit
      </text>
      <text className="home-illustration-text home-illustration-text--light" x="444" y="284">
        Rezervācija
      </text>
    </svg>
  );
}

function SignalSlip({
  note,
  title,
  x,
  y,
}: {
  note: string;
  title: string;
  x: number;
  y: number;
}) {
  return (
    <g>
      <rect className="home-svg-sheet" height="72" rx="16" width="154" x={x} y={y} />
      <text className="home-illustration-text home-illustration-text--ink" x={x + 15} y={y + 30}>
        {title}
      </text>
      <text
        className="home-illustration-text home-illustration-text--muted-ink"
        x={x + 15}
        y={y + 52}
      >
        {note}
      </text>
    </g>
  );
}
