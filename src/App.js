import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Planner from './pages/PlanTimetable';
import Discuss from './pages/DiscussionForum';
import Login from './pages/Login';
import Common from './pages/FindCommon';
import Share from './pages/ShareTimetable';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/discuss' component={Discuss} />
          <Route path='/findcommon' component={Common} />
          <Route path='/planner' component={Planner} />
          <Route path='/share' component={Share} />
          <Route path='/forgotpwd' component={ForgotPassword} />
          <Route path='/register' component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;