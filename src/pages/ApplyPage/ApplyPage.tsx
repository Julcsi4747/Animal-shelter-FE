import { Form, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

import Page from "../../components/page/Page";
import TextField from "../../components/text-field/TextField";
import Button from "../../components/button/Button";
import { ApplyFormValues } from "../../models/apply.model";
import { applyService } from "../../services/apply.service";

const ApplyPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const initialValues: ApplyFormValues = {
        introduction: "",
    };

    const schema = Yup.object().shape({
        introduction: Yup.string().required(),
    });

    const handleSubmit = async (values: ApplyFormValues) => {
        await applyService.apply(values, id);
        goToAdoptPage();
    };

    const goToAdoptPage = () => {
        navigate("/adopt");
    };

    const goToDogDetailPage = (id: string | undefined) => {
        navigate(`/dog/detail/${id}`);
    };

    return (
        <Page title="Jelentkezés örökbefogadásra">
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
                enableReinitialize
                validateOnMount
                validateOnChange
            >
                <Form>
                    <TextField name="introduction" label="Kérjük írd le miért te lennél a legmegfelelőbb gazdi:" />

                    <div className="mt-3">
                        <Button
                            color="secondary"
                            type="button"
                            className="me-2"
                            onClick={() => goToDogDetailPage(id)}
                        >
                            Vissza
                        </Button>
                        <Button type="submit" onClick={goToAdoptPage}>Jelentkezés</Button>
                    </div>
                </Form>
            </Formik>
        </Page>
    );
};

export default ApplyPage;
