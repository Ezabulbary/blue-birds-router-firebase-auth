import { Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import Home from './component/Home/Home';
import About from './component/About/About';
import NotFound from './component/NotFound/NotFound';
import Orders from './component/Orders/Orders';
import Login from './component/Login/Login';
import SignUp from './component/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/:shop' element={<Shop></Shop>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/order' element={<Orders></Orders>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
