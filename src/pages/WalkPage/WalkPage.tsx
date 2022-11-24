import { Form, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

import Page from "../../components/page/Page";
import TextField from "../../components/text-field/TextField";
import Button from "../../components/button/Button";
import { WalkFormValues } from "../../models/walk.model";
import { applyService } from "../../services/apply.service";
import { adoptService } from "../../services/adopt.service";

const WalkPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const initialValues: WalkFormValues = {
        date: new Date("")
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
                    <div>
                        <h4>Figyelem! Ha számunkra nem megfelelő az általad megadott időpont, akkor a profilodban megadott e-mail címen keresztül értesítünk.</h4>
                    </div>
                </Form>
            </Formik>
        </Page>
    );
};

export default WalkPage;
