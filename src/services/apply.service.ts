import request, {Methods} from "../util/request";
import {ApplyFormValues} from "../models/apply.model";


class ApplyService {
    async apply(data: ApplyFormValues) {
        return request({method: Methods.POST, data, resource: "apply"});
    }
}
export const applyService = new ApplyService();