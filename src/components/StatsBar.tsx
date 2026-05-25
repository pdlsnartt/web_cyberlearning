type StatsBarProps = {
  label: string;
  value: number;
  max?: number;
};

export function StatsBar({ label, value, max = 100 }: StatsBarProps) {
  const percent = Math.max(0, Math.min(100, Math.round((value / max) * 100)));

  return (
    <div className="statsBar">
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
      <div className="statsTrack">
        <div className="statsFill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
