import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "./pages/module/DashboardLayout";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div style={{ backgroundColor: "#FCFCFF" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
