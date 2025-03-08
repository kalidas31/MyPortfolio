import {BrowserRouter,Route,Routes} from 'react-router-dom';
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/home'
import About from './components/about';
import Resume from './components/resume';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Project1Details from './components/projectsdetails/project1Details';
import Project2Details from './components/projectsdetails/project2Details';
import Project3Details from './components/projectsdetails/project3Details';
import Project4Details from './components/projectsdetails/project4Details';
import Project5Details from './components/projectsdetails/project5Details';
import Project6Details from './components/projectsdetails/project6Details';

function App() {
  
  return (
    <div className="w-screen h-screen">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
          <Navbar/>
          <Home/>
          <About/>
          <Skills/>
          <Resume/>
          <Projects/>
          <Contact/>
          <Footer/>
        </>}/>
        
        <Route path="/Emloyee Performance Appraisal System" element={<Project1Details/>}/>
        <Route path="/parkinsonsDisease" element={<Project2Details/>}/>
        <Route path="/MERN Stactk Blog Application" element={<Project3Details/>}/>
        <Route path="/Food Recipies Website Using API" element={<Project4Details/>}/>
        <Route path="/Expense Tracker Application" element={<Project5Details/>}/>
        <Route path="/Shopping Cart Application Using React Redux" element={<Project6Details/>}/>

      </Routes>      
      </BrowserRouter>
      
    </div>
  )
}

export default App
