import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div >
      <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/aboutMe' element={<AboutMe></AboutMe>}  ></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
