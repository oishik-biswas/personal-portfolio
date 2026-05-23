"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

const rubikColors = [
  "bg-red-400",
  "bg-emerald-400",
  "bg-amber-300",
  "bg-blue-400",
  "bg-white",
  "bg-orange-400",
  "bg-cyan-300",
  "bg-lime-300",
  "bg-fuchsia-400",
];

export default function BackgroundObjects() {
  const stageRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);
  const [cubeTurns, setCubeTurns] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const stage = stageRef.current;

    if (!stage) {
      return;
    }

    let frameId = 0;

    const updateScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const maxScroll = Math.max(
          1,
          document.documentElement.scrollHeight - window.innerHeight,
        );
        const progress = window.scrollY / maxScroll;
        stage.style.setProperty("--scroll-progress", progress.toFixed(4));
        stage.style.setProperty("--scroll-offset", `${window.scrollY * 0.08}px`);
      });
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const showMessage = (nextMessage: string) => {
    setMessage(nextMessage);

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setMessage("");
    }, 2100);
  };

  const spinCube = () => {
    const nextTurns = cubeTurns + 1;
    setCubeTurns(nextTurns);
    showMessage(nextTurns % 4 === 0 ? "Cube solved. Probably." : "Cube scrambled.");
  };

  const playGuitar = () => {
    const windowWithAudio = window as Window &
      typeof globalThis & {
        webkitAudioContext?: typeof AudioContext;
      };
    const AudioContextClass =
      window.AudioContext ?? windowWithAudio.webkitAudioContext;

    if (!AudioContextClass) {
      showMessage("Audio is not available here.");
      return;
    }

    const audioContext = new AudioContextClass();
    const now = audioContext.currentTime;
    const notes = [164.81, 196, 246.94, 329.63, 392];

    notes.forEach((frequency, index) => {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const start = now + index * 0.045;

      oscillator.type = "triangle";
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.09, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.9);

      oscillator.connect(gain);
      gain.connect(audioContext.destination);
      oscillator.start(start);
      oscillator.stop(start + 1);
    });

    setIsPlaying(true);
    showMessage("Tiny E minor unlocked.");
    window.setTimeout(() => setIsPlaying(false), 760);
  };

  return (
    <div ref={stageRef} className="background-objects" aria-label="Interactive background">
      <button
        type="button"
        className={`floating-object rubik-object ${cubeTurns ? "is-active" : ""}`}
        style={{ "--turns": cubeTurns } as CSSProperties}
        aria-label="Spin the Rubik cube"
        onClick={spinCube}
      >
        <span className="rubik-face" aria-hidden="true">
          {rubikColors.map((color, index) => (
            <span key={`${color}-${index}`} className={color} />
          ))}
        </span>
      </button>

      <button
        type="button"
        className={`floating-object guitar-object ${isPlaying ? "is-playing" : ""}`}
        aria-label="Play the guitar easter egg"
        onClick={playGuitar}
      >
        <span className="guitar-head" aria-hidden="true" />
        <span className="guitar-neck" aria-hidden="true" />
        <span className="guitar-body" aria-hidden="true" />
        <span className="guitar-hole" aria-hidden="true" />
        <span className="guitar-note" aria-hidden="true">
          E
        </span>
      </button>

      <div className="floating-object code-object" aria-hidden="true">
        {"</>"}
      </div>
      <div className="floating-object signal-object" aria-hidden="true" />

      <div className={`easter-message ${message ? "is-visible" : ""}`} aria-live="polite">
        {message}
      </div>
    </div>
  );
}
