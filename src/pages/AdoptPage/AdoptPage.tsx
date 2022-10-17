import {useCallback, useEffect, useState} from "react";
import classNames from "classnames";
import {Link, useNavigate} from "react-router-dom";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../../components/button/Button";
import Page from "../../components/page/Page";
import { DogModel } from "../../models/adopt.model";
import { adoptService } from "../../services/adopt.service";

import classes from "./AdoptPage.module.scss";

const AdoptPage = () => {
    const [dogs, setDogs] = useState<DogModel[]>([]);
    const navigate = useNavigate();

    const fetchDogs = useCallback(async () => {
        setDogs(await adoptService.getDogs());
    }, []);

    useEffect(() => {
        const fetchDogs = async () => {
            setDogs(await adoptService.getDogs());
        };

        fetchDogs();
    }, []);

    const goToAdoptPage = () => {
        navigate("/adopt");
    };

    const handleDeleteDog = async (id: string) => {
        await adoptService.deleteDog(id);
        fetchDogs();
    };

    return (
        <Page title="Adopt">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <Button className="w-100 mb-3" onClick={goToAdoptPage}>Create Dog</Button>
                </div>
            </div>
            <div className="row">
                {dogs.map(({ id, imageUrl , name }) => (
                    <div key={id} className="col-12 col-sm-6 col-md-4 col-lg-3 my-1">
                        <Link
                            to={`/adopt/${id}`}
                            className={classNames("card", classes.DogCard)}
                        >
                            <img
                                src={imageUrl}
                                alt={`dog #${id}`}
                                className={classNames(classes.DogImage, "card-img-top")}
                            />
                            <div className="card-body">
                                <h5>{name}</h5>
                            </div>
                            <Button className={classes.DeleteIcon}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleDeleteDog(id.toString());
                                    }}>
                                <FontAwesomeIcon icon={faTrash} />
                            </Button>
                        </Link>
                    </div>
                ))}
            </div>
        </Page>
    );
};

export default AdoptPage;