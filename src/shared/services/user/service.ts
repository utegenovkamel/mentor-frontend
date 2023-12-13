import {User} from '~/shared/services/user/types.ts';
import {axiosInstance} from "~/shared/api";

const domainName = 'user';

export class UserService {
  static async getById(id: number) {
    return await axiosInstance.post<User>(`${domainName}/${id}`);
  }

  static async getAll() {
    return await axiosInstance.post<User[]>(`${domainName}/all`);
  }

  static async update(user: User) {
    return await axiosInstance.put(`${domainName}`, user);
  }
}
