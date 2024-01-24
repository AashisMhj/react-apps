//
import "./app.css";
import DashboardPage from "./pages/dashboardPage/Dashboard";
import SortableJs from "./pages/sortableJsPage/SortableJs";
import NestableJs from "./pages/reactNestable/ReactNestableJs";
import DnDPage from "./pages/dndPage/DnD";
import ReactDraggable from "./pages/reactDraggable/ReactDraggablePage";
import { useURLContext } from "./context/URLContext";

function App() {
  const {currentPath} = useURLContext()
 
  return (
      <div>
        {currentPath === "/" && <DashboardPage />}
        {currentPath === "/sortable_js" && <SortableJs />}
        {currentPath === "/nestable" && <NestableJs />}
        {currentPath === "/dnd" && <DnDPage />}
        {currentPath === "/draggable" && <ReactDraggable />}
      </div>
  )
}

export default App
