import {PrimeReactProvider} from "primereact/api";
import "primereact/resources/themes/luna-green/theme.css";
import "primeicons/primeicons.css";
import {
  Routes, Route
} from "react-router-dom";
import LoginPage from "./pages/login/Login";
import DashboardPage from "./pages/dashboard/Dashboard";
function App() {

  return (
    <PrimeReactProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
      </Routes>
    </PrimeReactProvider>
  )
}

export default App
