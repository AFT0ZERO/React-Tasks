import c from '../assetes/c++.png';
import html from '../assetes/html.png';
import python from '../assetes/python.png';
import css from '../assetes/css.png';
import bootstrap from '../assetes/bootstrab.png';
import figma from '../assetes/figma (1).png';
import security from '../assetes/security.png';
import ccna from '../assetes/ccna.png';

const skills = () => {
    return (
        <>
            <section id="skills">
                <div className="background-img">
                    <p className="title-main-skills">
                        SKILLES{' '}
                    </p>
                </div>
                <div className="main-skills">
                    <figure>
                        <img
                            alt="C++ logo"
                            className="img-fluid ms-2"
                            src={c}
                        />
                    </figure>
                    <figure>
                        <img
                            alt="Python logo"
                            className="img-fluid ms-2"
                            src={python}
                        />
                    </figure>
                    <figure>
                        <img
                            alt="HTML logo"
                            className="img-fluid ms-2"
                            src={html}
                        />
                    </figure>
                    <figure>
                        <img
                            alt="css logo"
                            className="img-fluid ms-2"
                            src={css}
                        />
                    </figure>
                    <figure>
                        <img
                            alt="bootstrab logo"
                            className="img-fluid ms-2"
                            src={bootstrap}
                        />
                    </figure>
                    <figure>
                        <img
                            alt="figma logo"
                            className="img-fluid ms-2"
                            src={figma}
                        />
                    </figure>
                    <figure>
                        <img
                            alt="cyber security "
                            className="img-fluid ms-2"
                            src={security}/>
                    </figure>
                    <figure>
                        <img
                            alt="ccna logo"
                            className="img-fluid ms-2"
                            src={ccna}
                        />
                    </figure>
                </div>
            </section>
        </>
    )
 }
 export default skills
