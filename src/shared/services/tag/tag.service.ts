import {axiosInstance} from "@/shared/api";

const domainName = 'tag';

export const TagService =  {
   getAll: async () => {
    return await axiosInstance.get(`${domainName}`);
  },
}
