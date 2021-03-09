import navbar from './components/navbar';
import checkLoginStatus from './helpers/auth/auth';
import 'bootstrap'; // import bootstrap elements and js

import '../styles/main.scss';

const init = () => {
  navbar();
  checkLoginStatus();
};

init();
