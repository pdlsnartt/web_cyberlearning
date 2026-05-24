import { useAppState } from "../hooks/useAppState";

export function LanguageToggle() {
  const { language, setLanguage } = useAppState();

  return (
    <div className="segmented" aria-label="Language switch">
      <button
        className={language === "ru" ? "selected" : ""}
        type="button"
        onClick={() => setLanguage("ru")}
      >
        RU
      </button>
      <button
        className={language === "en" ? "selected" : ""}
        type="button"
        onClick={() => setLanguage("en")}
      >
        EN
      </button>
    </div>
  );
}
