import { useEffect, useState } from "react"
import DashboardPage from "./pages/Dashboard";
import SortableJs from "./pages/SortableJs";
import "./app.css";
import NestableJs from "./pages/NestableJs";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(()=>{
    const handlePropsState = () =>{
      setCurrentPath(window.location.pathname);
    }

    // popstate event listener to handle back/forward navigation
    window.addEventListener('popstate', handlePropsState);

    return () =>{
      window.removeEventListener('popstate', handlePropsState);
    }
  }, []);

  const navigate = (path:string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  }
  return (
    <div>
      {currentPath === "/" && <DashboardPage navigate={navigate} />}
      {currentPath === "/sortable_js" && <SortableJs />}
      {currentPath === "/nestable" && <NestableJs />}
    </div>
  )
}

export default App
