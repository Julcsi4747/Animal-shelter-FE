import { DogFormValues, DogModel } from "../models/adopt.model";
import request, {Methods} from "../util/request";

class AdoptService {
    async getDogs() {
        return request<DogModel[]>({ method: Methods.GET, resource: "dogs" });
    }

    async getDog(id: number) {
        return request<DogModel>({ resource: `dogs/${id}`, method: Methods.GET });
    }

    async updateDog(id: number, data: DogFormValues) {
        return request<DogModel>({
            method: Methods.PATCH,
            data,
            resource: `dogs/${id}`,
        });
    }

    async createDog(data: DogFormValues) {
        return request<DogModel>({
            method: Methods.POST,
            data,
            resource: "dogs",
        });
    }

    async deleteDog(id: number) {
        return request({ method: Methods.DELETE, resource: `dogs/${id}` });
    }
}


export const adoptService = new AdoptService();