"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle({ isScrolled }: { isScrolled?: boolean }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={`p-2 rounded-full transition-colors flex items-center justify-center ${
        isScrolled
          ? "hover:bg-gray-200 dark:hover:bg-gray-800 text-black dark:text-white"
          : "hover:bg-white/20 text-white"
      }`}
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </button>
  );
}
