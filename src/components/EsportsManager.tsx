import { useMemo, useState } from "react";
import { useAppState } from "../hooks/useAppState";
import { ActionPanel } from "./ActionPanel";
import { EventLog } from "./EventLog";
import { type ManagerPlayer, PlayerCard } from "./PlayerCard";
import { type ManagerTeam, TeamCard } from "./TeamCard";

const clamp = (value: number, min = 0, max = 100) => Math.max(min, Math.min(max, value));

const starterTeams: ManagerTeam[] = [
  {
    name: "Neon Wolves",
    discipline: "Tactical Shooter",
    rating: 1200,
    budget: 52000,
    morale: 72,
    preparation: 64,
    wins: 8,
    losses: 5,
  },
  {
    name: "Pixel Storm",
    discipline: "MOBA",
    rating: 1340,
    budget: 43000,
    morale: 66,
    preparation: 70,
    wins: 11,
    losses: 7,
  },
];

const starterPlayers: ManagerPlayer[] = [
  { nickname: "ByteFox", role: "Captain", aim: 78, strategy: 84, teamwork: 80, fatigue: 18 },
  { nickname: "NovaQ", role: "Entry", aim: 88, strategy: 62, teamwork: 70, fatigue: 26 },
  { nickname: "Stack", role: "Support", aim: 70, strategy: 80, teamwork: 86, fatigue: 20 },
  { nickname: "Vector", role: "Analyst IGL", aim: 66, strategy: 90, teamwork: 82, fatigue: 22 },
];

export function EsportsManager() {
  const { language } = useAppState();
  const [team, setTeam] = useState<ManagerTeam>(starterTeams[0]);
  const [players, setPlayers] = useState<ManagerPlayer[]>(starterPlayers);
  const [customName, setCustomName] = useState("");
  const [lastResult, setLastResult] = useState(
    language === "ru"
      ? "Панель менеджера готова к решениям."
      : "Manager dashboard is ready for decisions.",
  );
  const [events, setEvents] = useState<string[]>([
    language === "ru"
      ? "Сезон 2026 открыт. Команда ожидает распоряжений менеджера."
      : "Season 2026 is open. The team awaits manager decisions.",
  ]);
  const selectedTeamIsStarter = starterTeams.some((item) => item.name === team.name);

  const playerAverage = useMemo(() => {
    const total = players.reduce(
      (sum, player) => sum + player.aim + player.strategy + player.teamwork - player.fatigue * 0.45,
      0,
    );
    return Math.round(total / (players.length * 3));
  }, [players]);

  const winChance = useMemo(() => {
    const ratingFactor = (team.rating - 900) / 18;
    const chance = playerAverage * 0.35 + team.preparation * 0.27 + team.morale * 0.23 + ratingFactor * 0.15;
    return clamp(Math.round(chance), 12, 92);
  }, [playerAverage, team.morale, team.preparation, team.rating]);

  const pushEvent = (event: string) => {
    setEvents((current) => [event, ...current].slice(0, 8));
    setLastResult(event);
  };

  const chooseTeam = (selectedName: string) => {
    const selected = starterTeams.find((item) => item.name === selectedName);
    if (selected) {
      setTeam(selected);
      pushEvent(
        language === "ru"
          ? `Выбрана команда ${selected.name}. Дисциплина: ${selected.discipline}.`
          : `Selected team ${selected.name}. Discipline: ${selected.discipline}.`,
      );
    }
  };

  const createTeam = () => {
    const name = customName.trim();
    if (!name) {
      return;
    }
    setTeam({
      name,
      discipline: "Esports Multigame",
      rating: 1000,
      budget: 40000,
      morale: 70,
      preparation: 58,
      wins: 0,
      losses: 0,
    });
    setCustomName("");
    pushEvent(
      language === "ru"
        ? `Создана новая команда ${name}. Начинается путь к чемпионству.`
        : `Created new team ${name}. The path to the championship begins.`,
    );
  };

  const train = () => {
    setTeam((current) => ({
      ...current,
      preparation: clamp(current.preparation + 8),
      morale: clamp(current.morale - 3),
      budget: Math.max(0, current.budget - 2500),
    }));
    setPlayers((current) =>
      current.map((player) => ({
        ...player,
        aim: clamp(player.aim + 2),
        strategy: clamp(player.strategy + 1),
        teamwork: clamp(player.teamwork + 2),
        fatigue: clamp(player.fatigue + 7),
      })),
    );
    pushEvent(
      language === "ru"
        ? "Проведена интенсивная тренировка: подготовка выросла, бюджет уменьшен, усталость игроков увеличилась."
        : "Intensive training completed: preparation increased, budget decreased, player fatigue increased.",
    );
  };

  const playTournament = () => {
    const roll = Math.floor(Math.random() * 100) + 1;
    const won = roll <= winChance;

    setTeam((current) => ({
      ...current,
      rating: Math.max(600, current.rating + (won ? 35 : -24)),
      budget: Math.max(0, current.budget + (won ? 12000 : -5000)),
      morale: clamp(current.morale + (won ? 10 : -12)),
      preparation: clamp(current.preparation - 7),
      wins: current.wins + (won ? 1 : 0),
      losses: current.losses + (won ? 0 : 1),
    }));
    setPlayers((current) =>
      current.map((player) => ({
        ...player,
        fatigue: clamp(player.fatigue + 10),
        strategy: clamp(player.strategy + (won ? 2 : 0)),
      })),
    );
    pushEvent(
      won
        ? language === "ru"
          ? "Команда выиграла турнир: рейтинг увеличен, бюджет пополнен, мораль выросла."
          : "The team won the tournament: rating increased, budget improved, morale rose."
        : language === "ru"
          ? "Команда проиграла матч: рейтинг снизился, бюджет уменьшен, мораль просела."
          : "The team lost the match: rating decreased, budget dropped, morale fell.",
    );
  };

  const upgradeEquipment = () => {
    setTeam((current) => ({
      ...current,
      budget: Math.max(0, current.budget - 9000),
      preparation: clamp(current.preparation + 5),
      morale: clamp(current.morale + 4),
    }));
    setPlayers((current) =>
      current.map((player) => ({
        ...player,
        aim: clamp(player.aim + 4),
        fatigue: clamp(player.fatigue - 3),
      })),
    );
    pushEvent(
      language === "ru"
        ? "Оборудование улучшено: aim/реакция игроков выросли, бюджет уменьшен."
        : "Equipment upgraded: player aim/reaction improved, budget decreased.",
    );
  };

  const hireAnalyst = () => {
    setTeam((current) => ({
      ...current,
      budget: Math.max(0, current.budget - 7000),
      preparation: clamp(current.preparation + 6),
    }));
    setPlayers((current) =>
      current.map((player) => ({
        ...player,
        strategy: clamp(player.strategy + 5),
        teamwork: clamp(player.teamwork + 2),
      })),
    );
    pushEvent(
      language === "ru"
        ? "Нанят аналитик: стратегия и командная работа заметно улучшились."
        : "Analyst hired: strategy and teamwork improved noticeably.",
    );
  };

  const recoverMorale = () => {
    setTeam((current) => ({
      ...current,
      budget: Math.max(0, current.budget - 3500),
      morale: clamp(current.morale + 14),
    }));
    setPlayers((current) =>
      current.map((player) => ({
        ...player,
        fatigue: clamp(player.fatigue - 12),
      })),
    );
    pushEvent(
      language === "ru"
        ? "Проведено восстановление: мораль выросла, усталость игроков снизилась."
        : "Recovery session completed: morale increased, player fatigue decreased.",
    );
  };

  return (
    <section className="managerPanel">
      <div className="managerHeader">
        <div>
          <span className="eyebrow">Esports Manager 2026</span>
          <h2>{language === "ru" ? "Киберспортивный менеджер 2026" : "Esports Manager 2026"}</h2>
          <p>
            {language === "ru"
              ? "Управляйте составом, бюджетом, моралью и подготовкой команды перед турнирами."
              : "Manage roster, budget, morale, and preparation before tournaments."}
          </p>
        </div>
        <div className="teamPicker">
          <select value={team.name} onChange={(event) => chooseTeam(event.target.value)}>
            {!selectedTeamIsStarter && (
              <option value={team.name}>
                {team.name}
              </option>
            )}
            {starterTeams.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
          <input
            value={customName}
            onChange={(event) => setCustomName(event.target.value)}
            placeholder={language === "ru" ? "Новая команда" : "New team"}
          />
          <button className="ghostButton" type="button" onClick={createTeam}>
            {language === "ru" ? "Создать" : "Create"}
          </button>
        </div>
      </div>

      <TeamCard team={team} winChance={winChance} />
      <div className="resultBanner">{lastResult}</div>
      <ActionPanel
        canUpgrade={team.budget >= 9000}
        canHireAnalyst={team.budget >= 7000}
        onTrain={train}
        onTournament={playTournament}
        onUpgrade={upgradeEquipment}
        onHireAnalyst={hireAnalyst}
        onRecoverMorale={recoverMorale}
      />
      <div className="managerGrid">
        <section className="playersPanel">
          {players.map((player) => (
            <PlayerCard key={player.nickname} player={player} />
          ))}
        </section>
        <EventLog events={events} />
      </div>
    </section>
  );
}
