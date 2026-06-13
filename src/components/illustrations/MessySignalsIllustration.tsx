import type { SVGProps } from "react";

/**
 * Hero diagnostic board: five visually distinct incoming signals pinned to a
 * warm-paper sheet, arrows converging on a central "Rezervācija" target. Most
 * paths break (one is hand-circled "pazūd šeit"); a single neon path is the
 * corrected route that actually lands the booking.
 */
export function MessySignalsIllustration(props: SVGProps<SVGSVGElement>) {
  const { className, ...rest } = props;
  const wrapperClass = ["vx-illu", className].filter(Boolean).join(" ");

  return (
    <figure className={wrapperClass}>
      {/* ---------------------------- DESKTOP ---------------------------- */}
      <svg
        className="vx-illu__view vx-illu__view--desktop vx-svg-language"
        viewBox="0 0 720 560"
        role="img"
        aria-labelledby="messy-d-title messy-d-desc"
        {...rest}
      >
        <title id="messy-d-title">
          Diagnostikas dēlis: pieci dažādi pieprasījumu avoti ar bultām uz
          centrālo rezervāciju
        </title>
        <desc id="messy-d-desc">
          Instagram ziņa, Booking pieprasījums, telefona zvans, e-pasts un
          mājaslapas forma. Lielākā daļa ceļu pārtrūkst pirms rezervācijas, viens
          ir ar roku apvilkts kā “pazūd šeit”, un viens neona ceļš sasniedz
          rezervāciju.
        </desc>

        {/* base surface — pinned paper sheet on the graphite desk */}
        <g>
          <rect
            x="26"
            y="30"
            width="668"
            height="500"
            rx="20"
            className="vi-shadow"
            transform="translate(6 10)"
          />
          <rect
            x="26"
            y="30"
            width="668"
            height="500"
            rx="20"
            className="vi-paper"
          />
          <rect
            x="26"
            y="30"
            width="668"
            height="500"
            rx="20"
            className="vi-stroke vi-ink-faint"
            strokeWidth="1.4"
          />
          {/* faint ruled board lines */}
          {[120, 200, 280, 360, 440].map((y) => (
            <line
              key={y}
              x1="48"
              y1={y}
              x2="672"
              y2={y}
              className="vi-stroke vi-ink-faint"
              strokeWidth="1"
              opacity="0.5"
            />
          ))}
          {/* pin + tape */}
          <circle cx="360" cy="30" r="9" className="vi-ink-fill" />
          <circle cx="360" cy="30" r="3.4" className="vi-paper" />
          <rect
            x="40"
            y="44"
            width="58"
            height="20"
            rx="3"
            className="vi-neon-wash"
            transform="rotate(-18 69 54)"
          />
        </g>

        {/* board title */}
        <text x="58" y="74" className="vi-hand" fontSize="22">
          Kur pazūd rezervācija?
        </text>
        <line
          x1="58"
          y1="84"
          x2="318"
          y2="84"
          className="vi-stroke vi-neon"
          strokeWidth="2.4"
        />

        {/* central target: Rezervācija */}
        <g>
          <path
            d="M572 226 c44 4 70 36 66 78 c-4 44 -42 70 -86 64 c-44 -6 -68 -42 -60 -84 c8 -42 40 -62 80 -58 z"
            className="vi-card"
          />
          <path
            d="M572 226 c44 4 70 36 66 78 c-4 44 -42 70 -86 64 c-44 -6 -68 -42 -60 -84 c8 -42 40 -62 80 -58 z"
            className="vi-stroke vi-ink"
            strokeWidth="2.4"
          />
          {/* reservation badge: small calendar with check */}
          <rect
            x="538"
            y="262"
            width="58"
            height="46"
            rx="6"
            className="vi-paper"
          />
          <rect
            x="538"
            y="262"
            width="58"
            height="46"
            rx="6"
            className="vi-stroke vi-ink"
            strokeWidth="2"
          />
          <line
            x1="538"
            y1="276"
            x2="596"
            y2="276"
            className="vi-stroke vi-ink"
            strokeWidth="2"
          />
          <line x1="550" y1="258" x2="550" y2="268" className="vi-stroke vi-ink" strokeWidth="2.4" />
          <line x1="584" y1="258" x2="584" y2="268" className="vi-stroke vi-ink" strokeWidth="2.4" />
          <path
            d="M552 292 l9 9 l16 -19"
            className="vi-stroke vi-neon"
            strokeWidth="3.4"
          />
          <text x="567" y="338" textAnchor="middle" className="vi-label" fontSize="17">
            Rezervācija
          </text>
        </g>

        {/* ---- source 1: Instagram DM — speech bubble ---- */}
        <g>
          <path
            d="M96 96 h168 a12 12 0 0 1 12 12 v52 a12 12 0 0 1 -12 12 h-118 l-22 22 l2 -22 h-30 a12 12 0 0 1 -12 -12 v-52 a12 12 0 0 1 12 -12 z"
            className="vi-card"
          />
          <path
            d="M96 96 h168 a12 12 0 0 1 12 12 v52 a12 12 0 0 1 -12 12 h-118 l-22 22 l2 -22 h-30 a12 12 0 0 1 -12 -12 v-52 a12 12 0 0 1 12 -12 z"
            className="vi-stroke vi-ink"
            strokeWidth="2"
          />
          <circle cx="116" cy="118" r="7" className="vi-stroke vi-ink-soft" strokeWidth="2" />
          <text x="132" y="123" className="vi-label" fontSize="13">
            Instagram DM
          </text>
          <text x="116" y="150" className="vi-text" fontSize="13" fill="rgba(10,10,10,0.7)">
            “Vai 17. datumā brīvs?”
          </text>
        </g>
        <text x="104" y="200" className="vi-hand-neon" fontSize="13">
          jautāja par datumu
        </text>

        {/* ---- source 2: Booking request — reservation tag ---- */}
        <g>
          <path
            d="M78 238 h150 l28 26 v54 a8 8 0 0 1 -8 8 h-170 a8 8 0 0 1 -8 -8 v-72 a8 8 0 0 1 8 -8 z"
            className="vi-card-tint"
          />
          <path
            d="M78 238 h150 l28 26 v54 a8 8 0 0 1 -8 8 h-170 a8 8 0 0 1 -8 -8 v-72 a8 8 0 0 1 8 -8 z"
            className="vi-stroke vi-ink"
            strokeWidth="2"
          />
          <path d="M228 238 v26 h28" className="vi-stroke vi-ink-soft" strokeWidth="1.6" />
          <circle cx="92" cy="252" r="4.5" className="vi-stroke vi-ink-soft" strokeWidth="1.6" />
          <text x="106" y="257" className="vi-label" fontSize="13">
            Booking pieprasījums
          </text>
          <text x="92" y="284" className="vi-text" fontSize="13" fill="rgba(10,10,10,0.7)">
            skatās · rezervē citur
          </text>
        </g>
        <text x="86" y="338" className="vi-hand" fontSize="13" fill="rgba(10,10,10,0.62)">
          cena? 2 naktis?
        </text>

        {/* ---- source 3: Telefona zvans — call note ---- */}
        <g>
          <rect x="74" y="366" width="176" height="78" rx="10" className="vi-card" />
          <rect
            x="74"
            y="366"
            width="176"
            height="78"
            rx="10"
            className="vi-stroke vi-ink"
            strokeWidth="2"
          />
          {/* handset glyph */}
          <path
            d="M92 386 c0 16 14 30 30 30 l8 -10 c2 -3 0 -7 -4 -8 l-10 -3 c-2 -1 -5 0 -7 1 c-5 -3 -9 -7 -11 -12 c1 -2 2 -5 1 -7 l-3 -10 c-1 -4 -5 -6 -8 -4 z"
            className="vi-ink-fill"
          />
          <text x="124" y="392" className="vi-label" fontSize="13">
            Telefona zvans
          </text>
          <text x="124" y="412" className="vi-text" fontSize="12.5" fill="rgba(10,10,10,0.7)">
            laba saruna
          </text>
          <text x="124" y="430" className="vi-text" fontSize="12.5" fill="rgba(10,10,10,0.7)">
            nav statusa
          </text>
        </g>
        <text x="84" y="468" className="vi-hand-neon" fontSize="13">
          zvans palika atmiņā
        </text>

        {/* ---- source 4: E-pasts — folded paper strip ---- */}
        <g>
          <path
            d="M286 372 l176 14 l-6 70 l-176 -14 z"
            className="vi-card-tint"
          />
          <path
            d="M286 372 l176 14 l-6 70 l-176 -14 z"
            className="vi-stroke vi-ink"
            strokeWidth="2"
          />
          <path d="M286 372 l86 44 l92 -30" className="vi-stroke vi-ink-soft" strokeWidth="1.8" />
          <text x="300" y="436" className="vi-label" fontSize="13">
            E-pasts · pasākums
          </text>
        </g>
        <text x="300" y="476" className="vi-hand" fontSize="13" fill="rgba(10,10,10,0.62)">
          gaida atbildi
        </text>

        {/* ---- source 5: Mājaslapas forma — form receipt ---- */}
        <g>
          <rect x="368" y="120" width="150" height="92" rx="8" className="vi-card" />
          <rect
            x="368"
            y="120"
            width="150"
            height="92"
            rx="8"
            className="vi-stroke vi-ink"
            strokeWidth="2"
          />
          <text x="384" y="142" className="vi-label" fontSize="13">
            Mājaslapas forma
          </text>
          {[158, 174, 190].map((y) => (
            <line
              key={y}
              x1="384"
              y1={y}
              x2="502"
              y2={y}
              className="vi-stroke vi-ink-soft"
              strokeWidth="2"
            />
          ))}
          <line x1="384" y1="190" x2="452" y2="190" className="vi-stroke vi-ink-soft" strokeWidth="2" />
        </g>
        <text x="372" y="234" className="vi-hand-neon" fontSize="13">
          forma bez konteksta
        </text>

        {/* ---- connectors toward target ---- */}
        {/* Instagram → neon corrected path (lands) */}
        <path
          d="M280 132 C 360 150 430 200 506 252"
          className="vi-stroke vi-neon vi-draw"
          strokeWidth="3.2"
          style={{ ["--vi-len" as string]: 300 }}
        />
        <path d="M506 252 l-16 -2 l4 16" className="vi-stroke vi-neon" strokeWidth="3.2" />

        {/* Booking → broken path that dies at "pazūd šeit" */}
        <path
          d="M256 290 C 330 300 376 296 414 300"
          className="vi-stroke vi-ink vi-broken"
          strokeWidth="2.4"
        />
        {/* Zvans → faded dotted, trails off */}
        <path
          d="M250 404 C 330 392 372 360 430 336"
          className="vi-stroke vi-ink-soft vi-faded"
          strokeWidth="2.6"
        />
        {/* E-pasts → broken path */}
        <path
          d="M462 412 C 500 398 510 372 512 352"
          className="vi-stroke vi-ink vi-broken"
          strokeWidth="2.4"
        />
        {/* Forma → broken path */}
        <path
          d="M518 200 C 540 222 542 232 540 246"
          className="vi-stroke vi-ink vi-broken"
          strokeWidth="2.4"
        />

        {/* leakage evidence: hand-circled "pazūd šeit" at the dead break */}
        <g>
          <path
            d="M420 280 c30 -12 70 -10 84 14 c12 22 -6 44 -38 48 c-34 4 -64 -10 -64 -34 c0 -14 8 -22 18 -28 z"
            className="vi-stroke vi-neon"
            strokeWidth="2.6"
          />
          <text x="462" y="312" textAnchor="middle" className="vi-hand-neon" fontSize="15">
            pazūd šeit
          </text>
        </g>
      </svg>

      {/* ----------------------------- MOBILE ----------------------------- */}
      <svg
        className="vx-illu__view vx-illu__view--mobile vx-svg-language"
        viewBox="0 0 380 540"
        role="img"
        aria-labelledby="messy-m-title"
      >
        <title id="messy-m-title">
          Trīs pieprasījumu avoti ar bultām uz centrālo rezervāciju; viens ceļš
          pārtrūkst ar atzīmi “pazūd šeit”, viens neona ceļš sasniedz mērķi.
        </title>

        <rect x="14" y="16" width="352" height="508" rx="18" className="vi-paper" />
        <rect
          x="14"
          y="16"
          width="352"
          height="508"
          rx="18"
          className="vi-stroke vi-ink-faint"
          strokeWidth="1.4"
        />
        <circle cx="190" cy="16" r="8" className="vi-ink-fill" />
        <text x="34" y="56" className="vi-hand" fontSize="20">
          Kur pazūd rezervācija?
        </text>

        {/* Instagram bubble */}
        <g>
          <path
            d="M34 84 h150 a10 10 0 0 1 10 10 v40 a10 10 0 0 1 -10 10 h-104 l-18 18 l2 -18 h-30 a10 10 0 0 1 -10 -10 v-40 a10 10 0 0 1 10 -10 z"
            className="vi-card"
          />
          <path
            d="M34 84 h150 a10 10 0 0 1 10 10 v40 a10 10 0 0 1 -10 10 h-104 l-18 18 l2 -18 h-30 a10 10 0 0 1 -10 -10 v-40 a10 10 0 0 1 10 -10 z"
            className="vi-stroke vi-ink"
            strokeWidth="2.2"
          />
          <text x="50" y="110" className="vi-label" fontSize="15">
            Instagram DM
          </text>
          <text x="50" y="132" className="vi-text" fontSize="13" fill="rgba(10,10,10,0.7)">
            “17. datumā brīvs?”
          </text>
        </g>

        {/* Booking tag */}
        <g>
          <path
            d="M30 192 h140 l24 22 v44 a8 8 0 0 1 -8 8 h-156 a8 8 0 0 1 -8 -8 v-58 a8 8 0 0 1 8 -8 z"
            className="vi-card-tint"
          />
          <path
            d="M30 192 h140 l24 22 v44 a8 8 0 0 1 -8 8 h-156 a8 8 0 0 1 -8 -8 v-58 a8 8 0 0 1 8 -8 z"
            className="vi-stroke vi-ink"
            strokeWidth="2.2"
          />
          <text x="46" y="220" className="vi-label" fontSize="15">
            Booking
          </text>
          <text x="46" y="242" className="vi-text" fontSize="13" fill="rgba(10,10,10,0.7)">
            skatās · rezervē citur
          </text>
        </g>

        {/* Zvans note */}
        <g>
          <rect x="22" y="300" width="172" height="64" rx="10" className="vi-card" />
          <rect
            x="22"
            y="300"
            width="172"
            height="64"
            rx="10"
            className="vi-stroke vi-ink"
            strokeWidth="2.2"
          />
          <text x="40" y="328" className="vi-label" fontSize="15">
            Telefona zvans
          </text>
          <text x="40" y="350" className="vi-text" fontSize="13" fill="rgba(10,10,10,0.7)">
            nav statusa
          </text>
        </g>

        {/* central target */}
        <g>
          <path
            d="M300 300 c40 0 60 28 56 64 c-4 34 -38 54 -74 48 c-34 -6 -52 -36 -44 -70 c8 -32 30 -42 62 -42 z"
            className="vi-card"
          />
          <path
            d="M300 300 c40 0 60 28 56 64 c-4 34 -38 54 -74 48 c-34 -6 -52 -36 -44 -70 c8 -32 30 -42 62 -42 z"
            className="vi-stroke vi-ink"
            strokeWidth="2.6"
          />
          <path d="M270 350 l12 12 l22 -26" className="vi-stroke vi-neon" strokeWidth="4" />
          <text x="296" y="392" textAnchor="middle" className="vi-label" fontSize="16">
            Rezervācija
          </text>
        </g>

        {/* connectors */}
        <path
          d="M196 120 C 250 150 268 230 286 300"
          className="vi-stroke vi-neon"
          strokeWidth="3.4"
        />
        <path
          d="M194 236 C 240 250 244 280 250 312"
          className="vi-stroke vi-ink vi-broken"
          strokeWidth="2.6"
        />
        <path
          d="M194 332 C 218 332 224 334 236 338"
          className="vi-stroke vi-ink-soft vi-faded"
          strokeWidth="2.8"
        />

        {/* leakage mark */}
        <g>
          <path
            d="M214 248 c26 -8 54 -2 58 18 c4 18 -16 30 -42 28 c-26 -2 -42 -16 -36 -34 c4 -8 12 -10 20 -12 z"
            className="vi-stroke vi-neon"
            strokeWidth="2.6"
          />
          <text x="236" y="278" textAnchor="middle" className="vi-hand-neon" fontSize="15">
            pazūd šeit
          </text>
        </g>
      </svg>
    </figure>
  );
}

export default MessySignalsIllustration;
