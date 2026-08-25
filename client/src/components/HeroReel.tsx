/** Editorial moving cover: starts muted, exposes explicit sound control, and degrades safely if playback audio is unavailable. */
import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

type HeroReelProps = { src: string; poster: string; label: string };

export default function HeroReel({ src, poster, label }: HeroReelProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [unavailable, setUnavailable] = useState(false);

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (!muted) { video.muted = true; setMuted(true); return; }
    video.muted = false;
    video.volume = 0.32;
    try {
      await video.play();
      setMuted(false);
      setUnavailable(false);
    } catch {
      video.muted = true;
      setMuted(true);
      setUnavailable(true);
    }
  };

  return <div className="hero-reel"><video ref={videoRef} className="editorial-hero-film" autoPlay muted loop playsInline poster={poster} aria-label={label}><source src={src} type="video/mp4" /></video><button className="hero-sound-toggle" type="button" onClick={() => void toggleSound()} aria-pressed={!muted} aria-label={muted ? "Turn on hero reel sound" : "Turn off hero reel sound"}>{muted ? <VolumeX size={15} /> : <Volume2 size={15} />}<span>{muted ? "Sound off" : "Sound on"}</span></button>{unavailable && <span className="sound-fallback" role="status">Sound is unavailable in this browser state.</span>}</div>;
}
