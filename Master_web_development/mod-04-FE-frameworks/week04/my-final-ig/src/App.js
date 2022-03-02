import React from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './components/Header'
import PostList from './screens/PostList';
import Login from './screens/Login';
import Profile from './screens/Profile';

function App() {
  return (
    <div className='App'>
      <Header />

      <main className='container-md'>
        <Switch>
          <Route path='/react-week4/' component={PostList} exact/>
          <Route path='/react-week4/login' component={Login} exact/>
          <Route path='/react-week4/profile' component={Profile} exact/>
        </Switch>
      </main>
    </div>
  )
}

/*
import React from 'react'
import Header from "./components/Header";
import PostList from "./components/PostList";
import Profile from "./components/Profile";
import Login from './components/Login';
import axios from 'axios';

const profile = {
  avatar: '',
  bio: '',
  createdAt: '',
  id: '',
  name: '',
  updatedAt: '',
  username: ''
}

class App extends React.Component {

  state = {
    section: "login",
    user: profile
  }

  changeSection = (section) => {
    this.setState({ section })
  }

  changeUser = (user) => {
    this.setState({ user })
  }

  resetUser = () => {
    this.setState( { user : profile })
  }

  componentDidMount() {
    const userId = localStorage.getItem('userId')
    console.log(userId)
    if (userId !== ""){
      axios.get(`https://three-points.herokuapp.com/api/users/${userId}`, {
        withCredentials: true, headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            console.log(response);
            this.changeUser(response.data)
            this.changeSection("home")
        })
        .catch(err => {
            console.log(err.response)
            return err.response.status;
        })
    }
  }

  render() {
    console.log(this.state.section + " - " + JSON.stringify(this.state.user));

    const getComponent = () => {
      switch (this.state.section) {
        case "home":
          return (
            <PostList onChange={(pos) => this.incrementLike(pos)} user={this.state.user} />
          );
        case "login":
          return <Login changeSection={this.changeSection} changeUser={(user) => this.changeUser(user)} />;
        case "profile":
          return (
            <div className="text-center pt-5">
              <Profile changeSection={this.changeSection} resetUser={() => this.resetUser()} user={this.state.user} />
            </div>
          );
        default:
      }
    }
    const getMain = () => {
      if (this.state.user.id !== "") {
        return (
          <div className="App">
            <Header onChange={(viewPost) => this.changeSection(viewPost)} user={this.state.user} />
            {getComponent()}
          </div>)
      } else {
        return <Login changeSection={this.changeSection} changeUser={(user) => this.changeUser(user)} />;
      }
    }
    return getMain()
  }
}
*/
export default App;

