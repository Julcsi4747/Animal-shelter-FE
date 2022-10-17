import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

import Page from "../../components/page/Page";
import TextField from "../../components/text-field/TextField";
import {DogModel, DogFormValues} from "../../models/adopt.model";
import { adoptService } from "../../services/adopt.service";
import Button from "../../components/button/Button";


const DogPage = () => {
    const { id } = useParams<{ id: string }>();
    const [dog, setDog] = useState<DogModel>();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDogs = async (id: string) =>
            setDog(await adoptService.getDog(id));
        if (id) {
            fetchDogs(id);
        }
    }, [id]);

    const initialValues: DogFormValues = {
        name: dog?.name || "",
        imageUrl: dog?.imageUrl || "",
        breed: dog?.breed || "",
        gender: dog?.gender || "",
        castrated: dog?.castrated || false,
        color: dog?.color || "",
        birthDate: dog?.birthDate || new Date("2022-01-01"),
        description: dog?.description || "",
    };

    const schema = Yup.object().shape({
        name: Yup.string().required(),
        image: Yup.string().required(),
        badges: Yup.array(),
    });

    const handleSubmit = async (values: DogFormValues) => {
        if (dog?.id) {
            await adoptService.updateDog(dog.id.toString(), values);
        } else {
            await adoptService.createDog(values);
        }
        goToAdoptPage();
    };

    const goToAdoptPage = () => {
        navigate("/adopt");
    };

    return (
        <Page title={dog ? dog.name : "Dog"}>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
                enableReinitialize
                validateOnMount
                validateOnChange
            >
                <Form>
                    <TextField name="name" label="Name" />
                    <TextField name="image" label="Dog image url" />

                    <div className="mt-3">
                        <Button
                            color="secondary"
                            type="button"
                            className="me-2"
                            onClick={goToAdoptPage}
                        >
                            Back
                        </Button>
                        <Button type="submit">{id ? "Update" : "Create"}</Button>
                    </div>
                </Form>
            </Formik>
        </Page>
    );
};

export default DogPage;