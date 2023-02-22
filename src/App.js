import "./App.css";
import PublicRoutes from "./routes/routes";
import Layout from "./components/sideMenu/drawer";

function App() {
  return (
    <div className="App">
      <Layout>
        <PublicRoutes />
      </Layout>
    </div>
  );
}

export default App;
