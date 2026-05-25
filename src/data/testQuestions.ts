import type { TestQuestion } from "../types/course";

export const testQuestions: TestQuestion[] = [
  {
    id: "q1",
    type: "single",
    prompt: { ru: "Что чаще всего означает ping в сетевой игре?", en: "What does ping usually mean in an online game?" },
    options: { ru: ["Размер карты", "Задержку соединения", "Количество кадров", "Сложность уровня"], en: ["Map size", "Network latency", "Frame count", "Level difficulty"] },
    correctAnswer: { ru: "Задержку соединения", en: "Network latency" },
    hint: { ru: "Ping связан со временем передачи данных.", en: "Ping is related to data travel time." },
  },
  {
    id: "q2",
    type: "multiple",
    prompt: { ru: "Какие элементы относятся к IT-инфраструктуре киберспорта?", en: "Which elements belong to esports IT infrastructure?" },
    options: { ru: ["Серверы матчей", "Античит", "Базы рейтингов", "Цвет кресла"], en: ["Match servers", "Anti-cheat", "Rating databases", "Chair color"] },
    correctAnswer: { ru: "Серверы матчей, античит, базы рейтингов", en: "Match servers, anti-cheat, rating databases" },
    hint: { ru: "Выбирайте элементы, которые обрабатывают данные или обеспечивают честность.", en: "Choose elements that process data or support fairness." },
  },
  {
    id: "q3",
    type: "written",
    prompt: { ru: "Кратко объясните, почему игры помогают изучать условия if/else.", en: "Briefly explain why games help learn if/else conditions." },
    correctAnswer: { ru: "Игры сразу показывают результат условия: дверь открылась, герой победил или действие не сработало.", en: "Games immediately show condition results: a door opens, the hero wins, or an action fails." },
    hint: { ru: "Подумайте об обратной связи.", en: "Think about feedback." },
  },
  {
    id: "q4",
    type: "matching",
    prompt: { ru: "Сопоставьте понятие и пример.", en: "Match the concept with the example." },
    pairs: [
      { left: { ru: "Переменная", en: "Variable" }, right: { ru: "health = 100", en: "health = 100" } },
      { left: { ru: "Цикл", en: "Loop" }, right: { ru: "Повторить волну врагов", en: "Repeat an enemy wave" } },
      { left: { ru: "Условие", en: "Condition" }, right: { ru: "Если найден ключ", en: "If the key is found" } },
    ],
    correctAnswer: { ru: "Переменная-health, цикл-повторение, условие-if", en: "Variable-health, loop-repeat, condition-if" },
    hint: { ru: "Ищите связь между конструкцией кода и поведением игры.", en: "Connect code constructs with game behavior." },
  },
  {
    id: "q5",
    type: "single",
    prompt: { ru: "Что хранит двумерный массив в мини-бродилке?", en: "What does a two-dimensional array store in a mini adventure game?" },
    options: { ru: ["Только звук", "Карту уровня", "Список турниров", "Пароли игроков"], en: ["Only sound", "Level map", "Tournament list", "Player passwords"] },
    correctAnswer: { ru: "Карту уровня", en: "Level map" },
    hint: { ru: "Карта состоит из строк и столбцов.", en: "A map consists of rows and columns." },
  },
  {
    id: "q6",
    type: "multiple",
    prompt: { ru: "Какие действия входят в игровой цикл?", en: "Which actions belong to a game loop?" },
    options: { ru: ["Прочитать ввод", "Обновить состояние", "Проверить победу", "Удалить проект"], en: ["Read input", "Update state", "Check victory", "Delete the project"] },
    correctAnswer: { ru: "Прочитать ввод, обновить состояние, проверить победу", en: "Read input, update state, check victory" },
    hint: { ru: "Игровой цикл повторяет безопасные действия игры.", en: "A game loop repeats safe game actions." },
  },
  {
    id: "q7",
    type: "single",
    prompt: { ru: "Для чего нужна песочница кода?", en: "Why do we need a code sandbox?" },
    options: { ru: ["Для безопасных экспериментов", "Для покупки игр", "Для замены клавиатуры", "Для увеличения монитора"], en: ["Safe experiments", "Buying games", "Replacing keyboard", "Making monitor bigger"] },
    correctAnswer: { ru: "Для безопасных экспериментов", en: "Safe experiments" },
    hint: { ru: "Ошибка в песочнице не должна ломать основной проект.", en: "A sandbox error should not break the main project." },
  },
  {
    id: "q8",
    type: "written",
    prompt: { ru: "Назовите один пример данных, которые собираются во время матча.", en: "Name one example of data collected during a match." },
    correctAnswer: { ru: "Счет, время раунда, позиция игрока, количество побед или статистика действий.", en: "Score, round time, player position, wins, or action statistics." },
    hint: { ru: "Подойдет любой измеримый параметр матча.", en: "Any measurable match parameter works." },
  },
  {
    id: "q9",
    type: "single",
    prompt: { ru: "Какой оператор C# удобно использовать для выбора по состоянию?", en: "Which C# operator is convenient for choosing by state?" },
    options: { ru: ["switch", "import", "style", "render"], en: ["switch", "import", "style", "render"] },
    correctAnswer: { ru: "switch", en: "switch" },
    hint: { ru: "Он проверяет несколько вариантов значения.", en: "It checks several value variants." },
  },
  {
    id: "q10",
    type: "matching",
    prompt: { ru: "Сопоставьте механику и структуру данных.", en: "Match the mechanic and data structure." },
    pairs: [
      { left: { ru: "Инвентарь", en: "Inventory" }, right: { ru: "Массив предметов", en: "Array of items" } },
      { left: { ru: "Карта", en: "Map" }, right: { ru: "Двумерный массив", en: "2D array" } },
      { left: { ru: "Квест", en: "Quest" }, right: { ru: "Состояние enum", en: "Enum state" } },
    ],
    correctAnswer: { ru: "Инвентарь-массив, карта-2D массив, квест-enum", en: "Inventory-array, map-2D array, quest-enum" },
    hint: { ru: "Вспомните лабораторные работы.", en: "Recall the lab works." },
  },
  ...Array.from({ length: 20 }, (_, index) => {
    const number = index + 11;
    const topics = [
      ["Что лучше всего описывает античит?", "What best describes anti-cheat?", "Система обнаружения нечестных действий", "A system for detecting unfair actions"],
      ["Что такое геймификация?", "What is gamification?", "Использование игровых элементов в обучении", "Using game elements in learning"],
      ["Что делает переменная?", "What does a variable do?", "Хранит значение", "Stores a value"],
      ["Что делает цикл?", "What does a loop do?", "Повторяет действия", "Repeats actions"],
      ["Что проверяет условие победы?", "What does a win condition check?", "Достигнута ли цель игры", "Whether the game goal is reached"],
    ][index % 5];
    return {
      id: `q${number}`,
      type: index % 4 === 0 ? "multiple" : index % 4 === 1 ? "written" : index % 4 === 2 ? "matching" : "single",
      prompt: { ru: topics[0], en: topics[1] },
      options: { ru: [topics[2], "Случайный цвет интерфейса", "Название компьютера", "Громкость музыки"], en: [topics[3], "Random interface color", "Computer name", "Music volume"] },
      pairs: [
        { left: { ru: "Код", en: "Code" }, right: { ru: "Инструкции", en: "Instructions" } },
        { left: { ru: "Интерфейс", en: "Interface" }, right: { ru: "Взаимодействие", en: "Interaction" } },
      ],
      correctAnswer: { ru: topics[2], en: topics[3] },
      hint: { ru: "Ответ связан с основными понятиями лекций.", en: "The answer is connected with the core lecture concepts." },
    } satisfies TestQuestion;
  }),
];
