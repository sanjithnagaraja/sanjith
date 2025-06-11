import { useState } from "react";
import UseTheme from "./UseTheme";
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/20/solid';

const themes = {
  light: { name: "Light", Icon: <SunIcon width={20} height={20} /> },
  dark: { name: "Dark", Icon: <MoonIcon width={20} height={20} /> },
  system: { name: "System", Icon: <ComputerDesktopIcon width={20} height={20} /> },
};

const ThemeToggle = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [theme, setTheme] = UseTheme();

  const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen);
  };

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    setDropDownOpen(false);
  };

  return (
    <section className="relative w-28 z-20">
      <button
        onClick={toggleDropDown}
        className="flex items-center gap-2 p-2 bg-primary/5 text-textBase/85 rounded-md shadow  hover:bg-textBase/85 hover:text-primary transition-all duration-300"
      >
        {themes[theme].Icon}
      </button>

      {dropDownOpen && (
        <ul className="absolute top-12 -left-20 bg-primary/5 text-textBase border dark:border-gray-700 rounded shadow w-full z-30">
          {Object.entries(themes).map(([key, { name, Icon }]) => (
            <li key={key}>
              <button
                onClick={() => handleThemeChange(key)}
                className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {Icon}
                <span>{name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ThemeToggle;
