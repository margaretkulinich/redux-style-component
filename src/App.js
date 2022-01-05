import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { SignIn } from './components/SignIn/SignIn';
import { SignUp } from './components/SignUp/SignUp';
import { Home } from './components/Home';

export function App() {
  return (
    <Router basename="/redux-style-component">
      <div className="container">
        <Routes>
            <Route path='/sign-up' element={<SignUp/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/' element={<SignIn/>} />
        </Routes>
      </div>
    </Router>
  );
}