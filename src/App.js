import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation } from './components/Navigation';

function App() {
  return (
<>
  <Router>
    <Navigation />
  </Router>
</>
  );
}

export default App;
