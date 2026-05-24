import { Link, Navigate, useParams } from "react-router-dom";
import { CodeSandbox } from "../components/CodeSandbox";
import { labs } from "../data/labs";
import { useAppState } from "../hooks/useAppState";

export function LabDetailPage() {
  const { labId } = useParams();
  const { language } = useAppState();
  const lab = labs.find((item) => item.id === labId);

  if (!lab) {
    return <Navigate to="/labs" replace />;
  }

  return (
    <article className="detailPage">
      <div className="detailHeader compactHeader">
        <span className="eyebrow">Lab {lab.order} / {lab.difficulty[language]}</span>
        <h1>{lab.title[language]}</h1>
        <p>{lab.summary[language]}</p>
      </div>

      <section className="stepsPanel">
        <h2>{language === "ru" ? "Пошаговое выполнение" : "Step-by-step workflow"}</h2>
        <ol>
          {lab.steps[language].map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <CodeSandbox starterCode={lab.starterCode} demoOutput={lab.demoOutput[language]} />

      <nav className="detailNav">
        <Link className="ghostButton" to="/labs">{language === "ru" ? "Все лабораторные" : "All labs"}</Link>
        <Link className="primaryButton" to="/testing">{language === "ru" ? "Закрепить тестом" : "Practice with test"}</Link>
      </nav>
    </article>
  );
}
