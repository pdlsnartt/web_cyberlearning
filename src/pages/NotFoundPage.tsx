import { Link } from "react-router-dom";
import { useAppState } from "../hooks/useAppState";

export function NotFoundPage() {
  const { language } = useAppState();

  return (
    <section className="sectionBlock centerBlock">
      <span className="eyebrow">404</span>
      <h1>{language === "ru" ? "Раунд не найден" : "Round not found"}</h1>
      <Link className="primaryButton" to="/">
        {language === "ru" ? "На главную" : "Go home"}
      </Link>
    </section>
  );
}
