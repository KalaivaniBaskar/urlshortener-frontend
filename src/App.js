import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './Components/Login';
import Sent from './Components/Sent';
import Signup from './Components/Signup';
import ForgotPwd from './Components/ForgotPwd';
import DashboardURL from './Components/DashboardURL';
import CreateURL from './Components/CreateURL';
import AllURL from './Components/AllURL';
import Header from './Components/Header';
import Authorize from './Components/Authorize';
import ActivateAccount from './Components/ActivateAccount';
import { NameProvider } from './Context/context';
import ActivationMail from './Components/ActivationMail/index.js';
import ResetPwd from './Components/ResetPwd';
import Redirect from './Components/Redirect';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <NameProvider> 
        <Header/>
        <Routes>
        <Route path="/" element={ <Home/>} ></Route>
        <Route path="/login" element={ <Login/>} ></Route>
        <Route path="/signup" element={ <Signup/>} ></Route>
        <Route path="/forgot-password" element={ <ForgotPwd/>} ></Route>
        <Route path="/activation" element={ <ActivationMail/>} ></Route>
        <Route path="/sent" element={ <Sent/>} ></Route>
        <Route path="/reset/:id" element={ <ResetPwd/>} ></Route>
        <Route path="/activate/:id" element={ <ActivateAccount/>} ></Route>
        <Route path="/authorize" element={ <Authorize/>} ></Route>
        <Route path="/dashboard-url" element={ <DashboardURL/>} ></Route>
        <Route path="/create-url" element={ <CreateURL/>} ></Route>
        <Route path="/all-url" element={ <AllURL/>} ></Route>
        <Route path="/:id" element={ <Redirect/>} ></Route>
        </Routes>
      </NameProvider>
    </div>
  );
}

export default App;
