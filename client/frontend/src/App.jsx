import React from "react";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { ProductList } from "./Pages/ProductList";
import Register from "./Pages/Register";
import{
  BrowserRouter,
  Routes,
  Route,
  Navigate
}from 'react-router-dom';
import { useSelector } from "react-redux";

const App = () => {

  const user = useSelector(state=>state.user.currentUser);
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products/:categories' element={<ProductList/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/login' element={user?<Navigate to="/products/${item.cat}"/>:<Login/>}/>
          <Route path='/register' element={user?<Navigate to="/login"/>:<Register/>}/>
          <Route path="/login" component={Login} exact/>
          </Routes>
      </BrowserRouter>
    )
  };
  
  export default App;