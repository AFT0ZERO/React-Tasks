import school from '../assetes/school.png';
import colage from '../assetes/colage.png';
import orange from '../assetes/oragne 1.png';
const Edu = () => {
    return (
        <>
            <section id="edu">
                <div className="main-edu">
                    <div className="background-img">
                        <p className="title-main-edu">
                            EDUCATION
                        </p>
                    </div>
                    <div className="edu-card">
                        <div className="edu-card-body">
                            <figure>
                                <img
                                    alt="school logo photo"
                                    className="img-fluid"
                                    src={school}
                                />
                            </figure>
                            <p className="edu-card-title">
                                SCHOOL
                            </p>
                            <p className="edu-card-info">
                                I Study In Khalil Alrahman Academy{' '}
                                <br/>
                                {' '}School And I Graduated In 2022
                            </p>
                            <a
                                href="https://www.facebook.com/Khalil.Al.Rahman.Academy.Aqaba?locale=ar_AR"
                                target="_blank"
                            >
                                {`SCHOOL LINK > `}
                            </a>
                        </div>
                        <div className="edu-card-body">
                            <figure>
                                <img
                                    alt="University logo photo"
                                    className="img-fluid"
                                    src={colage}
                                />
                            </figure>
                            <p className="edu-card-title">
                                UNIVERSITY
                            </p>
                            <p className="edu-card-info">
                                I Study In Aqaba University Of Technology{' '}
                                <br/>
                                {' '}In Aqaba City In Jordan
                            </p>
                            <a
                                href="http://aut.edu.jo/en"
                                target="_blank"
                            >
                                {`COLLAGE LINK > `}
                            </a>
                        </div>
                        <div className="edu-card-body">
                            <figure>
                                <img
                                    alt="oragne logo photo"
                                    className="img-fluid"
                                    src={orange}
                                />
                            </figure>
                            <p className="edu-card-title">
                                ORANGE ACADEMY
                            </p>
                            <p className="edu-card-info">
                                I A Trainee At The Orange Programming Academy In Aqaba City In Fourth Cohort
                            </p>
                            <a
                                href="https://orangecodingacademy.com/"
                                target="_blank"
                            >
                                {`ORANGE LINK > `}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Edu;