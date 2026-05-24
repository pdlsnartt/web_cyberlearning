import { useEffect, useMemo, useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { type QuestionAnswer, TestQuestion } from "../components/TestQuestion";
import { testQuestions } from "../data/testQuestions";
import { useAppState } from "../hooks/useAppState";
import type { TestQuestion as TestQuestionType } from "../types/course";

const TEST_DURATION_SECONDS = 60 * 60;

const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/[.,;:!?()"«»]/g, "")
    .replace(/\s+/g, " ")
    .trim();

const splitCorrectAnswers = (value: string) =>
  value
    .split(",")
    .map((item) => normalize(item))
    .filter(Boolean);

const isAnswered = (answer: QuestionAnswer | undefined) => {
  if (!answer) {
    return false;
  }
  if (typeof answer === "string") {
    return answer.trim().length > 0;
  }
  if (Array.isArray(answer)) {
    return answer.length > 0;
  }
  return Object.values(answer).some((value) => value.trim().length > 0);
};

const isQuestionCorrect = (
  question: TestQuestionType,
  answer: QuestionAnswer | undefined,
  language: "ru" | "en",
) => {
  if (!answer) {
    return false;
  }

  if (question.type === "single") {
    return typeof answer === "string" && normalize(answer) === normalize(question.correctAnswer[language]);
  }

  if (question.type === "multiple") {
    if (!Array.isArray(answer)) {
      return false;
    }
    const selected = answer.map(normalize).sort();
    const correct = splitCorrectAnswers(question.correctAnswer[language]).sort();
    return selected.length === correct.length && selected.every((item, index) => item === correct[index]);
  }

  if (question.type === "matching") {
    if (!question.pairs || typeof answer !== "object" || Array.isArray(answer)) {
      return false;
    }
    return question.pairs.every((pair) => answer[pair.left[language]] === pair.right[language]);
  }

  if (question.type === "written" && typeof answer === "string") {
    const normalizedAnswer = normalize(answer);
    const keywords = normalize(question.correctAnswer[language])
      .split(" ")
      .filter((word) => word.length >= 5);
    return normalizedAnswer.length >= 12 && keywords.some((word) => normalizedAnswer.includes(word));
  }

  return false;
};

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const restSeconds = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${restSeconds}`;
};

export function TestPage() {
  const { language } = useAppState();
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(TEST_DURATION_SECONDS);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [answers, setAnswers] = useState<Record<string, QuestionAnswer>>({});
  const [checkedQuestions, setCheckedQuestions] = useState<string[]>([]);

  const answeredCount = useMemo(
    () => testQuestions.filter((question) => isAnswered(answers[question.id])).length,
    [answers],
  );
  const progress = Math.round((answeredCount / testQuestions.length) * 100);

  const result = useMemo(() => {
    const correct = testQuestions.filter((question) =>
      isQuestionCorrect(question, answers[question.id], language),
    ).length;
    return {
      correct,
      incorrect: testQuestions.length - correct,
      percent: Math.round((correct / testQuestions.length) * 100),
      answeredPercent: Math.round((answeredCount / testQuestions.length) * 100),
    };
  }, [answeredCount, answers, language]);

  useEffect(() => {
    if (!started || finished) {
      return;
    }

    const timerId = window.setInterval(() => {
      setSecondsLeft((current) => {
        if (current <= 1) {
          setFinished(true);
          return 0;
        }
        return current - 1;
      });
      setElapsedSeconds((current) => current + 1);
    }, 1000);

    return () => window.clearInterval(timerId);
  }, [finished, started]);

  const startTest = () => {
    setStarted(true);
    setFinished(false);
    setSecondsLeft(TEST_DURATION_SECONDS);
    setElapsedSeconds(0);
    setAnswers({});
    setCheckedQuestions([]);
  };

  const updateAnswer = (questionId: string, answer: QuestionAnswer) => {
    setAnswers((current) => ({ ...current, [questionId]: answer }));
  };

  const markChecked = (questionId: string) => {
    setCheckedQuestions((current) =>
      current.includes(questionId) ? current : [...current, questionId],
    );
  };

  return (
    <section className="sectionBlock">
      <div className="sectionHead">
        <span className="eyebrow">{language === "ru" ? "30 вопросов" : "30 questions"}</span>
        <h1>{language === "ru" ? "Тестирование" : "Testing"}</h1>
        <ProgressBar value={progress} label={language === "ru" ? "Прогресс ответов" : "Answer progress"} />
      </div>

      <div className="testControlPanel">
        <div>
          <span className="eyebrow">{language === "ru" ? "Таймер" : "Timer"}</span>
          <strong>{formatTime(secondsLeft)}</strong>
          <p>
            {language === "ru"
              ? `Самопроверка открыта: ${checkedQuestions.length}/${testQuestions.length}`
              : `Self-check opened: ${checkedQuestions.length}/${testQuestions.length}`}
          </p>
        </div>
        {!started || finished ? (
          <button className="primaryButton" type="button" onClick={startTest}>
            {language === "ru" ? "Начать тест" : "Start test"}
          </button>
        ) : (
          <button className="primaryButton" type="button" onClick={() => setFinished(true)}>
            {language === "ru" ? "Завершить тест" : "Finish test"}
          </button>
        )}
      </div>

      {finished && (
        <section className="resultPanel">
          <h2>{language === "ru" ? "Результат теста" : "Test result"}</h2>
          <div className="resultGrid">
            <div>
              <span>{language === "ru" ? "Процент прохождения" : "Completion"}</span>
              <strong>{result.answeredPercent}%</strong>
            </div>
            <div>
              <span>{language === "ru" ? "Верных ответов" : "Correct"}</span>
              <strong>{result.correct}</strong>
            </div>
            <div>
              <span>{language === "ru" ? "Неверных ответов" : "Incorrect"}</span>
              <strong>{result.incorrect}</strong>
            </div>
            <div>
              <span>{language === "ru" ? "Затраченное время" : "Time spent"}</span>
              <strong>{formatTime(elapsedSeconds)}</strong>
            </div>
          </div>
          <p>
            {language === "ru"
              ? `Итоговая оценка по автоматической проверке: ${result.percent}%. Письменные ответы оцениваются приблизительно по ключевым словам, поэтому их стоит дополнительно сверить через самопроверку.`
              : `Automatic score: ${result.percent}%. Written answers are checked approximately by keywords, so they should also be reviewed with self-check.`}
          </p>
        </section>
      )}

      {started && (
        <div className="questionList">
          {testQuestions.map((question, index) => (
            <TestQuestion
              key={question.id}
              question={question}
              index={index}
              answer={answers[question.id]}
              disabled={finished}
              onAnswerChange={updateAnswer}
              onSelfCheck={markChecked}
            />
          ))}
        </div>
      )}
    </section>
  );
}
