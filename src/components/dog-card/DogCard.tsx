import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import Button from "../button/Button";
import { DogModel } from "../../models/adopt.model";
import AccessController from "../access-controller/AccessController";
import { hasPermission } from "../../util/hasPermission";

import classes from "./DogCard.module.scss";

interface DogCardProps {
    dog: DogModel;
    handleDeleteDog: (id: number) => void;
}

const DogCard = ({ dog, handleDeleteDog }: DogCardProps) => {
    const { id, imageUrl, name } = dog;

    const allowedDogChangeFor: Role[] = ["ADMIN"];

    const showLink = hasPermission(allowedDogChangeFor);

    const renderDogCardContent = () => (
        <>
            <img
                src={imageUrl}
                alt={`dog #${id}`}
                className={classNames(classes.DogImage, "card-img-top")}
            />
            <div className={classNames("card-body", classes.CardBody)}>
                <h5 className={classes.DogName}>{name}</h5>
            </div>
            <AccessController allowedFor={allowedDogChangeFor}>
                <Button 
                    className={classes.DeleteIcon}
                    onClick={(e) => {
                        e.preventDefault();
                        handleDeleteDog(id);
                    }}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </AccessController>

        </>
    );

    return showLink ? (
        <Link to={`/dog/${id}`} className={classNames("card", classes.DogCard)}>
            {renderDogCardContent()}
        </Link>
    ) : (
        <Link to={`/dog/detail/${id}`} className={classNames("card", classes.DogCard)}>
            {renderDogCardContent()}
        </Link>
    );
};

export default DogCard;