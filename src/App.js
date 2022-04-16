import './App.css';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Banner from './Component/Banner/Banner';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Banner></Banner>}></Route>
      </Routes>
    </div>
  );
}

export default App;
