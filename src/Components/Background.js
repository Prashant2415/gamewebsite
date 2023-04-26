import v from '../Components/videos/bgv.mp4'
import "../Components/Background.css"
function Background()
{
    return(
        <div>
            <h1 className="w">Background</h1>
            <div className='video-container'>
                <video autoPlay loop muted>
                    <source src={v} type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}
export default Background