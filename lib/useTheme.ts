"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  // Sync with whatever the inline layout script already applied.
  useEffect(() => {
    const current = (document.documentElement.getAttribute("data-theme") ??
      "light") as Theme;
    setTheme(current);
  }, []);

  const toggle = () => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("ml-theme", next);
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  return { theme, toggle };
}
