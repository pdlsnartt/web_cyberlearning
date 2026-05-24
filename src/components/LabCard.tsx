import { Link } from "react-router-dom";
import type { Lab } from "../types/course";
import { useAppState } from "../hooks/useAppState";

export function LabCard({ lab }: { lab: Lab }) {
  const { language } = useAppState();

  return (
    <Link className="contentCard labCard" to={`/labs/${lab.id}`}>
      <span className="eyebrow">Lab {lab.order}</span>
      <h3>{lab.title[language]}</h3>
      <p>{lab.summary[language]}</p>
      <span className="badge">{lab.difficulty[language]}</span>
    </Link>
  );
}
