import { lectures } from "../data/lectures";
import { useAppState } from "../hooks/useAppState";

export function FooterTicker() {
  const { language, completedCount, totalCount, percent, completedLectures } = useAppState();
  const nextLecture =
    lectures.find((lecture) => !completedLectures.includes(lecture.id)) ?? lectures[lectures.length - 1];

  const text =
    language === "ru"
      ? `Прогресс курса: ${completedCount}/${totalCount} лекций, ${percent}%. Следующее занятие: ${nextLecture.title.ru}. Не забудь лабораторную практику.`
      : `Course progress: ${completedCount}/${totalCount} lectures, ${percent}%. Next session: ${nextLecture.title.en}. Remember the lab practice.`;

  return (
    <footer className="ticker" aria-label="Course ticker">
      <div className="tickerLine">
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </footer>
  );
}
