import COA from './COA.png'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Sections">
                <div className="Section1">
                    <div className="Section1_Title">
                        <img src= {COA} alt="" />
                        <h1>Theta Tau</h1>
                    </div>
                    <h2>Mu Gamma Chapter</h2>
                    <h2>University At Buffalo</h2>
                </div>
                <div className="Section2">
                    <h2>mgthetatau@gmail.com</h2>
                    <a href="https://thetatau.org"><h2>National Theta Tau</h2></a>
                    <a href="https://www.instagram.com/ub_theta_tau/"><h2>Instagram</h2></a>
                </div>
             </div>
        </div>

    );
}
 
export default Footer;