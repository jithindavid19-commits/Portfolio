"use client";

import { useRef, useState, MouseEvent, ReactNode, Ref } from "react";
import { motion } from "framer-motion";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
};

export default function MagneticButton({
  children,
  className = "",
  strength = 0.35,
  onClick,
  href,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setPos({ x: relX * strength, y: relY * strength });
  }

  function handleLeave() {
    setPos({ x: 0, y: 0 });
  }

  const spanContent = (
    <motion.span
      animate={{ x: pos.x * 0.4, y: pos.y * 0.4 }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.3 }}
      className="inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as Ref<HTMLAnchorElement>}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={onClick}
        animate={{ x: pos.x, y: pos.y }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.3 }}
        className={className}
        data-cursor="magnetic"
      >
        {spanContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as Ref<HTMLButtonElement>}
      type="button"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      animate={{ x: pos.x, y: pos.y }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.3 }}
      className={className}
      data-cursor="magnetic"
    >
      {spanContent}
    </motion.button>
  );
}
