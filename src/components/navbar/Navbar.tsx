import { FC } from "react";
import classNames from "classnames";

import classes from "./Navbar.module.scss";
import {NavLink} from "react-router-dom";
import "./navbar.scss";

interface RouteConfig{
    link: string;
    label: string;
}

const Navbar: FC = () => {

    const routes: RouteConfig[] = [
        { label: "Főoldal", link: "/home" },
        { label: "Gazdit keresek", link: "/adopt"},
        { label: "Ideiglenes örökbefogadás", link: "/foster"},
        { label: "Belépés/Regisztráció", link: "/signin"},
        { label: "Sikersztorik", link: "/successes"},
    ];

    return (
        <nav className={classNames("navbar p-3", [classes.Navbar])}>
            <div className="d-flex align-items-center justify-content-between flex-grow-1 flex-wrap">
                <div className="d-flex">
                    {routes.map(({link, label}) => (
                        <NavLink key={link} to={link} className="nav-link me-4">
                            {label}
                        </NavLink>
                    ))}
                </div>
                <div className="align-items-end"> Tappancs Állatmenhely</div>
            </div>
        </nav>
    );
};

export default Navbar;
