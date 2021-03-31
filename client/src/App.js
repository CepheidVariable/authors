import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import Edit from './views/Edit';
import New from './views/New';
import Status404 from './views/Status404';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Edit path="/edit/:id" />
        <New path="/new" />
        <Status404 path="/404" />
      </Router>
    </div>
  );
}

export default App;
