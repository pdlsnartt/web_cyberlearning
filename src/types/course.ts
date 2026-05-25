export type Language = "ru" | "en";

export type LocalizedString = Record<Language, string>;

export type LocalizedList = Record<Language, string[]>;

export type LectureBlock = {
  title: LocalizedString;
  body: LocalizedString;
};

export type LecturePage = {
  title: LocalizedString;
  paragraphs: LocalizedList;
  keyPoints: LocalizedList;
};

export type Lecture = {
  id: string;
  order: number;
  title: LocalizedString;
  summary: LocalizedString;
  image: string;
  content: LocalizedString;
  blocks: LectureBlock[];
  pages: LecturePage[];
  extendedParagraphs?: LocalizedList;
  outcomes: LocalizedList;
};

export type Lab = {
  id: string;
  order: number;
  title: LocalizedString;
  summary: LocalizedString;
  difficulty: LocalizedString;
  starterCode: string;
  demoOutput: LocalizedString;
  steps: LocalizedList;
};

export type QuestionType = "single" | "multiple" | "matching" | "written";

export type TestQuestion = {
  id: string;
  type: QuestionType;
  prompt: LocalizedString;
  options?: LocalizedList;
  pairs?: {
    left: LocalizedString;
    right: LocalizedString;
  }[];
  correctAnswer: LocalizedString;
  hint: LocalizedString;
};
