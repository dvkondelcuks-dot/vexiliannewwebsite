import type { SVGProps } from "react";

/**
 * Platform dependence comparison map. Left: Booking/Airbnb (plain text chips,
 * no logos) push visibility into a shared "Interese" node, then the line fades
 * — the guest is found but not re-reachable. Right: a neon owner-controlled path
 * continues into direct contact, follow-up, reservation and a repeat-guest loop.
 */
export function PlatformDependenceIllustration(props: SVGProps<SVGSVGElement>) {
  const { className, ...rest } = props;
  const wrapperClass = ["vx-illu", className].filter(Boolean).join(" ");

  return (
    <figure className={wrapperClass}>
      {/* ---------------------------- DESKTOP ---------------------------- */}
      <svg
        className="vx-illu__view vx-illu__view--desktop vx-svg-language"
        viewBox="0 0 780 480"
        role="img"
        aria-labelledby="plat-d-title plat-d-desc"
        {...rest}
      >
        <title id="plat-d-title">
          Salīdzinājuma karte: platformu redzamība pret īpašnieka klientu ceļu
        </title>
        <desc id="plat-d-desc">
          Kreisajā pusē Booking un Airbnb ieved interesi, bet pēc tam līnija
          izgaist. Labajā pusē neona ceļš turpinās caur tiešo saziņu, follow-up un
          rezervāciju ar atkārtota viesa cilpu.
        </desc>

        <rect x="20" y="22" width="740" height="436" rx="20" className="vi-paper" />
        <rect
          x="20"
          y="22"
          width="740"
          height="436"
          rx="20"
          className="vi-stroke vi-ink-faint"
          strokeWidth="1.4"
        />

        {/* divider */}
        <line
          x1="372"
          y1="58"
          x2="372"
          y2="424"
          className="vi-stroke vi-ink-soft"
          strokeWidth="1.6"
          strokeDasharray="3 7"
        />

        {/* side headers */}
        <text x="48" y="64" className="vi-label-quiet" fontSize="13" letterSpacing="0.08em">
          PLATFORMAS REDZAMĪBA
        </text>
        <text x="404" y="64" className="vi-label-quiet" fontSize="13" letterSpacing="0.08em">
          JŪSU KLIENTU CEĻŠ
        </text>

        {/* ---- left: platform chips ---- */}
        {[
          { y: 110, t: "Booking" },
          { y: 168, t: "Airbnb" },
        ].map((c) => (
          <g key={c.t} transform={`translate(56 ${c.y})`}>
            <rect width="132" height="42" rx="21" className="vi-card" />
            <rect width="132" height="42" rx="21" className="vi-stroke vi-ink" strokeWidth="2" />
            <circle cx="26" cy="21" r="6" className="vi-sand-fill" />
            <text x="44" y="26" className="vi-label" fontSize="14">
              {c.t}
            </text>
          </g>
        ))}

        {/* arrows chips -> Interese */}
        <path d="M188 132 C 232 150 248 176 268 196" className="vi-stroke vi-ink" strokeWidth="2.4" />
        <path d="M188 188 C 224 200 244 200 266 204" className="vi-stroke vi-ink" strokeWidth="2.4" />

        {/* Interese node (bridge, on divider side, left) */}
        <g transform="translate(300 210)">
          <rect x="-34" y="-26" width="120" height="52" rx="12" className="vi-card" />
          <rect x="-34" y="-26" width="120" height="52" rx="12" className="vi-stroke vi-ink" strokeWidth="2.4" />
          <text x="26" y="5" textAnchor="middle" className="vi-label" fontSize="15">
            Interese
          </text>
        </g>
        <text x="208" y="252" className="vi-hand-neon" fontSize="13">
          atrada jūs
        </text>

        {/* fade after interest (the leak) */}
        <path
          d="M300 246 C 296 300 290 330 286 356"
          className="vi-stroke vi-ink-soft vi-faded"
          strokeWidth="2.8"
        />
        <g transform="translate(232 360)">
          <rect width="160" height="46" rx="9" className="vi-card-tint" />
          <rect width="160" height="46" rx="9" className="vi-stroke vi-ink-soft" strokeWidth="1.4" strokeDasharray="5 5" />
          <text x="14" y="20" className="vi-label" fontSize="11.5">
            nav atgriezts
          </text>
          <text x="14" y="36" className="vi-text" fontSize="10.5" fill="rgba(10,10,10,0.66)">
            vai varat uzrunāt vēlreiz?
          </text>
        </g>

        {/* ---- right: owner-controlled neon path ---- */}
        {/* bridge from interest across divider into the owner path */}
        <path
          d="M386 200 C 410 168 430 156 452 150"
          className="vi-stroke vi-neon vi-draw"
          strokeWidth="2.8"
          style={{ ["--vi-len" as string]: 120 }}
        />

        {(() => {
          const nodes = [
            { x: 470, y: 150, t: "Tiešā saziņa" },
            { x: 568, y: 232, t: "Follow-up" },
            { x: 668, y: 158, t: "Rezervācija" },
          ];
          return (
            <>
              <path
                d="M470 150 C 520 168 540 210 566 228 C 600 252 628 196 666 162"
                className="vi-stroke vi-neon"
                strokeWidth="2.8"
              />
              {nodes.map((n) => (
                <g key={n.t} transform={`translate(${n.x} ${n.y})`}>
                  <rect x="-52" y="-20" width="104" height="40" rx="11" className="vi-neon-wash" />
                  <rect x="-52" y="-20" width="104" height="40" rx="11" className="vi-stroke vi-neon" strokeWidth="2.2" />
                  <text x="0" y="5" textAnchor="middle" className="vi-label" fontSize="12.5">
                    {n.t}
                  </text>
                </g>
              ))}
            </>
          );
        })()}
        <text x="470" y="120" textAnchor="middle" className="vi-hand-neon" fontSize="13">
          tiešais ceļš
        </text>

        {/* repeat-guest return loop */}
        <path
          d="M668 178 C 700 244 690 330 588 344 C 520 352 470 320 470 172"
          className="vi-stroke vi-neon vi-broken"
          strokeWidth="2.4"
        />
        <path d="M470 172 l-6 16 l-9 -13" className="vi-stroke vi-neon" strokeWidth="2.4" />
        <g transform="translate(556 330)">
          <rect x="-58" y="-18" width="116" height="38" rx="10" className="vi-card" />
          <rect x="-58" y="-18" width="116" height="38" rx="10" className="vi-stroke vi-ink" strokeWidth="2" />
          <text x="0" y="6" textAnchor="middle" className="vi-label" fontSize="12.5">
            Atkārtots viesis
          </text>
        </g>
      </svg>

      {/* ----------------------------- MOBILE ----------------------------- */}
      <svg
        className="vx-illu__view vx-illu__view--mobile vx-svg-language"
        viewBox="0 0 360 620"
        role="img"
        aria-labelledby="plat-m-title"
      >
        <title id="plat-m-title">
          Augšā platformu redzamība, kas izgaist pēc intereses; apakšā neona
          īpašnieka ceļš ar atkārtota viesa cilpu.
        </title>

        <rect x="12" y="14" width="336" height="592" rx="18" className="vi-paper" />
        <rect x="12" y="14" width="336" height="592" rx="18" className="vi-stroke vi-ink-faint" strokeWidth="1.4" />

        <line x1="30" y1="300" x2="330" y2="300" className="vi-stroke vi-ink-soft" strokeWidth="1.6" strokeDasharray="3 7" />

        <text x="30" y="52" className="vi-label-quiet" fontSize="12" letterSpacing="0.06em">
          PLATFORMAS REDZAMĪBA
        </text>

        {/* chips */}
        {[
          { x: 30, t: "Booking" },
          { x: 186, t: "Airbnb" },
        ].map((c) => (
          <g key={c.t} transform={`translate(${c.x} 70)`}>
            <rect width="140" height="42" rx="21" className="vi-card" />
            <rect width="140" height="42" rx="21" className="vi-stroke vi-ink" strokeWidth="2.2" />
            <circle cx="26" cy="21" r="6" className="vi-sand-fill" />
            <text x="44" y="27" className="vi-label" fontSize="14">
              {c.t}
            </text>
          </g>
        ))}

        {/* interese node */}
        <g transform="translate(180 160)">
          <rect x="-62" y="-22" width="124" height="44" rx="12" className="vi-card" />
          <rect x="-62" y="-22" width="124" height="44" rx="12" className="vi-stroke vi-ink" strokeWidth="2.4" />
          <text x="0" y="6" textAnchor="middle" className="vi-label" fontSize="15">
            Interese
          </text>
        </g>
        <path d="M86 112 C 130 130 150 130 156 142" className="vi-stroke vi-ink" strokeWidth="2.6" />
        <path d="M256 112 C 220 130 206 132 200 142" className="vi-stroke vi-ink" strokeWidth="2.6" />

        {/* fade */}
        <path d="M180 182 C 178 220 176 240 174 262" className="vi-stroke vi-ink-soft vi-faded" strokeWidth="3" />
        <text x="200" y="234" className="vi-hand-neon" fontSize="13">
          nav atgriezts
        </text>

        {/* owner path */}
        <text x="30" y="346" className="vi-label-quiet" fontSize="12" letterSpacing="0.06em">
          JŪSU KLIENTU CEĻŠ
        </text>
        {(() => {
          const nodes = [
            { y: 380, t: "Tiešā saziņa" },
            { y: 452, t: "Follow-up" },
            { y: 524, t: "Rezervācija" },
          ];
          return (
            <>
              <path d="M150 380 C 110 416 110 416 150 452 C 190 488 190 488 150 524" className="vi-stroke vi-neon" strokeWidth="3" />
              {nodes.map((n) => (
                <g key={n.t} transform={`translate(150 ${n.y})`}>
                  <rect x="-66" y="-20" width="132" height="40" rx="11" className="vi-neon-wash" />
                  <rect x="-66" y="-20" width="132" height="40" rx="11" className="vi-stroke vi-neon" strokeWidth="2.2" />
                  <text x="0" y="5" textAnchor="middle" className="vi-label" fontSize="14">
                    {n.t}
                  </text>
                </g>
              ))}
              <path d="M216 524 C 280 500 286 420 232 384" className="vi-stroke vi-neon vi-broken" strokeWidth="2.6" />
              <path d="M232 384 l-2 16 l-13 -8" className="vi-stroke vi-neon" strokeWidth="2.6" />
              <text x="262" y="460" textAnchor="middle" className="vi-hand-neon" fontSize="12.5" transform="rotate(90 262 460)">
                atkārtots viesis
              </text>
            </>
          );
        })()}
      </svg>
    </figure>
  );
}

export default PlatformDependenceIllustration;
