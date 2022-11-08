import {
  BrowserRouter as Router,
 Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import MovieState from "./context/Movies/MovieState";
import AdminLogin from './components/AdminLogin'
import AddMovie from "./components/AddMovie";

function App() {
  return (
    
    <MovieState>
    <Router>
      <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/signIn" element={<SignIn/>}></Route>
    <Route path="/adminLogin" element={<AdminLogin/>}></Route>

    </Routes>

    </Router>
    </MovieState>
    
  );
}

export default App;
