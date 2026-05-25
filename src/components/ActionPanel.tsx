import { useAppState } from "../hooks/useAppState";

type ActionPanelProps = {
  canUpgrade: boolean;
  canHireAnalyst: boolean;
  onTrain: () => void;
  onTournament: () => void;
  onUpgrade: () => void;
  onHireAnalyst: () => void;
  onRecoverMorale: () => void;
};

export function ActionPanel({
  canUpgrade,
  canHireAnalyst,
  onTrain,
  onTournament,
  onUpgrade,
  onHireAnalyst,
  onRecoverMorale,
}: ActionPanelProps) {
  const { language } = useAppState();

  const labels =
    language === "ru"
      ? {
          train: "Провести тренировку",
          tournament: "Отправить на турнир",
          upgrade: "Улучшить оборудование",
          analyst: "Нанять аналитика",
          morale: "Восстановить мораль",
        }
      : {
          train: "Run training",
          tournament: "Send to tournament",
          upgrade: "Upgrade equipment",
          analyst: "Hire analyst",
          morale: "Recover morale",
        };

  return (
    <section className="actionPanel">
      <button className="primaryButton" type="button" onClick={onTrain}>
        {labels.train}
      </button>
      <button className="primaryButton" type="button" onClick={onTournament}>
        {labels.tournament}
      </button>
      <button className="ghostButton" type="button" disabled={!canUpgrade} onClick={onUpgrade}>
        {labels.upgrade}
      </button>
      <button className="ghostButton" type="button" disabled={!canHireAnalyst} onClick={onHireAnalyst}>
        {labels.analyst}
      </button>
      <button className="ghostButton" type="button" onClick={onRecoverMorale}>
        {labels.morale}
      </button>
    </section>
  );
}
