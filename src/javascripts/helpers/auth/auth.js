import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../../components/buttons/loginButton';
import logoutButton from '../../components/buttons/logoutButton';
import boards from '../../components/boards';
import home from '../../components/home';
import firebaseConfig from '../apiKeys';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      logoutButton();
      boards();
    } else {
      // person is NOT logged in
      loginButton();
      home();
    }
  });
};

export default checkLoginStatus;
