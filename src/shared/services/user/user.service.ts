import {UserDto} from '@/shared/services/user/user.interface';
import {axiosInstance} from "@/shared/api";

const domainName = 'user';

export class UserService {
  static async getById(id: number) {
    return await axiosInstance.post<UserDto>(`${domainName}/${id}`);
  }

  static async getAll() {
    return await axiosInstance.post<UserDto[]>(`${domainName}/all`);
  }

  static async update(user: UserDto) {
    return await axiosInstance.put(`${domainName}`, user);
  }
}
