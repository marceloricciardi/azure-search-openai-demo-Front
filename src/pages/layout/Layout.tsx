import { Outlet, NavLink, Link } from "react-router-dom";

import github from "../../assets/github.svg";

import styles from "./Layout.module.css";

import logoOswaldoCruz from "../../assets/logo-oswaldo-cruz.png";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        {/* <h3 className={styles.headerTitle}>GPT + Enterprise data | Sample</h3> */}
                        <img src="/src/assets/logo-ayres.png" alt="Ayres Advogados" aria-label="Logo Ayres Advogados" width="80px" height="28px" />
                    </Link>
                    <nav>
                        <ul className={styles.headerNavList}>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Chat
                                </NavLink>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                <NavLink to="/qa" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    {/* Tire uma dúvida */}
                                </NavLink>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                {/* <a href="https://aka.ms/entgptsearch" target={"_blank"} title="Github repository link">
                                    <img
                                        src={github}
                                        alt="Github logo"
                                        aria-label="Link to github repository"
                                        width="20px"
                                        height="20px"
                                        className={styles.githubLogo}
                                    />
                                </a> */}
                            </li>
                        </ul>
                    </nav>
                    {/* <h4 className={styles.headerRightText}>Azure OpenAI + Cognitive Search</h4> */}
                    <img
                        src={logoOswaldoCruz}
                        alt="Oswaldo Cruz"
                        aria-label="Logo Oswaldo Cruz"
                        width="80px"
                        height="28px"
                        // className={styles.githubLogo}
                    />
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
