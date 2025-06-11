import { useEffect, useState } from "react";

const UseTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "system"
  );

  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const applyTheme = (themeValue) => {
    switch (themeValue) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        if (darkQuery.matches) {
          element.classList.add("dark");
        } else {
          element.classList.remove("dark");
        }
        break;
    }
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const handler = (e) => {
      if (!("theme" in localStorage)) {
        if (e.matches) {
          element.classList.add("dark");
        } else {
          element.classList.remove("dark");
        }
      }
    };

    darkQuery.addEventListener("change", handler);
    return () => darkQuery.removeEventListener("change", handler);
  }, []);

  return [theme, setTheme];
};

export default UseTheme;
