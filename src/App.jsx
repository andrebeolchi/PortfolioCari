import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ Home } exact/>
        <Route path="/contato" component={ Contact } exact/>
      </Switch>
    </Router>
  );
}

export default App;
