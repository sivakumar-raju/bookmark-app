import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
// import logo from './logo.svg';
import './App.css';
import Bookmark from './Bookmark'

const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends Component {
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {
            user
              ? <p className="sans-serif">Hello, {user.displayName}</p>

              : <p className="sans-serif">Please SignIn</p>
          }

          {
            user
              ? <div><button onClick={signOut} className="br4 light-red " id="signout">Sign out</button><Bookmark/></div>
              : <button onClick={signInWithGoogle} className="br4 light-red " id="sign">Sign in with Google</button>
          }
        </header>
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
