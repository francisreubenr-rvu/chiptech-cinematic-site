/** Frame-driven intro visual: selects one of 144 extracted 24 fps images from scroll progress with bounded prefetching. */
import { useEffect, useRef, useState } from "react";
import { stopMotionFrames } from "@/lib/stopMotionFrames";

type ScrollFrameSequenceProps = { frameIndex: number; className?: string };

export default function ScrollFrameSequence({ frameIndex, className = "" }: ScrollFrameSequenceProps) {
  const cached = useRef(new Set<number>());
  const [failed, setFailed] = useState(false);
  const safeIndex = Math.max(0, Math.min(stopMotionFrames.length - 1, frameIndex));

  useEffect(() => {
    const load = (index: number) => {
      if (index < 0 || index >= stopMotionFrames.length || cached.current.has(index)) return;
      cached.current.add(index);
      const image = new Image();
      image.decoding = "async";
      image.src = stopMotionFrames[index];
    };
    if (safeIndex === 0) for (let index = 0; index <= 12; index += 1) load(index);
    for (let index = safeIndex - 8; index <= safeIndex + 16; index += 1) load(index);
  }, [safeIndex]);

  if (failed) return null;
  return <img className={`intro-frame-image ${className}`} src={stopMotionFrames[safeIndex]} alt="" aria-hidden="true" decoding="async" fetchPriority={safeIndex < 13 ? "high" : "auto"} onError={() => setFailed(true)} />;
}
