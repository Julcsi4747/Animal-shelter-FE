import React from "react";
import {Form, Formik} from "formik";
import * as Yup from "yup";

import TextField from "../../components/text-field/TextField";
import Button from "../../components/button/Button";
import { SignUpCredentialsModel } from "../../models/signup.model";
import {signupService} from "../../services/signup.service";

const SignUpPage = () => {
    const handleSubmit = async (values: SignUpCredentialsModel) => {
        await signupService.signup(values);
    };

    const initialValues: SignUpCredentialsModel = { name: "", email: "", password: "", confirmPassword: "" };

    const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().required(),
        confirmPassword: Yup.string().required(),
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card shadow mt-3">
                        <div className="card-body">
                            <h5 className="card-title text-center">Regisztráció</h5>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={schema}
                                onSubmit={handleSubmit}
                            >
                                <Form>
                                    <TextField name="name" label="Név" className="mb-3" />
                                    <TextField name="email" label="E-mail cím" className="mb-3" />
                                    <TextField
                                        name="password"
                                        label="Jelszó"
                                        type="password"
                                        className="mb-3"
                                    />
                                    <TextField
                                        name="confirmPassword"
                                        label="Jelszó megerősítése"
                                        type="password"
                                        className="mb-3"
                                    />
                                    <Button type="submit">Regisztráció</Button>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;