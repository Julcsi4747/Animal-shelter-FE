import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

import Page from "../../components/page/Page";
import TextField from "../../components/text-field/TextField";
import { UserFormValues, UserModel } from "../../models/user.model";
import { usersService } from "../../services/user.service";
import Button from "../../components/button/Button";

const ProfileUpdatePage = () => {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<UserModel>();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () =>
            setUser(await usersService.getUser());
            fetchUser();
    }, [id]);

    const initialValues: UserFormValues = {
        name: user?.name || "",
        email:user?.email ||"",
        imageUrl: user?.imageUrl || "",
    };

    const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required(),
        imageUrl: Yup.string().required(),
    });

    const handleSubmit = async (values: UserFormValues) => {
        if (user?.id) {
            await usersService.updateUser(user.id.toString(), values);
        }
        goToProfilePage();
    };

    const goToProfilePage = () => {
        navigate("/user/:id");
    };

    return (
        <Page title={user ? user.name : "Profilom"}>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
                enableReinitialize
                validateOnMount
                validateOnChange
            >
                <Form>
                    <TextField name="name" label="Név" />
                    <TextField name="email" label="E-mail cím" />
                    <TextField name="imageUrl" label="Image url" />

                    <div className="mt-3">
                        <Button type="submit">Szerkesztés</Button>
                    </div>
                </Form>
            </Formik>
        </Page>
    );
};

export default ProfileUpdatePage;
