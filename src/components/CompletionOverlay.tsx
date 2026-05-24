import { t } from "../data/i18n";
import { useAppState } from "../hooks/useAppState";

export function CompletionOverlay() {
  const { championVisible, dismissChampion, language } = useAppState();

  if (!championVisible) {
    return null;
  }

  return (
    <div className="completionOverlay" role="dialog" aria-modal="true">
      <div className="completionPanel">
        <p className="glitchText">{t("champion", language)}</p>
        <button className="primaryButton" type="button" onClick={dismissChampion}>
          {t("close", language)}
        </button>
      </div>
    </div>
  );
}
