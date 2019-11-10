import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { withFirebase } from './components/Firebase';

// page imports
import Home from './pages/Home';
import Decks from './pages/Decks';
import DeckDetail from './pages/DeckDetail';

// navbar import
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null
    }
  }
  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      },
    );
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <Router>
        <Navbar isLoggedIn={this.state.authUser !== null} />
        <Switch>
          <Route exact path="/decks">
            <Decks curUser={this.state.authUser} />
          </Route>
          <Route path="/decks/:deck">
            <DeckDetail curUser={this.state.authUser} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router >
    );
  }
}

export default withFirebase(App);
