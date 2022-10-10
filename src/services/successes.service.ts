import request, { Methods } from "../util/request";
import { SuccessesModel } from "../models/successes.model";

class SuccessesService {
    async getSuccess() {
        return request<SuccessesModel[]>({ method: Methods.GET, resource: "adoption" });
    }
}

export const successesService = new SuccessesService();
