import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div >

    <Routes>
      {/* <Route path='/' element={}></Route> */}
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/aboutMe' element={<AboutMe></AboutMe>}  ></Route>
    </Routes>
    </div>
  );
}

export default App;
