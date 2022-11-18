import request, { Methods } from "../util/request";
import { UserFormValues, UserModel } from "../models/user.model";

class UsersService {
  async getMe() {
    return request<UserModel>({resource: `user/me`, method: Methods.GET});
  }

  async getUser(id: string) {
    return request<UserModel>({resource: `user/${id}`, method: Methods.GET});
  }

  async updateUser(id: string, data: UserFormValues) {
    return request<UserModel>({
      method: Methods.PATCH,
      data,
      resource: `user/${id}`,
    });
  }
}

export const usersService = new UsersService();
