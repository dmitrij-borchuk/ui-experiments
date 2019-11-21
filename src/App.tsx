import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import { SelectBoxAlphaPage } from './experiments/select-box-alpha';
import { ListPage } from './experiments/list-alpha';

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
                <li>
                  <Link to="/list-alpha">List Alpha</Link>
                </li>
              </ul>
            </nav>
          </Route>
          <Route path="/selectbox-alpha">
            <SelectBoxAlphaPage />
          </Route>
          <Route path="/list-alpha">
            <ListPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
