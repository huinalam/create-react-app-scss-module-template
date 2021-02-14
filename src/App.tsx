import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { MainPage } from './pages/main/MainPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/"} component={MainPage} />
        <Route path={"/**"} component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
