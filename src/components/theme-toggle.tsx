"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="sm"
        className="h-9 w-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300"
      >
        <div className="h-4 w-4 rounded-full bg-gray-400" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="h-9 w-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110 group"
      aria-label="Toggle theme"
    >
      <div className="relative h-4 w-4">
        {/* Sun Icon */}
        <div
          className={`absolute inset-0 transform transition-all duration-500 ${
            isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
        >
          <div className="h-4 w-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 relative">
            {/* Sun rays */}
            <div className="absolute -inset-1">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-0.5 w-1 bg-yellow-400 rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-6px)`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Moon Icon */}
        <div
          className={`absolute inset-0 transform transition-all duration-500 ${
            isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          }`}
        >
          <div className="h-4 w-4 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full relative overflow-hidden">
            {/* Moon craters */}
            <div className="absolute top-0.5 left-1 h-1 w-1 bg-slate-400 rounded-full opacity-60" />
            <div className="absolute bottom-1 right-0.5 h-0.5 w-0.5 bg-slate-400 rounded-full opacity-40" />
            <div className="absolute top-1.5 right-1.5 h-0.5 w-0.5 bg-slate-400 rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </Button>
  );
}