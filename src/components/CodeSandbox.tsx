import { useState } from "react";
import { t } from "../data/i18n";
import { useAppState } from "../hooks/useAppState";
import { useCodeRunner } from "../hooks/useCodeRunner";

type CodeSandboxProps = {
  starterCode: string;
  demoOutput: string;
};

export function CodeSandbox({ starterCode, demoOutput }: CodeSandboxProps) {
  const [code, setCode] = useState(starterCode);
  const { language } = useAppState();
  const { output, run } = useCodeRunner(language);

  const runCode = () => {
    void run(code, demoOutput);
  };

  return (
    <section className="sandbox">
      <div className="sandboxHeader">
        <h2>C# Sandbox</h2>
        <button className="primaryButton" type="button" onClick={runCode}>
          {t("run", language)}
        </button>
      </div>
      <textarea value={code} onChange={(event) => setCode(event.target.value)} spellCheck={false} />
      <div className="outputPanel">
        <strong>{t("output", language)}</strong>
        <pre>{output || ">"}</pre>
      </div>
    </section>
  );
}
