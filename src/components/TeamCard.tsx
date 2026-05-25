import { useAppState } from "../hooks/useAppState";
import { StatsBar } from "./StatsBar";

export type ManagerTeam = {
  name: string;
  discipline: string;
  rating: number;
  budget: number;
  morale: number;
  preparation: number;
  wins: number;
  losses: number;
};

type TeamCardProps = {
  team: ManagerTeam;
  winChance: number;
};

export function TeamCard({ team, winChance }: TeamCardProps) {
  const { language } = useAppState();

  return (
    <section className="teamCard">
      <div className="teamHeader">
        <div>
          <span className="eyebrow">{team.discipline}</span>
          <h2>{team.name}</h2>
        </div>
        <div className="teamRecord">
          <strong>{team.wins}</strong>
          <span>W</span>
          <strong>{team.losses}</strong>
          <span>L</span>
        </div>
      </div>
      <div className="teamStatsGrid">
        <StatsBar label={language === "ru" ? "Рейтинг" : "Rating"} value={team.rating} max={1800} />
        <StatsBar label={language === "ru" ? "Бюджет" : "Budget"} value={team.budget} max={100000} />
        <StatsBar label={language === "ru" ? "Мораль" : "Morale"} value={team.morale} />
        <StatsBar label={language === "ru" ? "Подготовка" : "Preparation"} value={team.preparation} />
        <StatsBar label={language === "ru" ? "Шанс победы" : "Win chance"} value={winChance} />
      </div>
    </section>
  );
}
