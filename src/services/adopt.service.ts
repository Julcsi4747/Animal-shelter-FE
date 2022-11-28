import { DogFormValues, DogModel } from "../models/adopt.model";
import { WalkFormValues } from "../models/walk.model";
import request, {Methods} from "../util/request";

class AdoptService {
    async getDogs() {
        return request<DogModel[]>({ method: Methods.GET, resource: "dogs" });
    }

    async getDog(id: string) {
        return request<DogModel>({ resource: `dogs/${id}`, method: Methods.GET });
    }

    async updateDog(id: string, data: DogFormValues) {
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

    async deleteDog(id: string) {
        return request({ method: Methods.DELETE, resource: `dogs/${id}` });
    }

    async walk(data: WalkFormValues, id: string | undefined) {
        return request({method: Methods.POST, data, resource: `dogs/${id}/walk`});
    }
}

export const adoptService = new AdoptService();