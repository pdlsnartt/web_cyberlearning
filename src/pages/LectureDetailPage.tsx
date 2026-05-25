import { Link, Navigate, useParams } from "react-router-dom";
import { LectureImage } from "../components/LectureImage";
import { ProgressBar } from "../components/ProgressBar";
import { t } from "../data/i18n";
import { lectures } from "../data/lectures";
import { useAppState } from "../hooks/useAppState";

const cleanSectionTitle = (title: string) =>
  title.replace(/^Страница\s+\d+\.\s*/i, "").replace(/^Page\s+\d+\.\s*/i, "");

export function LectureDetailPage() {
  const { lectureId } = useParams();
  const { language, completedLectures, toggleLecture, percent } = useAppState();
  const lecture = lectures.find((item) => item.id === lectureId);

  if (!lecture) {
    return <Navigate to="/lectures" replace />;
  }

  const previous = lectures[lecture.order - 2];
  const next = lectures[lecture.order];
  const isDone = completedLectures.includes(lecture.id);
  const extendedParagraphs = lecture.extendedParagraphs?.[language] ?? [];

  return (
    <article className="detailPage">
      <LectureImage className="detailHeroImage" src={lecture.image} title={lecture.title[language]} />
      <div className="detailHeader">
        <span className="eyebrow">Lecture {lecture.order}</span>
        <h1>{lecture.title[language]}</h1>
        <p>{lecture.content[language]}</p>
        <label className="completeToggle">
          <input type="checkbox" checked={isDone} onChange={() => toggleLecture(lecture.id)} />
          <span>{t("completed", language)}</span>
        </label>
        <ProgressBar value={percent} label={t("courseProgress", language)} />
      </div>

      <section className="lectureTextPanel">
        {lecture.blocks.map((block) => (
          <p key={block.title.ru}>
            <strong>{block.title[language]}.</strong> {block.body[language]}
          </p>
        ))}
      </section>

      <div className="lectureTextFlow">
        {lecture.pages.map((lecturePage) => (
          <section className="lectureTextPanel" key={lecturePage.title.ru}>
            <h2>{cleanSectionTitle(lecturePage.title[language])}</h2>
            {lecturePage.paragraphs[language].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
        {extendedParagraphs.length > 0 && (
          <section className="lectureTextPanel">
            <h2>{language === "ru" ? "Расширенное научное рассмотрение темы" : "Extended Scientific Discussion"}</h2>
            {extendedParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        )}
      </div>

      <section className="lectureTextPanel">
        <h2>{language === "ru" ? "Итог занятия" : "Lesson outcome"}</h2>
        <p>{lecture.outcomes[language].join(" ")}</p>
      </section>

      <nav className="detailNav" aria-label="Lecture navigation">
        {previous && (
          <Link className="ghostButton" to={`/lectures/${previous.id}`}>
            {t("previousLecture", language)}
          </Link>
        )}
        {next && (
          <Link className="ghostButton" to={`/lectures/${next.id}`}>
            {t("nextLecture", language)}
          </Link>
        )}
        <Link className="ghostButton" to="/labs">
          {t("goLabs", language)}
        </Link>
        <Link className="primaryButton" to="/testing">
          {t("takeTest", language)}
        </Link>
      </nav>
    </article>
  );
}
