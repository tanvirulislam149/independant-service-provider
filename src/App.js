import './App.css';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import ServiceDetail from './Component/ServiceDetail/ServiceDetail';
import PageNotFound from './Component/PageNotFound/PageNotFound';
import RequireAuth from './Component/RequiredAuth';
import Blogs from './Component/Blogs/Blogs';
import AboutMe from './Component/AboutMe/AboutMe';
import WelcomePage from './Component/WelcomePage/WelcomePage';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/:id" element={<RequireAuth><ServiceDetail></ServiceDetail></RequireAuth>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<AboutMe></AboutMe>}></Route>
        <Route path="/welcome" element={<RequireAuth><WelcomePage></WelcomePage></RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
