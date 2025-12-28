import { motion, useReducedMotion } from "framer-motion";

export function TractLinesBackground({
  tone = "light",
  mode = "fixed",
}: {
  tone?: "light" | "dark";
  mode?: "fixed" | "absolute";
}) {
  const reduceMotion = useReducedMotion();

  const base =
    tone === "dark"
      ? "radial-gradient(1100px circle at 50% 10%, rgba(201,169,97,0.14), transparent 55%), radial-gradient(900px circle at 10% 70%, rgba(201,169,97,0.10), transparent 60%), linear-gradient(180deg, #0B0B0C 0%, #070708 100%)"
      : "radial-gradient(900px circle at 50% 0%, rgba(201,169,97,0.16), transparent 60%), radial-gradient(900px circle at 10% 70%, rgba(201,169,97,0.10), transparent 70%), linear-gradient(180deg, #F7F3EA 0%, #EFE7D9 100%)";

  return (
    <div
      className={
        "pointer-events-none overflow-hidden " +
        (mode === "fixed" ? "fixed inset-0 -z-10" : "absolute inset-0 z-0")
      }
    >
      <div className="absolute inset-0" style={{ background: base }} />

      <motion.svg
        className="absolute inset-0 w-[120%] h-[120%] -left-[10%] -top-[10%] opacity-[0.35]"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 14, 0, -10, 0],
                y: [0, -8, 0, 10, 0],
              }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      >
        <defs>
          <linearGradient id="gold" x1="0" y1="0" x2="1200" y2="0">
            <stop offset="0" stopColor="#C9A961" stopOpacity="0.05" />
            <stop offset="0.5" stopColor="#C9A961" stopOpacity="0.22" />
            <stop offset="1" stopColor="#C9A961" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path
          d="M-50 110 C 170 40, 320 210, 540 140 C 760 70, 920 230, 1250 110"
          stroke="url(#gold)"
          strokeWidth="3"
        />
        <path
          d="M-60 260 C 190 170, 340 360, 580 260 C 820 160, 980 350, 1260 240"
          stroke="url(#gold)"
          strokeWidth="2"
          opacity="0.85"
        />
        <path
          d="M-40 430 C 220 340, 420 520, 650 420 C 880 320, 1040 480, 1260 410"
          stroke="url(#gold)"
          strokeWidth="2"
          opacity="0.75"
        />
        <path
          d="M-80 600 C 180 540, 430 680, 710 600 C 980 520, 1060 650, 1260 580"
          stroke="url(#gold)"
          strokeWidth="2"
          opacity="0.6"
        />
      </motion.svg>
    </div>
  );
}
