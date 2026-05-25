# IT x Esports Course

Многостраничный образовательный сайт на React + Vite + TypeScript о роли информационных технологий в компьютерном спорте.

## Запуск

```bash
npm install
npm run dev
```

## Структура

- `src/components` — переиспользуемые UI-компоненты
- `src/pages` — страницы маршрутов
- `src/data` — локальные данные лекций, лабораторных и тестов
- `src/hooks` — localStorage, прогресс, язык, тема и имитация C# runner
- `src/styles` — глобальные стили, темы и адаптивность
- `src/types` — типы курса

Backend не используется. C# sandbox сейчас работает через локальную имитацию в `src/hooks/useCodeRunner.ts`, чтобы позже ее можно было заменить реальным backend runner.
