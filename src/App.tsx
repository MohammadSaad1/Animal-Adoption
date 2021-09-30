import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AdoptPage from "./pages/adopt-page/AdoptPage";
import AdminstrationPage from "./pages/adminstration-page/AdminstrationPage";
import "./App.css";
import AppBar from "./components/app-bar/AppBar";

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar>
          <Switch>
            <Route path="/" exact>
              <AdoptPage />
            </Route>
            <Route path="/adminstration">
              <AdminstrationPage />
            </Route>
          </Switch>
        </AppBar>
      </Router>
    </div>
  );
}

export default App;
