import React from "react";
import Contacts from "./Contacts";
import Login from "./Login";
import NavBar from "./NavBar"

class App extends React.Component {
  state = {
    section: 'home',
    api: ''
  }
  changeApiKey = (api) => {
    this.setState({ api })
  }

  changeSection = (section) => {
    this.setState({ section })
  }

  render() {
    const getComponent = () => {
      switch (this.state.section) {
        case "home":
          return <Contacts api={this.state.api} changeSection={this.changeSection} />;
          //return <Tickers api={this.state.api} changeSection={this.changeSection} />;
        case "login":
          return <Login changeSection={this.changeSection} changeApiKey={this.changeApiKey}/>;
        default:
      }
    }

    return (
      <div className="App">
        <NavBar />

        <main className="container pt-5">
          {getComponent()}
        </main>
      </div>
    );
  }
}

export default App;
