import React from "react";
import {Link} from "react-router-dom";


const HomePage = () => {
    return <div className="container d-flex justify-content-center">
        <div className="card my-4  p-4 bg-white shadow text-center">
            <h5><b>Főoldal</b></h5>
            <div className="d-flex justify-content-center flex-wrap gap-2">
                <Link to={'/adopt'}>
                    <button className="btn btn-primary ">
                        Gazdit keresek
                    </button>
                </Link>
                <Link to={'/foster'}>
                    <button className="btn btn-primary">
                        Ideiglenes örökbefogadás
                    </button>
                </Link>
                <Link to={'/signin'}>
                    <button className="btn btn-primary">
                        Regisztráció/Bejelentekzés
                    </button>
                </Link>
            </div>
        </div>
    </div>
};

export default HomePage;