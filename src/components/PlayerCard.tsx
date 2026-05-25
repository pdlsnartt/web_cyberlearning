import { StatsBar } from "./StatsBar";

export type ManagerPlayer = {
  nickname: string;
  role: string;
  aim: number;
  strategy: number;
  teamwork: number;
  fatigue: number;
};

type PlayerCardProps = {
  player: ManagerPlayer;
};

export function PlayerCard({ player }: PlayerCardProps) {
  return (
    <article className="playerCard">
      <div className="playerTop">
        <h3>{player.nickname}</h3>
        <span className="badge">{player.role}</span>
      </div>
      <StatsBar label="Aim / reaction" value={player.aim} />
      <StatsBar label="Strategy" value={player.strategy} />
      <StatsBar label="Teamwork" value={player.teamwork} />
      <StatsBar label="Fatigue" value={player.fatigue} />
    </article>
  );
}
