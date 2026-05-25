import { useCallback, useState } from "react";
import type { Language } from "../types/course";

type RunResult = {
  output: string;
};

async function runCSharpSimulation(
  code: string,
  demoOutput: string,
  language: Language,
): Promise<RunResult> {
  const lineCount = code.split("\n").filter(Boolean).length;
  const message =
    language === "ru"
      ? "Код проанализирован локальной имитацией"
      : "Code analyzed by local simulation";

  return {
    output: `${demoOutput}\n\n[demo] ${message}: ${lineCount} lines`,
  };
}

export function useCodeRunner(language: Language) {
  const [output, setOutput] = useState("");

  const run = useCallback(
    async (code: string, demoOutput: string) => {
      const result = await runCSharpSimulation(code, demoOutput, language);
      setOutput(result.output);
    },
    [language],
  );

  return { output, run };
}
