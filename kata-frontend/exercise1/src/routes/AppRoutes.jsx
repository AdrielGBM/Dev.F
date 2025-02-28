import { Routes, Route } from "react-router";

import App from "../App";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
}

export default AppRoutes;
