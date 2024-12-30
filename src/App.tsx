import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "./pages/module/DashboardLayout";

const App = () => {
  return (
    <div style={{ backgroundColor: "#FCFCFF" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
