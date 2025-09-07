
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import AuthSignup from './components/AuthSignup';

function App() {
  return (
    
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/authsignup" element={<AuthSignup/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
