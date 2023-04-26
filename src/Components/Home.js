//import { useState } from "react"
import { useState } from "react"
import {Link} from "react-router-dom"
import "../Components/Home.css"
import Courses from "./Courses"
import Service from "./Service"
import "../Components/Background.css"
//import v from "../Components/videos/bgv.mp4"
import vv from "../Components/videos/bgvv.mp4"

function Home()
{
   const [show,setShow]=useState(false)
   const handleShow=()=>{
    setShow(!show);
   }
   
    return(
        <div>
            <div>
                <section>
                  {/* <Link to="/"><h1>Home</h1></Link> */}
                    <div className='video-container'>
                        <video autoPlay loop muted>
                        <source src={vv} type="video/mp4"/>
                        </video>
                     </div>
                    <div className="alvalue">
                    <nav className="alnav">
                        <Link className="space" to="/">Home</Link>
                        <Link className="space" to="/courses">Courses</Link>
                        <Link className="space" to="/service">Service</Link>
                        
                        <Link className="space" to="/blog">Blog</Link>
                        <Link className="space" to="/about">About Us</Link>
                        {/* <Link className="space" to="/background">Background</Link> */}
                    </nav>
                    </div>
                    <div className="textcontent">
                        <h1 className="p">WHAT ONE LIKES, ONE WILL DO WELL AT</h1>
                        <h1 className="w">We Are Shaping The New Generation<br/>With The Upcoming Technology</h1>
                    </div>
                    <div className="bt">
                        <Link to="/register"><button className="bt" onClick={handleShow}>Registration</button></Link>
                        
                    </div>
                </section>
                <br/><br/><br/><br/><br/><br/>
                <section className="two">
                    <Courses/>
                </section>
                <br/><br/>
                <section>
                    <Service/>
                </section>
                <section>
                    <Link to="/blog"><h1>Blog</h1></Link>
                </section>
                <section>
                    <Link to="/about"><h1>About Us</h1></Link>
                </section>
                
            </div>
        </div>
    )
}
export default Home