import facebook from '../assetes/facebook-logo.png';
import instagram from '../assetes/instagram-logo.png';
import GitHub from '../assetes/GitHub.png';
import linkedin from '../assetes/linkedin-logo.png';
 const Footer = () => {
    return (
        <>
            <footer id="cont">
                <hr className="line2"/>
                <p className="title-footer">
                    let's Work Together
                </p>
                <div className="main-contact-footer">
                    <div className="contact-footer-title">
                        <div>
                            EMAIL :
                        </div>
                        <div>
                            PHONE :
                        </div>
                        <div>
                            ADDRESS :
                        </div>
                    </div>
                    <div className="contact-footer-info">
                        <div>
                            abdallahtamimi54@gmail.com
                        </div>
                        <div>
                            +962791580267
                        </div>
                        <div>
                            Jordan-Aqaba
                        </div>
                    </div>
                </div>
                <div className="media-button-footer">
                    <a
                        href="https://www.facebook.com/abood.tamimi.50/"
                        target="_blank"
                    >
                        <img
                            alt="facebook"
                            src={facebook}
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/_abdullah_tamimi_/"
                        target="_blank"
                    >
                        <img
                            alt="instagram"
                            src={instagram}
                        />
                    </a>
                    <a
                        href="https://github.com/AFT0ZERO"
                        target="_blank"
                    >
                        <img
                            alt="github"
                            src={GitHub}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/abdallah-tamimi-9855502b0/"
                        target="_blank"
                    >
                        <img
                            alt="linked in "
                            src={linkedin}
                        />
                    </a>
                </div>
            </footer>
        </>
    )
 }
 export default Footer;
