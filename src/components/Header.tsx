import { NavLink } from "react-router-dom";
import { ui } from "../data/i18n";
import { useAppState } from "../hooks/useAppState";
import { LanguageToggle } from "./LanguageToggle";
import { ProgressBar } from "./ProgressBar";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  ["home", "/"],
  ["lectures", "/lectures"],
  ["labs", "/labs"],
  ["testing", "/testing"],
  ["progress", "/progress"],
  ["pricing", "/pricing"],
] as const;

export function Header() {
  const { language, percent } = useAppState();

  return (
    <header className="siteHeader">
      <NavLink to="/" className="brand" aria-label="IT x Esports">
        <span className="brandMark">IT</span>
        <span>CyberCourse</span>
      </NavLink>
      <nav className="topNav" aria-label="Primary navigation">
        {navItems.map(([key, href]) => (
          <NavLink key={key} to={href} className={({ isActive }) => (isActive ? "active" : "")}>
            {ui[key][language]}
          </NavLink>
        ))}
      </nav>
      <div className="headerTools">
        <ProgressBar value={percent} compact />
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  );
}
