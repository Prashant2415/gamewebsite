//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './Components/Home';
import Service from './Components/Service';
import Courses from './Components/Courses';
import Blog from './Components/Blog';
import About from './Components/About';
import BlockChainSocialMedia from './Components/Pages/BlockChainSocialMedia';
import DandDeveloping from './Components/Pages/DandDeveloping';
import GameDesigning from './Components/Pages/GameDesigning';
import GameDevelopment from './Components/Pages/GameDevelopment';
import VideoEditing from './Components/Pages/VideoEditing';
import Animation from './Components/Pages/Animation';
import Registration from './Components/Registration';
//import Background from './Components/Background';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path="/about" element={<About/>}/>
          
          <Route path='/2d3danimation' element={<Animation/>}/>
          <Route path="/blockchain" element={<BlockChainSocialMedia/>}/>
          <Route path='/designingdevelopment' element={<DandDeveloping/>}/>
          <Route path="/2d3dgamedesigning" element={<GameDesigning/>}/>
          <Route path='/2d3dgamedevelopment' element={<GameDevelopment/>}/>
          <Route path="/videoeditingandmotiongraphics" element={<VideoEditing/>}/>
          <Route path='/register' element={<Registration/>}/>
          {/* <Route path='/background' element={<Background/>}/> */}
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
