import { FC } from "react";
import classNames from "classnames";

import classes from "./Navbar.module.scss";

const Navbar: FC = () => {
    return (
        <nav className={classNames("navbar", [classes.Navbar])}>
            <div className="ps-3 d-flex flex-grow-1">Állatmenhely</div>
        </nav>
    );
};

export default Navbar;
