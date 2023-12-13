import { Tag } from '~/shared/services/tag/types.ts';

export interface SocialNetwork {
  id: number
  name: string
  link: string
}

export interface User {
  id: number;
  username: string;
  name: string;
  description: string;
  birthDate: number;
  avatarPath: string;
  socialNetworks: SocialNetwork[];
  tags: Tag[];
}
