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
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDog = async (id: string) =>
            setDog(await adoptService.getDog(id.toString()));
        if (id) {
            fetchDog(id);
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
        imageUrl: Yup.string().required(),
        breed: Yup.string().required(),
        gender: Yup.string().required(),
        castrated: Yup.boolean().required(),
        color: Yup.string().required(),
        birthDate: Yup.date().required(),
        description: Yup.string().required(),
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
        <Page title={dog ? dog.name : "Dog"}  loading={loading}>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
                enableReinitialize
                validateOnMount
                validateOnChange
            >
                <Form>
                    <TextField name="name" label="N??v" />
                    <TextField name="breed" label="Fajta" />
                    <TextField name="gender" label="Nem" />
                    <TextField name="castrated" label="Ivartalan??tva" />
                    <TextField name="color" label="Sz??n" />
                    <TextField name="birthDate" label="Sz??let??s" />
                    <TextField name="description" label="Le??r??s" />
                    <TextField name="imageUrl" label="K??p" />


                    <div className="mt-3">
                        <Button
                            color="secondary"
                            type="button"
                            className="me-2"
                            onClick={goToAdoptPage}
                        >
                            Vissza
                        </Button>
                        <Button type="submit">{id ? "Friss??t??s" : "L??trehoz??s"}</Button>
                    </div>
                </Form>
            </Formik>
        </Page>
    );
};

export default DogPage;