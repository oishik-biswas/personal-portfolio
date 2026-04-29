"use client";

import { useEffect, useRef } from "react";

const trailLength = 12;
const interactiveSelector =
  'a, button, label, summary, [role="button"], [type="button"], [type="submit"], [type="reset"]';

export default function CursorTrail() {
  const dotRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const hasFinePointer = window.matchMedia("(pointer: fine)");

    if (prefersReducedMotion.matches || !hasFinePointer.matches) {
      return;
    }

    const dots = dotRefs.current.filter(Boolean);
    const positions = dots.map(() => ({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }));

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let isVisible = false;
    let frameId = 0;

    const setHoverState = (target: EventTarget | null) => {
      const isInteractive =
        target instanceof Element && Boolean(target.closest(interactiveSelector));

      document.documentElement.classList.toggle(
        "cursor-trail-hover",
        isInteractive,
      );
    };

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;

      if (!isVisible) {
        isVisible = true;
        document.documentElement.classList.add("cursor-trail-active");
      }

      setHoverState(event.target);
    };

    const onPointerDown = () => {
      document.documentElement.classList.add("cursor-trail-press");
    };

    const onPointerUp = () => {
      document.documentElement.classList.remove("cursor-trail-press");
    };

    const onPointerLeave = () => {
      isVisible = false;
      document.documentElement.classList.remove(
        "cursor-trail-active",
        "cursor-trail-hover",
        "cursor-trail-press",
      );
    };

    const animate = () => {
      positions[0].x += (targetX - positions[0].x) * 0.36;
      positions[0].y += (targetY - positions[0].y) * 0.36;

      for (let index = 1; index < positions.length; index += 1) {
        positions[index].x += (positions[index - 1].x - positions[index].x) * 0.34;
        positions[index].y += (positions[index - 1].y - positions[index].y) * 0.34;
      }

      dots.forEach((dot, index) => {
        const scale = Math.max(0.28, 1 - index * 0.055);
        const opacity = isVisible ? Math.max(0.08, 0.62 - index * 0.045) : 0;

        dot.style.opacity = String(opacity);
        dot.style.transform = `translate3d(${positions[index].x}px, ${positions[index].y}px, 0) translate(-50%, -50%) scale(${scale})`;
      });

      frameId = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    document.documentElement.addEventListener("pointerleave", onPointerLeave);

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      document.documentElement.removeEventListener(
        "pointerleave",
        onPointerLeave,
      );
      document.documentElement.classList.remove(
        "cursor-trail-active",
        "cursor-trail-hover",
        "cursor-trail-press",
      );
    };
  }, []);

  return (
    <div className="cursor-trail" aria-hidden="true">
      {Array.from({ length: trailLength }).map((_, index) => (
        <span
          key={index}
          ref={(node) => {
            if (node) {
              dotRefs.current[index] = node;
            }
          }}
          className="cursor-trail-dot"
        />
      ))}
    </div>
  );
}
