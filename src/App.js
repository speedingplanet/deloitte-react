import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ControlledComponent from './examples/ControlledComponent';
import Counter from './examples/Counter';
import CustomBox from './exercises/CustomBox';
import GreeterClass from './GreeterClass';
import PaymentsManager from './payments/PaymentsManager';
import UsersManager from './users/UsersManager';

function App() {
  return (
    <Router>
      <main className="container">
        <header className="row">
          <div className="col header-border">
            <GreeterClass />
          </div>
        </header>

        <div className="row">
          <div className="col-2">
            <ul className="list-unstyled">
              <li>
                <Link to="/controlled-component">Controlled Component</Link>
              </li>
              <li>
                <Link to="/route-one">Custom Box</Link>
              </li>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
              <li>
                <Link to="/payments">Payments</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <Route path="/controlled-component">
              <ControlledComponent />
            </Route>
            <Route path="/route-one">
              <CustomBox />
            </Route>
            <Route path="/counter">
              <Counter className="foo" />
            </Route>
            <Route path="/payments">
              <PaymentsManager />
            </Route>
            <Route path="/users">
              <UsersManager />
            </Route>
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
