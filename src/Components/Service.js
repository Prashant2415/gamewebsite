import "../Components/Services.css"
import logo from "../Components/images/logo.jpg"
import {Link} from "react-router-dom"
function Service()
{
    const kvalue=["2 Days free webinar","One to One interaction with the mentor","Full hands on project","Career guidance by mentor"]
    return(
        <div>
            <h1 className="pd h">Services</h1>

            <div className="distext">
            <div class="card">
            <h3 className="w">We are providing Digital content creation camp</h3>
            <p className="pd">Master the art of 2D and 3D gaming and solve the real world problems, learn creative skills, build a strong knowledge on upcoming technology.</p>
            </div>

            <div class="card">
            <h3 className="w">Key Points Of Camp</h3>
             {kvalue.map((kv)=>
             {
                return(
                    <div>
                        <p className="pd">{kv}</p>
                    </div>
                )
             })}
            </div>

            <div class="card">
            <h3 className="w">Who is this Program for?</h3>
            <p className="pd">Wheather you're a beginner or an intermediate professional seekigng to up skill, transition, or broaden your horizons in the field, our program is designed to help you suceed.</p>
            </div>
            </div>
            <br/><br/>
            <div className="disimgtext">
                    <div class="card">
                    <img src={logo} alt="logo"/>
                    <div class="content">
                      <p className="pd">Students from Age 12-17 And how have interests in Drawing, Games and Creativity.This course helps them to know about difference Career paths and help them to follow them.</p>
                    </div>
                    </div>

                    <div class="card">
                    <img src={logo} alt="logo"/>
                    <div class="content">
                        <p className="pd">Students of Age 17+ Who want to know about 2D & 3D BlockChain, Meta verse and other new Technology and pursue career in Game Development.</p>
                    </div>
                    </div>

            </div>
        </div>
    )
}
export default Service