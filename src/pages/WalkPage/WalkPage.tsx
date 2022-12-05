import { Form, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

import Page from "../../components/page/Page";
import TextField from "../../components/text-field/TextField";
import Button from "../../components/button/Button";
import { WalkFormValues } from "../../models/walk.model";
import { adoptService } from "../../services/adopt.service";

const WalkPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const initialValues: WalkFormValues = {
        date: new Date("2022-11-01")
    };

    const schema = Yup.object().shape({
        date: Yup.date().required(),
    });

    const handleSubmit = async (values: WalkFormValues) => {
        await adoptService.walk(values, id);
        goToAdoptPage();
    };

    const goToAdoptPage = () => {
        navigate("/adopt");
    };

    const goToDogDetailPage = (id: string | undefined) => {
        navigate(`/dog/detail/${id}`);
    };

    return (
        <Page title="Kérlek jelezd számunkra, hogy mely időpontban tudsz jönni sétáltatásra">
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
                enableReinitialize
                validateOnMount
                validateOnChange
            >
                <Form>
                    <TextField name="introduction" label="Időpont megadása" />
                    <div className="mt-3">
                        <Button
                            color="secondary"
                            type="button"
                            className="me-2"
                            onClick={() => goToDogDetailPage(id)}
                        >
                            Vissza
                        </Button>
                        <Button type="submit">Jelentkezés</Button>
                    </div>
                    <div className="card text-white bg-secondary mb-3" style={{maxWidth: 600, marginTop: 30}}>
                        <div className="card-header">Figyelem!</div>
                        <div className="card-body">
                        <h5 className="card-title">Fontos tudnivalók!</h5>
                        <p className="card-text"> Ha számunkra nem megfelelő az általad megadott időpont, akkor a profilodban megadott e-mail címen keresztül értesítünk.</p>
                    </div>
                    </div>
                </Form>
            </Formik>
        </Page>
    );
};

export default WalkPage;
