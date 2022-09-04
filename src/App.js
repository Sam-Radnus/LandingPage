import logo from './logo.svg';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
   <div>
    <Routes>
      <Route exact path="/SignIn" element={<SignIn/>}></Route>
      <Route exact path="/SignUp" element={<SignUp/>}></Route>
      </Routes>
   </div>
   </Router>
  );
}

export default App;