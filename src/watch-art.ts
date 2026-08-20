/**
 * The primary image for the Ordinal working study.
 *
 * This is deliberately a constructed vector study rather than product media.
 * The outer groups are named and carry assembly metadata so `main.ts` can use
 * one progress value to move the authored exploded view into its object state.
 */
export const watchArtwork = String.raw`<svg
  class="watch-art"
  viewBox="0 0 760 1120"
  role="img"
  aria-labelledby="watch-art-title watch-art-description"
  preserveAspectRatio="xMidYMid meet"
  focusable="false"
  data-watch-study="ordinal-01"
>
  <title id="watch-art-title">Exploded study of a gold mechanical timepiece</title>
  <desc id="watch-art-description">A code-drawn mechanical watch arranged around a central assembly axis. A leather strap, case, gear train, balance wheel, bridges, dial and hands, and crown are shown as separate study layers.</desc>

  <g class="watch-art__registration" aria-hidden="true">
    <path class="watch-art__registration-mark" d="M380 12v26m-13-13h26M380 1082v26m-13-13h26" />
    <path class="watch-art__registration-mark" d="M45 560h26m-13-13v26M689 560h26m-13-13v26" />
    <line class="watch-art__assembly-axis" x1="380" y1="16" x2="380" y2="1104" />
  </g>

  <g
    class="watch-art__part watch-art__strap"
    data-watch-part="strap"
    data-explode-x="0"
    data-explode-y="100"
    data-explode-rotate="0"
    data-assemble-start="0.38"
    data-assemble-end="0.96"
  >
    <path class="watch-art__strap-leather" d="M303 22c19-10 135-10 154 0l-14 266H317L303 22Z" />
    <path class="watch-art__strap-edge" d="M319 26c17-6 105-6 122 0l-13 249H332L319 26Z" />
    <path class="watch-art__strap-leather" d="M317 832h126l14 266c-19 10-135 10-154 0l14-266Z" />
    <path class="watch-art__strap-edge" d="M332 845h96l13 249c-17 6-105 6-122 0l13-249Z" />
    <g class="watch-art__stitching">
      <path d="M328 36v239M432 36v239M328 845v239M432 845v239" />
      <path class="watch-art__stitch-line" d="M329 57h102M328 85h102M327 113h102M326 141h102M325 169h102M324 197h102M323 225h102M322 253h102" />
      <path class="watch-art__stitch-line" d="M330 865h100M331 893h98M332 921h96M333 949h94M334 977h92M335 1005h90M336 1033h88M337 1061h86" />
    </g>
    <path class="watch-art__strap-keeper" d="M307 178h146l-3 58H310l-3-58Z" />
    <path class="watch-art__strap-keeper" d="M307 884h146l3 58H310l-3-58Z" />
    <circle class="watch-art__strap-stud" cx="380" cy="70" r="5" />
    <circle class="watch-art__strap-stud" cx="380" cy="1048" r="5" />
  </g>

  <g
    class="watch-art__part watch-art__case"
    data-watch-part="case"
    data-explode-x="0"
    data-explode-y="-54"
    data-explode-rotate="0"
    data-assemble-start="0.16"
    data-assemble-end="0.76"
  >
    <path class="watch-art__lug watch-art__lug--north-west" d="M196 350c-23-27-31-44-24-57 8-14 33-9 57 17l50 55-30 28-53-43Z" />
    <path class="watch-art__lug watch-art__lug--north-east" d="M564 350c23-27 31-44 24-57-8-14-33-9-57 17l-50 55 30 28 53-43Z" />
    <path class="watch-art__lug watch-art__lug--south-west" d="M196 770c-23 27-31 44-24 57 8 14 33 9 57-17l50-55-30-28-53 43Z" />
    <path class="watch-art__lug watch-art__lug--south-east" d="M564 770c23 27 31 44 24 57-8 14-33 9-57-17l-50-55 30-28 53 43Z" />
    <circle class="watch-art__case-shell" cx="380" cy="560" r="264" />
    <circle class="watch-art__case-wall" cx="380" cy="560" r="248" />
    <circle class="watch-art__bezel" cx="380" cy="560" r="231" />
    <circle class="watch-art__case-hairline" cx="380" cy="560" r="214" />
    <g class="watch-art__case-screws">
      <circle cx="380" cy="310" r="5" />
      <circle cx="380" cy="810" r="5" />
      <circle cx="130" cy="560" r="5" />
      <circle cx="630" cy="560" r="5" />
    </g>
    <path class="watch-art__case-highlight" d="M217 394c37-70 91-109 163-119" />
    <path class="watch-art__case-shadow" d="M546 731c-45 45-98 70-166 76" />
  </g>

  <g
    class="watch-art__part watch-art__gears"
    data-watch-part="gears"
    data-explode-x="-24"
    data-explode-y="18"
    data-explode-rotate="-8"
    data-assemble-start="0.08"
    data-assemble-end="0.72"
  >
    <g class="watch-art__gear watch-art__gear--fourth" data-gear="fourth" transform="translate(320 646)">
      <circle class="watch-art__gear-teeth" r="48" />
      <circle class="watch-art__gear-ring" r="37" />
      <circle class="watch-art__gear-pinion" r="8" />
      <path class="watch-art__gear-spokes" d="M0-35v27M35 0H8M0 35V8M-35 0h27M-25-25l19 19M25-25 6-6M25 25 6 6M-25 25l19-19" />
    </g>
    <g class="watch-art__gear watch-art__gear--centre" data-gear="centre" transform="translate(370 548)">
      <circle class="watch-art__gear-teeth" r="70" />
      <circle class="watch-art__gear-ring" r="57" />
      <circle class="watch-art__gear-pinion" r="10" />
      <path class="watch-art__gear-spokes" d="M0-54v42M54 0H12M0 54V12M-54 0h42M-38-38l30 30M38-38 8-8M38 38 8 8M-38 38l30-30" />
    </g>
    <g class="watch-art__gear watch-art__gear--escape" data-gear="escape" transform="translate(453 627)">
      <circle class="watch-art__gear-teeth" r="43" />
      <circle class="watch-art__gear-ring" r="31" />
      <circle class="watch-art__gear-pinion" r="7" />
      <path class="watch-art__gear-spokes" d="M0-29v20M29 0H9M0 29V9M-29 0h20M-20-20l14 14M20-20 6-6M20 20 6 6M-20 20l14-14" />
    </g>
    <path class="watch-art__train-line" d="M251 506c44-21 79-37 112-46m62 69c15 20 25 43 29 65m-101 37c-17 21-28 41-34 65" />
  </g>

  <g
    class="watch-art__part watch-art__balance"
    data-watch-part="balance"
    data-explode-x="36"
    data-explode-y="-82"
    data-explode-rotate="10"
    data-assemble-start="0.2"
    data-assemble-end="0.79"
  >
    <circle class="watch-art__balance-wheel" cx="470" cy="439" r="78" />
    <circle class="watch-art__balance-wheel watch-art__balance-wheel--inner" cx="470" cy="439" r="62" />
    <circle class="watch-art__balance-hub" cx="470" cy="439" r="9" />
    <path class="watch-art__balance-spokes" d="M470 377v53m0 18v53m-62-62h53m18 0h53m-44-44 37-37m-90 90-37 37m0-90 37 37m53 53 37 37" />
    <path class="watch-art__hairspring" d="M470 439c-8-27 11-42 31-30 20 12 4 44-16 38-24-8-31-40-6-57 25-17 61 2 63 31" />
  </g>

  <g
    class="watch-art__part watch-art__bridges"
    data-watch-part="bridges"
    data-explode-x="-8"
    data-explode-y="35"
    data-explode-rotate="3"
    data-assemble-start="0.26"
    data-assemble-end="0.81"
  >
    <path class="watch-art__bridge watch-art__bridge--upper" d="M250 478c35-47 94-70 151-55l51 13-12 34-49-11c-39-9-81 7-106 42l-16 23-31-18 12-28Z" />
    <path class="watch-art__bridge watch-art__bridge--lower" d="M249 641c30 34 68 52 111 55l101 7-4 34-105-7c-56-4-107-29-146-73l-9-10 27-23 25 17Z" />
    <path class="watch-art__bridge watch-art__bridge--balance" d="M440 358c19-21 50-29 75-16l30 15-14 29-26-13c-13-6-28-2-38 9l-9 11-28-20 10-15Z" />
    <g class="watch-art__jewel-set" aria-hidden="true">
      <circle cx="280" cy="491" r="9" />
      <circle cx="426" cy="469" r="9" />
      <circle cx="349" cy="697" r="9" />
      <circle cx="463" cy="690" r="9" />
    </g>
  </g>

  <g
    class="watch-art__part watch-art__dial"
    data-watch-part="dial"
    data-explode-x="0"
    data-explode-y="65"
    data-explode-rotate="0"
    data-assemble-start="0.44"
    data-assemble-end="0.9"
  >
    <circle class="watch-art__dial-surface" cx="380" cy="560" r="193" />
    <circle class="watch-art__dial-opening" cx="380" cy="560" r="179" />
    <g class="watch-art__dial-ticks" aria-hidden="true">
      <path d="M380 386v25M467 409l-13 22M531 473l-22 13M554 560h-25M531 647l-22-13M467 711l-13-22M380 734v-25M293 711l13-22M229 647l22-13M206 560h25M229 473l22 13M293 409l13 22" />
    </g>
    <path class="watch-art__dial-index" d="M376 400h8v19h-8zM523 556h18v8h-18zM376 701h8v19h-8zM219 556h18v8h-18z" />
    <circle class="watch-art__dial-centre" cx="380" cy="560" r="16" />
    <text class="watch-art__dial-mark" x="380" y="495" text-anchor="middle">ORDINAL / STUDY 01</text>
    <text class="watch-art__dial-mark watch-art__dial-mark--small" x="380" y="635" text-anchor="middle">CONCEPT / MECHANICAL</text>
  </g>

  <g
    class="watch-art__part watch-art__hands"
    data-watch-part="hands"
    data-explode-x="0"
    data-explode-y="82"
    data-explode-rotate="-4"
    data-assemble-start="0.53"
    data-assemble-end="0.96"
  >
    <path class="watch-art__hand watch-art__hand--hour" d="M380 559 319 477l12-9 68 78-8 13Z" />
    <path class="watch-art__hand watch-art__hand--minute" d="m380 559 107-70 7 12-101 79-13-7Z" />
    <path class="watch-art__hand watch-art__hand--second" d="M380 559 415 654M380 559l-10-115" />
    <circle class="watch-art__hand-cap" cx="380" cy="560" r="13" />
    <circle class="watch-art__hand-pin" cx="380" cy="560" r="4" />
  </g>

  <g
    class="watch-art__part watch-art__crown"
    data-watch-part="crown"
    data-explode-x="88"
    data-explode-y="-5"
    data-explode-rotate="-12"
    data-assemble-start="0.36"
    data-assemble-end="0.88"
  >
    <path class="watch-art__crown-stem" d="M620 560h58" />
    <path class="watch-art__crown-guard" d="M614 536c17-13 30-13 43 0v48c-13 13-26 13-43 0" />
    <rect class="watch-art__crown-body" x="667" y="531" width="45" height="58" rx="18" />
    <path class="watch-art__crown-ridges" d="M675 536v48M684 533v54M693 533v54M702 536v48" />
    <circle class="watch-art__crown-cap" cx="711" cy="560" r="15" />
  </g>
</svg>`;

export default watchArtwork;
