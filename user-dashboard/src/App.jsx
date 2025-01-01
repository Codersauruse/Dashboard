import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Dashboard } from "./layouts/index";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard />} />

          <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
