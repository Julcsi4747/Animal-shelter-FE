import { SignUpCredentialsModel } from "../models/signup.model";
import request, { Methods } from "../util/request";
import {UserModel} from "../models/user.model";

class SignUpService {
    async signup(credentials: SignUpCredentialsModel) {
        return request<UserModel>({
            method: Methods.POST,
            resource: "user/registration",
            data: credentials,
        });
    }
}

export const signupService = new SignUpService();