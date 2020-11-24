import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ControlledComponent from './examples/ControlledComponent';
import Counter from './examples/Counter';
import CustomBox from './exercises/CustomBox';
import GreeterClass from './GreeterClass';
import PaymentDetails from './payments/PaymentDetails';

const clearedTransaction = {
  id: '1',
  payor: 'Katie',
  payee: 'Ahmed',
  amount: '$5',
  reason: 'coffee run',
  timeStamp: '2020-11-20T10:15:00 AM',
  requestReference: null,
  cleared: true,
};

const pendingTransaction = {
  id: '2',
  payor: 'Kent',
  payee: 'Steven',
  amount: '$500',
  reason: 'XBox Series X',
  timeStamp: '2020-11-21T08:45:00 PM',
  requestReference: null,
  cleared: false,
};

function App() {
  function handleToggleCleared() {
    console.log('App: Called toggleCleared()');
  }

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
              <li>Counter</li>
              <li>Payments</li>
            </ul>
          </div>
          <div className="col">
            <Route path="/controlled-component">
              <ControlledComponent />
            </Route>
            <Route path="/route-one">
              <CustomBox />
            </Route>
          </div>
        </div>

        {/* <ControlledComponent /> */}

        {/* <CustomBox /> */}

        {/* <Counter className="foo" /> */}

        {/*
      <section className="row">
        <div className="col">
          <PaymentDetails
            transaction={clearedTransaction}
            toggleCleared={handleToggleCleared}
          />
          <PaymentDetails
            transaction={pendingTransaction}
            toggleCleared={handleToggleCleared}
          />
        </div>
      </section>
      */}
      </main>
    </Router>
  );
}

export default App;
