import { useEffect, useState } from "react"
import DashboardPage from "./pages/dashboardPage/Dashboard";
import SortableJs from "./pages/sortableJsPage/SortableJs";
import "./app.css";
import NestableJs from "./pages/reactNestable/ReactNestableJs";
import DnDPage from "./pages/dndPage/DnD";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(()=>{
    const handlePropsState = () =>{
      console.log('changed');
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
      {currentPath === "/dnd" && <DnDPage />}
    </div>
  )
}

export default App
