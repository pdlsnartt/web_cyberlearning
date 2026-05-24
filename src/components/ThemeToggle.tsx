import { useAppState } from "../hooks/useAppState";

export function ThemeToggle() {
  const { theme, toggleTheme } = useAppState();

  return (
    <button className="iconButton" type="button" onClick={toggleTheme} title="Theme">
      {theme === "dark" ? "☾" : "☀"}
    </button>
  );
}
