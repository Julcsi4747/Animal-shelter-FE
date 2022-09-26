import React from "react";
import {Link} from "react-router-dom";

const FosterPage = () => {
    return <div className="container d-flex justify-content-center">
        <div className="card my-4  p-4 bg-white shadow text-center">
            <h5><b>Ideiglenes örökbefogadás</b></h5>
            <div className="d-flex justify-content-center flex-wrap gap-2">
                <Link to={'/home'}>
                    <button className="btn btn-primary">
                        Főoldal
                    </button>
                </Link>
                <Link to={'/adopt'}>
                    <button className="btn btn-primary">
                        Gazdit keresek
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

export default FosterPage;