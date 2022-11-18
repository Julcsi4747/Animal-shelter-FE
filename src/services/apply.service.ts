import request, {Methods} from "../util/request";
import {ApplyFormValues} from "../models/apply.model";

class ApplyService {
    async apply(data: ApplyFormValues, id: string | undefined) {
        return request({method: Methods.POST, data, resource: `apply/${id}`});
    }
}
export const applyService = new ApplyService();