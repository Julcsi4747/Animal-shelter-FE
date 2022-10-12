import { useEffect, useState } from "react";
import { Formik } from "formik";
import { useParams } from "react-router-dom";

import Page from "../../components/page/Page";
import { DogValues, DogModel } from "../models/adopt.model";
import { adoptService } from "../services/adopt.service";

const DogPage = () => {
    const { id } = useParams<{ id: string }>();
    const [dog, setDog] = useState<DogModel>();

    useEffect(() => {
        const fetchDog = async (id: string) =>
            setDog(await adoptService.getDog(id));
        if (id) {
            fetchDog(id);
        }
    }, [id]);

    const initialValues: DogValues = {
        name: dog?.name || "",
        imageUrl: dog?.imageUrl || "",
        breed: dog?.breed || "",
        gender: dog?.gender || "",
        castrated: dog?.castrated || false,
        color: dog?.color || "",
        birthDate: dog?.birthDate || new Date("2022-01-01"),
        description: dog?.description || "",
    };

    const handleSubmit = (values: DogValues) => {
        console.log("form values", values);
    };

    return (
        <Page title={dog ? dog.name : "Dog"}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}></Formik>
        </Page>
    );
};

export default DogPage;