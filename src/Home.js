import Home1 from "./Home1.jpg"
import Home2 from "./Home2.jpg"
import Home3 from "./Home3.jpg"
import Home4 from "./Home4.jpg"
import Home5 from "./Home5.jpg"
import GE from "./Logos/GE.png"
import Goldman_Sachs from "./Logos/Goldman_Sachs.png"
import Meta from "./Logos/Meta.jpg"
import MT from "./Logos/M&T_Bank.png"
import Eversource from "./Logos/Eversource.jpg"
import GD from "./Logos/GD.png"
import brotherhood from "./brotherhood.jpg"
import professionalism from "./professionalism.jpg"
import service from "./service.jpg"

const Home = () => {
    return ( 
        <div className="home">

            <div className="topPage">

                {/* Image Carousel */}
                <div id="slider">
                    <figure>
                        <img src={Home1} alt=""/>
                        <img src={Home2} alt=""/>
                        <img src={Home3} alt=""/>
                        <img src={Home4} alt=""/>
                        <img src={Home5} alt=""/>
                    </figure>
                </div>

                <div className="slider_overlay">
                    <div className="slider_title">Theta Tau</div>
                    <p className="slider_description">Co-Ed Professional Engineering Fraternity</p>
                </div>


            </div>

            <div className="pillars">
                <div className="brotherhood">
                    <img className="brotherhood_image" src = {brotherhood} alt="" />
                    <div className="brotherhood_overlay">
                        <div className="brotherhood_title">Brotherhood</div>
                    </div>
                    <div className="text">
                        <h1>Brotherhood</h1>
                        <p className="brotherhood_description">
                        We forge lifelong bonds of fraternal friendship, a journey that develops and delivers a network of lasting personal and professional relationships. We foster an inviting, safe, and social environment in which our members become lifelong friends.
                        </p>
                    </div>
                    
                </div>
                    
                <div className="professionalism">
                    <img className="professionalism_image" src = {professionalism} alt="" />
                    <div className="professionalism_overlay">
                        <div className="professionalism_title">Professionalism</div>
                    </div>
                    <div className="text">
                        <h1>Professionalism</h1>
                        <p className="professionalism_description">
                            We develop and nurture engineers with strong communication, problem-solving, collaboration, and leadership skills that we demonstrate in our profession, our community, and in our lives.
                        </p>
                    </div>
                </div>
                
                <div className="service">
                    <img className="service_image" src = {service} alt="" />
                    <div className="service_overlay">
                        <div className="service_title">Service</div>
                    </div>
                    <div className="text">
                        <h1>Service</h1>
                        <p className="service_description">
                            We are known for our service to our college, university, and the larger community. Our service projects create a unifying environment for learning and personal growth.
                        </p>
                    </div>
                </div>

            </div>

            <div className="Companies_Section">
                <center>
                    <h2 className="Companies_Intro">Where we work:</h2>
                </center>
                <div className="Company_Logos">
                    <center>
                        <img className="Regular" src= {GE} alt="" />
                        <img className="Regular"src= {Goldman_Sachs} alt="" />
                        <img className="Regular" src= {Meta} alt="" />
                        <img className="Regular" src= {Eversource} alt="" />
                        <img className="Regular" src= {GD} alt="" />
                        <img className="Wide_Logo" src= {MT} alt="" />
                    </center>
                </div>
            </div>
            
        </div>
    );
}
 
export default Home;