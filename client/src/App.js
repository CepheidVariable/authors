import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import Edit from './views/Edit';
import New from './views/New';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Edit path="/edit/:id" />
        <New path="/new" />
      </Router>
    </div>
  );
}

export default App;
