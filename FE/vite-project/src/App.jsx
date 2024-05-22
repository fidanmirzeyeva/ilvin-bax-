import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import Add from './pages/Add/Add';
import Basket from './pages/Basket/Basket';
function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/basket' element={<Basket/>}/>
       </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
