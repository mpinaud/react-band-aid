import React from 'react';
import Body from './Body';
import Error404 from './Error404';
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
      <style jsx>{`
          display: flex;
          flex-direction: column;
          margin-right: auto;
          margin-left: auto;

          *, ::after, ::before {
            box-sizing: border-box;
          }

          .container {
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
            max-width: 1140px;
          }
      `}</style>
      <div className="container">
        <Header />
        <Switch>
          <Route path='/Home' component={Home}/>
          <Route path='/Profiles' component={Profiles}/>
          <Route path='/Search' component={Search}/>
          <Route path='/Login' component={Login}/>
          <Route path='/SignUp' component={SignUp}/>
          <Route component={Error404} />
          <Body />
        </Switch>
      </div>
    </div>
  );
}

export default App;
