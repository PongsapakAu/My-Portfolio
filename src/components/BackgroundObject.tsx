import { useEffect, useState } from "react";

export default function BackgroundObject() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-full w-full -z-10 overflow-hidden">
      {/* Gradient Background โทนดำอมม่วงอมฟ้า */}
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0d1a3a] animate-gradientSlow" />

      {/* Blobs / Floating Lights โทนสีเข้มอมม่วง ฟ้าเทา */}
      <div
        className="absolute top-[10%] left-[5%] h-40 w-40 rounded-full bg-purple-900 opacity-40 blur-3xl"
        style={{
          transform: `translateY(${offsetY * 0.2}px) translateX(${offsetY * 0.1}px)`,
        }}
      />

      <div
        className="absolute top-[40%] left-[70%] h-56 w-56 rounded-full bg-slate-700 opacity-30 blur-[100px]"
        style={{
          transform: `translateY(${offsetY * 0.15}px) translateX(-${offsetY * 0.05}px)`,
        }}
      />

      <div
        className="absolute top-[75%] left-[30%] h-32 w-32 rounded-full bg-indigo-900 opacity-35 blur-2xl"
        style={{
          transform: `translateY(${offsetY * 0.1}px)`,
        }}
      />
    </div>
  );
}
