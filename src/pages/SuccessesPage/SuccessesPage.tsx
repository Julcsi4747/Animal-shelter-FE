import { useEffect, useState } from "react";
import classNames from "classnames";

import Page from "../../components/page/Page";
import { SuccessesModel } from "../../models/successes.model";
import { successesService } from "../../services/successes.service";

import classes from "./Successes.module.scss";

const SuccessesPage = () => {
    const [success, setSuccess] = useState<SuccessesModel[]>([]);

    useEffect(() => {
        const fetchSuccess = async () => {
            setSuccess(await successesService.getSuccess());
        };

        fetchSuccess();
    }, []);

    return (
        <Page title="Sikersztorik">
            <div className="row">
                {success.map(({ id, image, name, date }) => (
                    <div key={id} className="col-lg-4 col-md-6 col-sm-12">
                        <div
                            className={classNames(
                                "d-flex box-shadow align-items-center",
                                classes.Success
                            )}
                        >
                            <div
                                className={classes.SuccessImage}
                                style={{ backgroundImage: `url(${image})` }}
                            />
                            <div className="d-flex flex-column">
                                <h5 className="ms-3">{name}</h5>
                                <p className="ms-3 text-black-50">{date.toString()}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Page>
    );
};

export default SuccessesPage;
