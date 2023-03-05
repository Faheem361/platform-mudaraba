import "./App.css";
import PublicRoutes from "./routes/routes";
import { ProSidebarProvider } from "react-pro-sidebar";
function App() {
  return (
    // <ProSidebarProvider>
    <div className="App">
      <PublicRoutes />
    </div>
    // </ProSidebarProvider>
  );
}

export default App;
