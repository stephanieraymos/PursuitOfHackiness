import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import GlobalStyles from "./styles/Global";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Bootcamp from "./components/Bootcamp";
import Career from "./components/Career";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Landing />
        <Switch>
          <Route path="/Landing" component={Landing} />
          <Route exact path="/Home" component={Home} />
          <Route path="/Bootcamp" component={Bootcamp} />
          <Route path="/Career" component={Career} />
        </Switch>
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
