import { useEffect, useState } from "react";

const useTheme = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    const htmlEl = document.querySelector("html") as HTMLElement;
    const isDark = htmlEl.classList.contains("dark");
    if (darkMode && !isDark) htmlEl.classList.add("dark");
    else htmlEl?.classList.remove("dark");
  };

  useEffect(() => toggleDarkMode(), [darkMode]);

  return { setDarkMode, darkMode };
};

export default useTheme;
