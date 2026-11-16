import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
};

/**
 * Light/dark theme state. The theme is applied as a `dark` class on <html>
 * (see the `dark` custom variant in index.css) and persisted to localStorage.
 * index.html applies the stored theme before React mounts to avoid a flash.
 */
const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    []
  );

  return { theme, toggleTheme };
};

export default useTheme;
