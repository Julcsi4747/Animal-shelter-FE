import { DogModel } from "../models/adopt.model";
import request, {Methods} from "../../util/request";

class AdoptService {
    async getDogs() {
        return request<DogModel[]>({ method: Methods.GET, resource: "dogs" });
    }

    async getDog(id: string) {
        return request<DogModel>({ resource: `dogs/${id}`, method: Methods.GET });
    }
}


export const adoptService = new AdoptService();