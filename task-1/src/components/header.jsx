import hambuger from "../assetes/hamburger.png";

const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <ul className="sidebar">
                        <li onClick="hideSidebar()">
                            <a href="#">
                                <img
                                    alt="menu button"
                                    src={hambuger}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#home">
                                HOME
                            </a>
                        </li>
                        <li>
                            <a href="#edu">
                                EDUCATION
                            </a>
                        </li>
                        <li>
                            <a href="#skills">
                                SKILLS
                            </a>
                        </li>
                        <li>
                            <a href="#pro">
                                PORJECTS
                            </a>
                        </li>
                        <li>
                            <a href="#cont">
                                {`CONTACT ME>`}
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li className="logo">
                            ABDALLAH
                        </li>
                        <li className="hideOnMobile">
                            <a href="#home">
                                HOME
                            </a>
                        </li>
                        <li className="hideOnMobile">
                            <a href="#edu">
                                EDUCATION
                            </a>
                        </li>
                        <li className="hideOnMobile">
                            <a href="#skills">
                                SKILLS
                            </a>
                        </li>
                        <li className="hideOnMobile">
                            <a href="#pro">
                                PORJECTS
                            </a>
                        </li>
                        <li className="hideOnMobile">
                            <a href="#cont">
                                CONTACT ME
                            </a>
                        </li>
                        <li
                            className="menu-button"
                            onClick="showSidebar()"
                        >
                            <a href="#">
                                <img
                                    alt="menu button"
                                    src={hambuger}
                                />
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header;