import frontend from '../assetes/frontend-mentor (Custom).jpg';
import figma from '../assetes/figma-project.png';


const projects = () => {
    return (
        <>
            <section id="pro">
                <div className="background-img">
                    <p className="title-main-projects">
                        PORJECTS
                    </p>
                </div>
                <div className="main-projects">
                    <div className="projects-card-info">
                        <p className="projects-card-title">
                            {' '}FIGMA
                        </p>
                        <a
                            href="https://www.figma.com/design/XZWo1SI1CHUXRJHtZDg5ZS/project1?node-id=0-1&t=w4oi7V7lDJ8uzta5-0"
                            target="_blank"
                        >
                            {`Figma Link >>`}
                        </a>
                        <figure>
                            <img
                                alt="figma projet photo"
                                className="img-fluid ms-2"
                                src={figma}
                            />
                        </figure>
                    </div>
                    <div className="projects-card-info">
                        <p className="projects-card-title">
                            WEBSITE
                        </p>
                        <a
                            href="https://github.com/AFT0ZERO/recipe-page.git"
                            target="_blank"
                        >
                            {`Github Link >>`}
                        </a>
                        <figure>
                            <img
                                alt="figma projet photo"
                                className="img-fluid ms-2"
                                src={frontend}
                            />
                        </figure>
                    </div>
                </div>
            </section>
        </>
    )
 }
 export default projects;
