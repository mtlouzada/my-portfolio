"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

/**
 * Theme for the /cripto world only. Independent from the main site theme:
 * it reads/writes its own key and sets `data-ctheme` on <html>, which the
 * scoped .cripto-root CSS reacts to.
 */
export function useCriptoTheme() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    let t = document.documentElement.getAttribute("data-ctheme") as Theme | null;
    if (t !== "light" && t !== "dark") {
      try {
        t = localStorage.getItem("cripto-theme") as Theme | null;
      } catch {
        t = null;
      }
      if (t !== "light" && t !== "dark") {
        t =
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
      }
      document.documentElement.setAttribute("data-ctheme", t);
    }
    setTheme(t);
  }, []);

  const toggle = () => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-ctheme", next);
      try {
        localStorage.setItem("cripto-theme", next);
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  return { theme, toggle };
}
