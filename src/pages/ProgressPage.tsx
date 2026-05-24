import { AchievementCards } from "../components/AchievementCards";
import { LevelIndicator } from "../components/LevelIndicator";
import { ProgressBar } from "../components/ProgressBar";
import { t } from "../data/i18n";
import { lectures } from "../data/lectures";
import { useAppState } from "../hooks/useAppState";

export function ProgressPage() {
  const { language, completedLectures, percent, completedCount, totalCount } = useAppState();

  return (
    <section className="sectionBlock">
      <div className="sectionHead">
        <span className="eyebrow">XP Dashboard</span>
        <h1>{t("progress", language)}</h1>
      </div>
      <div className="dashboardGrid">
        <LevelIndicator />
        <div className="widePanel">
          <ProgressBar value={percent} label={`${completedCount}/${totalCount}`} />
        </div>
      </div>
      <AchievementCards />
      <div className="stepsPanel">
        <h2>{language === "ru" ? "Статус лекций" : "Lecture status"}</h2>
        <ul className="statusList">
          {lectures.map((lecture) => (
            <li key={lecture.id}>
              <span>{lecture.title[language]}</span>
              <strong>{completedLectures.includes(lecture.id) ? "DONE" : "NEXT"}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
