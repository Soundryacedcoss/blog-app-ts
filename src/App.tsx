import React from 'react';
import './App.css';
import Signup from './Componants/Signup';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Login } from './Componants/Login';
import { PostBlog } from './Componants/PostBlog';
let router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Signup />} />
      <Route path='/Login' element={<Login/>}/>
      <Route path='/PostBlog' element={<PostBlog/>} />
    </>
  )
)
function App() {
  return (
    <div className="App">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
