import one from "../resources/1.png"
import two from "../resources/2.png"
import three from "../resources/3.png"
import "../stylesheets/frontInfo.css"

export default function Front(){
    return (
        <div className="home-container">
            <div className="img-container">
                <div className="info">
                    <div className="text">
                        One Stop Destination For All Your Service Needs
                    </div>
                </div>
            </div>
            <div className="trending">
                <div className="heading">
                    Trending Services
                </div>
                <div className="trend">
                    <img className = "img-trend" src = {one}></img>
                    <img className = "img-trend" src = {two}></img>
                    <img className = "img-trend" src = {three}></img>
                </div>
            </div>
        </div>
    )
}