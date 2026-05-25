import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Language } from "../types/course";
import { useCourseProgress } from "./useCourseProgress";
import { useLocalStorage } from "./useLocalStorage";

type Theme = "dark" | "light";

type AppState = ReturnType<typeof useCourseProgress> & {
  theme: Theme;
  language: Language;
  setLanguage: (language: Language) => void;
  toggleTheme: () => void;
  championVisible: boolean;
  dismissChampion: () => void;
};

const AppStateContext = createContext<AppState | null>(null);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useLocalStorage<Theme>("course.theme", "dark");
  const [language, setLanguage] = useLocalStorage<Language>("course.language", "ru");
  const progress = useCourseProgress();
  const [championVisible, setChampionVisible] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = language;
  }, [language, theme]);

  useEffect(() => {
    if (progress.allLecturesCompleted) {
      const alreadyCelebrated = sessionStorage.getItem("course.championShown");
      if (!alreadyCelebrated) {
        setChampionVisible(true);
        sessionStorage.setItem("course.championShown", "true");
      }
    }
  }, [progress.allLecturesCompleted]);

  const value = useMemo<AppState>(
    () => ({
      ...progress,
      theme,
      language,
      setLanguage,
      toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")),
      championVisible,
      dismissChampion: () => setChampionVisible(false),
    }),
    [championVisible, language, progress, setLanguage, setTheme, theme],
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used inside AppStateProvider");
  }
  return context;
}
