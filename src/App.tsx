import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { BaseLayout } from "./widgets/BaseLayout/BaseLayout.tsx";

function App() {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </BaseLayout>
    </Router>
  );
}

export default App;
