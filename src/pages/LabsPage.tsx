import { LabCard } from "../components/LabCard";
import { labs } from "../data/labs";
import { useAppState } from "../hooks/useAppState";

export function LabsPage() {
  const { language } = useAppState();

  return (
    <section className="sectionBlock">
      <div className="sectionHead">
        <span className="eyebrow">{language === "ru" ? "8 практических миссий" : "8 practice missions"}</span>
        <h1>{language === "ru" ? "Лабораторные работы" : "Lab Works"}</h1>
      </div>
      <div className="cardGrid">
        {labs.map((lab) => (
          <LabCard key={lab.id} lab={lab} />
        ))}
      </div>
    </section>
  );
}
