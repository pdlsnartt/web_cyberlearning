import { Link } from "react-router-dom";
import { AchievementCards } from "../components/AchievementCards";
import { LevelIndicator } from "../components/LevelIndicator";
import { PricingCards } from "../components/PricingCards";
import { ProgressBar } from "../components/ProgressBar";
import { t } from "../data/i18n";
import { useAppState } from "../hooks/useAppState";

export function HomePage() {
  const { language, percent } = useAppState();

  const annotation =
    language === "ru"
      ? "Курс посвящен тому, как информационные технологии формируют современный компьютерный спорт: от серверов и данных до игровых интерфейсов и программирования. Студент узнает, как устроены цифровые соревнования, почему важны задержка, честность и аналитика, а также как игровые механики помогают освоить код. Практическая часть ведет от простых консольных программ к прототипу мини-игры на C#. Такой набор навыков полезен будущим разработчикам, аналитикам, тренерам и всем, кто хочет понимать киберспорт не только как зрелище, но и как технологическую систему."
      : "The course explores how information technologies shape modern esports: from servers and data to game interfaces and programming. Students learn how digital competitions work, why latency, fairness, and analytics matter, and how game mechanics help master code. The practical track moves from simple console programs to a C# mini-game prototype. These skills are useful for future developers, analysts, coaches, and anyone who wants to understand esports as a technological system, not only as entertainment.";

  return (
    <div className="homePage">
      <section className="hero">
        <div className="heroContent">
          <span className="eyebrow">IT / ESPORTS / C#</span>
          <h1>{language === "ru" ? "Информационные технологии в компьютерном спорте" : "Information Technology in Esports"}</h1>
          <p>{annotation}</p>
          <div className="heroActions">
            <Link className="primaryButton" to="/lectures">
              {t("lectures", language)}
            </Link>
            <Link className="ghostButton" to="/labs">
              {t("labs", language)}
            </Link>
          </div>
        </div>
      </section>

      <section className="dashboardBand">
        <div className="dashboardGrid">
          <LevelIndicator />
          <div className="widePanel">
            <ProgressBar value={percent} label={t("courseProgress", language)} />
          </div>
        </div>
        <AchievementCards />
      </section>

      <section className="sectionBlock">
        <div className="sectionHead">
          <span className="eyebrow">{language === "ru" ? "Форматы прохождения" : "Learning options"}</span>
          <h2>{t("pricing", language)}</h2>
        </div>
        <PricingCards />
      </section>
    </div>
  );
}
