import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { FooterTicker } from "./components/FooterTicker";
import { CompletionOverlay } from "./components/CompletionOverlay";
import { HomePage } from "./pages/HomePage";
import { LecturesPage } from "./pages/LecturesPage";
import { LectureDetailPage } from "./pages/LectureDetailPage";
import { LabsPage } from "./pages/LabsPage";
import { LabDetailPage } from "./pages/LabDetailPage";
import { TestPage } from "./pages/TestPage";
import { ProgressPage } from "./pages/ProgressPage";
import { PricingPage } from "./pages/PricingPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <div className="appShell">
      <Header />
      <main className="pageFrame">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lectures" element={<LecturesPage />} />
          <Route path="/lectures/:lectureId" element={<LectureDetailPage />} />
          <Route path="/labs" element={<LabsPage />} />
          <Route path="/labs/:labId" element={<LabDetailPage />} />
          <Route path="/testing" element={<TestPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/course" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <FooterTicker />
      <CompletionOverlay />
    </div>
  );
}
