import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './COMPONENTS/Homepage'
import NaveBar from './Components/Navbar'
import AboutMe from './Components/Aboutme'
import MyProjects from './Components/MyProjects'
import ContactMe from './Components/ContactMe'
import Design from './Components/Design'
import FrontEnd from './Components/FrontEnd'
import NotFound from './Components/NotFound'
import DetailPage from './Components/WorkDetailsPage'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    
    <NaveBar></NaveBar>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/about-me" element={<AboutMe></AboutMe>}></Route>
      <Route path="/my-projects" element={<MyProjects></MyProjects>}></Route>
      <Route path="/contact-me" element={<ContactMe></ContactMe>}></Route>
      <Route path="/my-projects/designs" element={<Design></Design>}></Route>
      <Route path="/my-projects/front-end" element={<FrontEnd></FrontEnd>}></Route>
      <Route path="/my-projects/:id" element={<DetailPage></DetailPage>}></Route>
      <Route path='not-found' element={<NotFound></NotFound>}></Route>
      
    </Routes>
    </BrowserRouter>
)

