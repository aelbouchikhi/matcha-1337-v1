import React from 'react';
// import { Link} from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';
// import Main from './Main';

function App() {
  return (
    <div className=' w-screen h-screen'>
      <HomePage />
        {/* <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/topics'>Topics</Link></li>
          <li><Link to='/settings'>Settings</Link></li>
        </ul>
        <hr /> */}
        {/* <Main />        */}
      </div>
  );
}

export default App;
