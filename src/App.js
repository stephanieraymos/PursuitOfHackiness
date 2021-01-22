import Main from './Main';
import './App.css';
import 'node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation } from './Navigation';

function App() {
  return (
<>
  <Router>
    <NavigationBar />
  </Router>
</>
  );
}

export default App;
