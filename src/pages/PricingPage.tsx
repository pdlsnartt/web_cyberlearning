import { PricingCards } from "../components/PricingCards";
import { t } from "../data/i18n";
import { useAppState } from "../hooks/useAppState";

export function PricingPage() {
  const { language } = useAppState();

  return (
    <section className="sectionBlock">
      <div className="sectionHead">
        <span className="eyebrow">{language === "ru" ? "Учись в своем темпе" : "Learn at your pace"}</span>
        <h1>{t("pricing", language)}</h1>
      </div>
      <PricingCards />
    </section>
  );
}
