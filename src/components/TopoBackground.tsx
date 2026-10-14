const contours = [
  'M-50 520 C 150 470, 260 540, 420 480 S 700 380, 860 430 S 1120 500, 1260 420',
  'M-50 470 C 160 420, 280 490, 440 430 S 700 330, 860 380 S 1110 450, 1260 370',
  'M-50 420 C 170 370, 300 440, 460 380 S 710 280, 870 330 S 1100 400, 1260 320',
  'M600 210 C 680 150, 820 150, 880 210 S 900 330, 790 340 S 560 300, 600 210 Z',
  'M650 220 C 700 185, 800 185, 840 225 S 840 300, 780 300 S 620 270, 650 220 Z',
  'M705 232 C 735 212, 785 214, 800 238 S 790 272, 760 272 S 690 258, 705 232 Z',
  'M-50 120 C 120 90, 240 160, 380 120 S 520 40, 640 60',
  'M-50 70 C 120 40, 250 110, 390 70 S 520 -10, 640 10',
];

/** Decorative topographic contour lines behind the hero. */
export function TopoBackground() {
  return (
    <svg
      className="topo"
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      stroke="#C9C6BB"
      strokeWidth={1.2}
    >
      {contours.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
