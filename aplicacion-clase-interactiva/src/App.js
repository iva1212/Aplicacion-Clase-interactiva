
import SignIn from './SignIn'
import Main from './Main'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <div >
        <Switch>
          <Route path="/" exact component={SignIn}/>
          <Route path="/main" exact component={Main}/>
        </Switch>
        </div>
        </Router>
    </div>
  )
}

export default App;
