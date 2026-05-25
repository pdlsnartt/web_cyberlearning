import { Link } from "react-router-dom";
import type { Lecture } from "../types/course";
import { useAppState } from "../hooks/useAppState";
import { LectureImage } from "./LectureImage";

export function LectureCard({ lecture }: { lecture: Lecture }) {
  const { language, completedLectures } = useAppState();
  const isDone = completedLectures.includes(lecture.id);

  return (
    <Link className={`contentCard lectureCard ${isDone ? "done" : ""}`} to={`/lectures/${lecture.id}`}>
      <LectureImage src={lecture.image} title={lecture.title[language]} />
      <div>
        <span className="eyebrow">Lecture {lecture.order}</span>
        <h3>{lecture.title[language]}</h3>
        <p>{lecture.summary[language]}</p>
      </div>
      <span className="badge">{isDone ? "XP +100" : "LOCKED-IN"}</span>
    </Link>
  );
}
