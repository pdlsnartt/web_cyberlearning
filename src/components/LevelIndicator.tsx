import { t } from "../data/i18n";
import { useAppState } from "../hooks/useAppState";

export function LevelIndicator() {
  const { language, completedCount, percent } = useAppState();
  const level = completedCount < 2 ? "Rookie" : completedCount < 5 ? "Analyst" : "Champion";

  return (
    <section className="levelPanel">
      <span className="eyebrow">{t("level", language)}</span>
      <strong>{level}</strong>
      <p>XP {percent * 10}</p>
    </section>
  );
}
