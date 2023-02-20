import logo from "./logo.svg";
import "./App.css";
import PublicRoutes from "./routes/routes";
import ResponsiveDrawer from "./components/sideMenu/drawer";

function App() {
  return (
    <div className="App">
      <ResponsiveDrawer />
      <PublicRoutes />
    </div>
  );
}

export default App;
