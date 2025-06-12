import './App.css'
import Navbar from './components/navber'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import MySkills from './components/MySkills'
import EducationExperience from './components/EducationExperience'
import MyServices from './components/MyServices'
import MyProjects from './components/MyProjects'
import MyContact from './components/MyContact'
import Footer from './components/Footer'

function App() {
  return (
    <div className='bg-[#0d0f2b]'>
     <Navbar/>
     <HeroSection/>
     <AboutMe/>
     <MySkills/>
     <EducationExperience/>
     <MyServices/>
     <MyProjects/>
     <MyContact/>
     <Footer/>
    </div>
  )
}

export default App
