import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import { SelectBoxAlphaPage } from './experiments/select-box-alpha';

// TODO: nice navbar
const App: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <nav>
              <ul>
                <li>
                  <Link to="/selectbox-alpha">Selectbox Alpha</Link>
                </li>
              </ul>
            </nav>
          </Route>
          <Route path="/selectbox-alpha">
            <SelectBoxAlphaPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
