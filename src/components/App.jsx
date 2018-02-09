import React from 'react';
import Body from './Body';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Profiles from './Profiles';
import Search from './Search';
import SignUp from './SignUp';
import { Route, Switch } from 'react-router-dom';

function App() {
  return(
    <div>
      <Header />
      <Switch>
        <Route path='/Home' component={Home}/>
        <Route path='/Profiles' component={Profiles}/>
        <Route path='/Search' component={Search}/>
        <Route path='/Login' component={Login}/>
        <Route path='/SignUp' component={SignUp}/>
        <Body />
      </Switch>
    </div>
  );
}

export default App;
