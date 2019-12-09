import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Row } from 'reactstrap';
import ProductRegister from './screens/ProductRegister';
import Menu from './components/basic/Menu';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Router>
          <header>
            <Menu />
          </header>
          <div className="container">
            <Row>
              <Switch>
                <Route exact path="/">
                </Route>
                <Route path="/patientCreate">
                </Route>
                <Route path="/list">
                </Route>
                <Route path="/appointment">
                </Route>
                <Route path="/product/create">
                  <ProductRegister />
                </Route>
                <Route path="*">
                </Route>
              </Switch>
            </Row>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
