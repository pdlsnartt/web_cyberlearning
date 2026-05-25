import { useState } from "react";
import { t } from "../data/i18n";
import { useAppState } from "../hooks/useAppState";
import type { TestQuestion as TestQuestionType } from "../types/course";

export type QuestionAnswer = string | string[] | Record<string, string>;

type TestQuestionProps = {
  question: TestQuestionType;
  index: number;
  answer: QuestionAnswer | undefined;
  disabled?: boolean;
  onAnswerChange: (questionId: string, answer: QuestionAnswer) => void;
  onSelfCheck: (questionId: string) => void;
};

export function TestQuestion({
  question,
  index,
  answer,
  disabled = false,
  onAnswerChange,
  onSelfCheck,
}: TestQuestionProps) {
  const { language } = useAppState();
  const [checked, setChecked] = useState(false);
  const selectedMultiple = Array.isArray(answer) ? answer : [];
  const matchingAnswer =
    answer && typeof answer === "object" && !Array.isArray(answer) ? answer : {};

  const toggleMultiple = (option: string) => {
    const nextAnswer = selectedMultiple.includes(option)
      ? selectedMultiple.filter((item) => item !== option)
      : [...selectedMultiple, option];
    onAnswerChange(question.id, nextAnswer);
  };

  return (
    <article className="questionCard">
      <div className="questionTop">
        <span className="badge">Q{index + 1}</span>
        <span className="eyebrow">{question.type}</span>
      </div>
      <h3>{question.prompt[language]}</h3>

      {question.options && question.type === "single" && (
        <div className="answerGrid">
          {question.options[language].map((option) => (
            <label key={option} className="answerOption">
              <input
                type="radio"
                name={question.id}
                checked={answer === option}
                disabled={disabled}
                onChange={() => onAnswerChange(question.id, option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      )}

      {question.options && question.type === "multiple" && (
        <div className="answerGrid">
          {question.options[language].map((option) => (
            <label key={option} className="answerOption">
              <input
                type="checkbox"
                checked={selectedMultiple.includes(option)}
                disabled={disabled}
                onChange={() => toggleMultiple(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      )}

      {question.type === "matching" && question.pairs && (
        <div className="matchingGrid">
          {question.pairs.map((pair) => (
            <label key={pair.left.ru} className="matchRow">
              <span>{pair.left[language]}</span>
              <select
                value={matchingAnswer[pair.left[language]] ?? ""}
                disabled={disabled}
                onChange={(event) =>
                  onAnswerChange(question.id, {
                    ...matchingAnswer,
                    [pair.left[language]]: event.target.value,
                  })
                }
              >
                <option value="">{language === "ru" ? "Выберите соответствие" : "Choose match"}</option>
                {question.pairs?.map((optionPair) => (
                  <option key={optionPair.right.ru} value={optionPair.right[language]}>
                    {optionPair.right[language]}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>
      )}

      {question.type === "written" && (
        <textarea
          className="writtenAnswer"
          value={typeof answer === "string" ? answer : ""}
          disabled={disabled}
          placeholder={language === "ru" ? "Ваш ответ..." : "Your answer..."}
          onChange={(event) => onAnswerChange(question.id, event.target.value)}
        />
      )}

      <button
        className="ghostButton"
        type="button"
        disabled={disabled}
        onClick={() => {
          setChecked(true);
          onSelfCheck(question.id);
        }}
      >
        {t("selfCheck", language)}
      </button>
      {checked && (
        <div className="checkPanel">
          <p>
            <strong>{t("correctAnswer", language)}:</strong> {question.correctAnswer[language]}
          </p>
          <p>
            <strong>{t("hint", language)}:</strong> {question.hint[language]}
          </p>
        </div>
      )}
    </article>
  );
}
