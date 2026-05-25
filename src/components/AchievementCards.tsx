import { useAppState } from "../hooks/useAppState";

export function AchievementCards() {
  const { language, completedCount } = useAppState();
  const achievements = [
    { threshold: 1, ru: "Первый вход", en: "First Login" },
    { threshold: 3, ru: "Тактик данных", en: "Data Tactician" },
    { threshold: 6, ru: "Киберчемпион", en: "Cyber Champion" },
  ];

  return (
    <div className="achievementGrid">
      {achievements.map((item) => (
        <article className={completedCount >= item.threshold ? "achievement unlocked" : "achievement"} key={item.ru}>
          <span className="badge">LVL {item.threshold}</span>
          <h3>{item[language]}</h3>
        </article>
      ))}
    </div>
  );
}
