import { PrimeReactProvider } from "primereact/api";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "primereact/resources/themes/luna-green/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.min.css";
import {
  Routes, Route
} from "react-router-dom";
import LoginPage from "./pages/login/Login";
import DashboardPage from "./pages/dashboard/index";
import ProfilePage from "./pages/profile";

function App() {

  console.log(import.meta.env.VITE_APP_GOOGLE_CLIENT_ID);
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_GOOGLE_CLIENT_ID} >
      <PrimeReactProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </PrimeReactProvider>
    </GoogleOAuthProvider>
  )
}

export default App
