import { useAppState } from "../hooks/useAppState";

export function PricingCards() {
  const { language } = useAppState();

  const cards = [
    {
      name: { ru: "Обычный", en: "Standard" },
      price: { ru: "Бесплатно", en: "Free" },
      perks: {
        ru: ["6 лекций", "8 лабораторных", "Тестирование", "Локальный прогресс"],
        en: ["6 lectures", "8 labs", "Testing", "Local progress"],
      },
    },
    {
      name: { ru: "PRO-подписка", en: "PRO Subscription" },
      price: { ru: "Для интенсивного трека", en: "For the intensive track" },
      perks: {
        ru: ["Личный ментор", "Индивидуальные занятия", "Расширенная база знаний", "Дополнительные практические задания"],
        en: ["Personal mentor", "Individual sessions", "Extended knowledge base", "Additional practical tasks"],
      },
    },
  ];

  return (
    <div className="pricingGrid">
      {cards.map((card) => (
        <article className="priceCard" key={card.name.ru}>
          <span className="eyebrow">{card.price[language]}</span>
          <h3>{card.name[language]}</h3>
          <ul>
            {card.perks[language].map((perk) => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
