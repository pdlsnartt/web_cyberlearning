import { LectureCard } from "../components/LectureCard";
import { lectures } from "../data/lectures";
import { useAppState } from "../hooks/useAppState";

export function LecturesPage() {
  const { language } = useAppState();

  return (
    <section className="sectionBlock">
      <div className="sectionHead">
        <span className="eyebrow">{language === "ru" ? "6 уровней сложности" : "6 difficulty levels"}</span>
        <h1>{language === "ru" ? "Лекции курса" : "Course Lectures"}</h1>
      </div>
      <div className="cardGrid">
        {lectures.map((lecture) => (
          <LectureCard key={lecture.id} lecture={lecture} />
        ))}
      </div>
    </section>
  );
}
