index.jsx
----------
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout';
import State1 from './components/State1';
import Form from './components/Form';

const router=createBrowserRouter(
   createRoutesFromElements(
    <Route>
      
      <Route path='/'  element={<Layout/>}/>
      <Route path='/state' element={<State1/>}/>
      <Route path='/form' element={<Form/>}/>
    </Route>
   )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

_______________________________________________________________________________________________________________________________
Layout.jsx
----------

import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header/Header'
// import Footer from './Footer/Footer'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    {/* <Footer/> */}
    
    </>
  )
}

export default Layout
___________________________________________________________________________________________________________________________________
Header.jsx
----------

import React from 'react'
import {NavLink} from 'react-router-dom';

function Header() {
  return (
    <div>
        <ul><li>
        <NavLink to="/">Home</NavLink>
            </li>
            
            <li><NavLink to="/state">State</NavLink></li>
            <li><NavLink to="/form">Form</NavLink></li>
            </ul>
        
    </div>
  )
}

export default Header

_______________________________________________________________________________________________________________________
State1.jsx
form.jsx

