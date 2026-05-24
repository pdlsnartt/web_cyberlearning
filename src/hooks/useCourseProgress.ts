import { lectures } from "../data/lectures";
import { useLocalStorage } from "./useLocalStorage";

export function useCourseProgress() {
  const [completedLectures, setCompletedLectures] = useLocalStorage<string[]>(
    "course.completedLectures",
    [],
  );

  const toggleLecture = (lectureId: string) => {
    setCompletedLectures((current) =>
      current.includes(lectureId)
        ? current.filter((id) => id !== lectureId)
        : [...current, lectureId],
    );
  };

  const completedCount = completedLectures.length;
  const totalCount = lectures.length;
  const percent = Math.round((completedCount / totalCount) * 100);
  const allLecturesCompleted = completedCount === totalCount;

  return {
    completedLectures,
    toggleLecture,
    completedCount,
    totalCount,
    percent,
    allLecturesCompleted,
  };
}
