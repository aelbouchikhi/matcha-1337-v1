import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import Topics from './pages/topic';
import Settings from './pages/settings';

const Main = () => {
  return (
    <div>

    <Routes>
      <Route path='/' element={<HomePage/>} />
      {/* <Route path='/topics' element={<Topics/>} />
      <Route path='/settings' element={<Settings/>} /> */}
    </Routes>
    </div>
  );
}
export default Main;