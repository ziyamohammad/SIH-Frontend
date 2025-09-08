
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import AuthSignup from './components/AuthSignup';
import CitiSignup from './components/CitiSignup';
import CitiLogin from './components/CitiLogin';
import AuthLogin from './components/AuthLogin';

function App() {
  return (
    
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/authsignup" element={<AuthSignup/>}/>
          <Route path="/citisignup" element={<CitiSignup/>}/>
          <Route path="/citilogin" element={<CitiLogin/>}/>
          <Route path="/authlogin" element={<AuthLogin/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
