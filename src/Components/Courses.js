import logo from "../Components/images/logo.jpg"
import "../Components/Courses.css"
import {Link} from "react-router-dom"
function Courses()
{
    return(
        <div>
            <h1 className="pd">Courses</h1>
            <div className="incenter">
                <div className="row">
                    <div class="card">
                    <img src={logo} alt="logo"/>
                    <div class="content">
                      <Link to="2d3danimation"><h5 className="w pd">2D and 3D Animation</h5></Link>
                    </div>
                    </div>

                    <div class="card">
                    <img src={logo} alt="logo"/>
                    <div class="content">
                    <Link to="videoeditingandmotiongraphics"><h5 className="w pd">Video Editing and Motion Graphics</h5></Link>
                    </div>
                    </div>

                    <div class="card">
                    <img src={logo} alt="logo"/>
                    <div class="content">
                    <Link to="2d3dgamedesigning"><h5 className="w pd">2D and 3D Game Designing</h5></Link>
                    </div>
                    </div>
                </div>
                <div className="row1">
                    <div class="card">
                    <img src={logo} alt="logo"/>
                    <div class="content">
                    <Link to="2d3dgamedevelopment"><h5 className="w pd">2D and 3D Game Development</h5></Link>
                    </div>
                    </div>
                    <div class="card">
                    <img src={logo} alt="logo"/>
                    <div class="content">
                    <Link to="designingdevelopment"><h5 className="w pd">AR,VR,XR,Meta cerse Designing and Development</h5></Link>
                    </div>
                    </div>
                    <div class="card">
                    <img src={logo} alt="logo"/>
                    <div class="content">
                    <Link to="blockchain"><h5 className="w pd">BlockChain Technology an Social Media</h5></Link>
                    </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}
export default Courses