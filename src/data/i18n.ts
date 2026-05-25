import type { Language } from "../types/course";

type Dictionary = Record<string, Record<Language, string>>;

export const ui: Dictionary = {
  home: { ru: "Главная", en: "Home" },
  lectures: { ru: "Лекции", en: "Lectures" },
  labs: { ru: "Лабораторные", en: "Labs" },
  testing: { ru: "Тестирование", en: "Testing" },
  progress: { ru: "Прогресс", en: "Progress" },
  pricing: { ru: "Тарифы", en: "Pricing" },
  completed: { ru: "Лекция пройдена", en: "Lecture completed" },
  previousLecture: { ru: "Предыдущая лекция", en: "Previous lecture" },
  nextLecture: { ru: "Следующая лекция", en: "Next lecture" },
  goLabs: { ru: "Лабораторные работы", en: "Lab works" },
  takeTest: { ru: "Пройти тестирование", en: "Take the test" },
  run: { ru: "Запустить", en: "Run" },
  output: { ru: "Вывод", en: "Output" },
  selfCheck: { ru: "Самопроверка", en: "Self-check" },
  correctAnswer: { ru: "Правильный ответ", en: "Correct answer" },
  hint: { ru: "Подсказка", en: "Hint" },
  courseProgress: { ru: "Прогресс курса", en: "Course progress" },
  champion: { ru: "Поздравляю, чемпион!", en: "Congratulations, champion!" },
  close: { ru: "Продолжить", en: "Continue" },
  level: { ru: "Уровень студента", en: "Student level" },
};

export const t = (key: keyof typeof ui, language: Language) => ui[key][language];
