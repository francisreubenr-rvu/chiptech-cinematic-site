/** Tactile Ledger visual primitive: a deterministic paper-and-component composition for each intro scene. */
type TactileCircuitProps = { scene: number; staticMode?: boolean };

export default function TactileCircuit({ scene, staticMode = false }: TactileCircuitProps) {
  return (
    <figure className={`tactile-circuit ${staticMode ? "tactile-circuit-static" : ""}`} data-scene={scene} aria-hidden="true">
      <div className="paper-sheet paper-one" />
      <div className="paper-sheet paper-two" />
      <div className="bench-shadow" />
      <div className="chip-cutout"><span>CT</span><i /><i /><i /><i /></div>
      <div className="pin-grid"><b>01</b><b>02</b><b>03</b><b>04</b></div>
      <div className="print-label label-a">VCC +</div>
      <div className="print-label label-b">GND</div>
      <div className="print-label label-c">SIGNAL</div>
      <div className="solder-line solder-one" />
      <div className="solder-line solder-two" />
      <div className="wire wire-a" /><div className="wire wire-b" /><div className="wire wire-c" />
      <div className="breadboard"><span /><span /><span /><span /><span /><span /></div>
      <div className="power-tab">POWER</div>
      <div className="led led-one" /><div className="led led-two" /><div className="led led-three" />
      <div className="module-card module-a">HARDWARE</div>
      <div className="module-card module-b">SYSTEMS</div>
      <div className="module-card module-c">COMMUNITY</div>
      <figcaption className="sr-only">A handcrafted sequence from a single chip to a collaborative hardware system.</figcaption>
    </figure>
  );
}
