import Rush_Poster from './Rush_Poster.png'
import Rush_Background from './Rush_Background.JPG'
import Rush_Background2 from './Rush_Background2.JPG'
import Rush_Background3 from './Rush_Background3.JPG'
import Rush_Background4 from './Rush_Background4.JPG'
import Rush_Background5 from './Rush_Background5.JPG'
import Rush_Vid from './Rush_Vid.mp4'

const Rush = () => {
    return (
        <div className="Rush">
            <div className='Rush_TopPage'>
                <div id="slider">
                    <figure>
                        <img src={Rush_Background} alt=""/>
                        <img src={Rush_Background2} alt=""/>
                        <img src={Rush_Background4} alt=""/>
                        <img src={Rush_Background5} alt=""/>
                        <img src={Rush_Background3} alt=""/>
                    </figure>
                </div>
                <div className="Rush_Overlay">
                    <h1 className="slider_title">Recruitment</h1>
                    <h2 className="slider_description">Welcome to Fall 2022 Rush!</h2>
                </div>
            </div>

            
            <center>
                <img className="Rush_Poster" src= {Rush_Poster} alt=""/>
                <video className="Rush_Vid" src={Rush_Vid} autoplay controls />
            </center>
        </div>
    );
}

export default Rush;