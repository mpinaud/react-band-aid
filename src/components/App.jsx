import React from 'react';
import Body from './Body';
import Error404 from './Error404';
import Header from './Header';
import Home from './Home';
import Login from './Login';
// import ProfileList from './ProfileList';
import Profiles from './Profiles';
import Search from './Search';
import SignUp from './SignUp';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterProfileList: [
        {
          email: '',
          password: '',
          name: 'Adam Smith'
        },
        {
          email: '',
          password: '',
          name: 'M|KEY N|GHTCH|LDE'
        },
        {
          email: '',
          password: '',
          name: 'tbssnch'
        },
        {
          email: '',
          password: '',
          name: 'Lena'
        },
        {
          email: '',
          password: '',
          name: 'Collin'
        },
        {
          email: '',
          password: '',
          name: 'Stephanie'
        },
        {
          email: '',
          password: '',
          name: 'Laura Leon'
        },
        {
          email: '',
          password: '',
          name: 'Hannah'
        },
        {
          email: '',
          password: '',
          name: 'Crane'
        }
      ]
    };
    this.handleAddingNewProfileToList = this.handleAddingNewProfileToList.bind(this);
  }

  handleAddingNewProfileToList(newUser){
    let newMasterProfileList = this.state.masterProfileList.slice();
    newMasterProfileList.push(newUser);
    this.setState({masterProfileList: newMasterProfileList});
  }

  render() {
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
            <Route path='/Profiles' render={()=><Profiles userList={this.state.masterProfileList}/>}/>
            <Route path='/Search' component={Search}/>
            <Route path='/Login' component={Login}/>
            // <Route path='/SignUp' component={SignUp}/>
            <Route path='/SignUp' render={() => <SignUp onCreateProfile={'yo yo yo'} />} />
            <Route component={Error404} />
          </Switch>
          <Body />
        </div>
      </div>
    );
  }
}

export default App;
