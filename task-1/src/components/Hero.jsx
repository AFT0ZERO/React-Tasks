
import abdallah from '../assetes/abdallah-photo.png';
import facebook from '../assetes/facebook-logo.png';
import instagram from '../assetes/instagram-logo.png';
import GitHub from '../assetes/GitHub.png';
import linkedin from '../assetes/linkedin-logo.png';

const Hero = () => {
    return (
        <>
            <section id="home">
                <div className="home">
                    <figure>
                        <img
                            alt="abdallah-photo"
                            className="img-fluid ms-2"
                            src={abdallah}
                        />
                    </figure>
                    <div className="home-info">
                        <p className="welcom">
                            Hello I Am
                        </p>
                        <div className="name">
                            ABDALLUH FUAD AL-TAMIMI
                        </div>
                        <div className="job">
                            A Frontend Developer{' '}
                        </div>
                        <p>
                            Abdullah Fuad Al-Tamimi I was born in 14/7/2004 in the city of Aqaba in Jordan.{' '}
                            <br/>
                            I study software engineering at Aqaba University of Technology{' '}
                            <br/>
                            currently a trainee at Orange Programming Academy .{' '}
                        </p>
                        <div className="contact-button">
                            <a
                                className="cont-button"
                                href="mailto:abdallahtamimi54@gmail.com"
                            >
                                CONTACT
                            </a>
                            <div className="media-button">
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Hero;