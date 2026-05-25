type ProgressBarProps = {
  value: number;
  label?: string;
  compact?: boolean;
};

export function ProgressBar({ value, label, compact = false }: ProgressBarProps) {
  return (
    <div className={compact ? "progress compact" : "progress"}>
      {label && <span>{label}</span>}
      <div className="progressTrack" aria-label={label} aria-valuenow={value} role="progressbar">
        <div className="progressFill" style={{ width: `${value}%` }} />
      </div>
      {!compact && <strong>{value}%</strong>}
    </div>
  );
}
