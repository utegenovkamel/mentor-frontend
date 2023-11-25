import { TagDto } from '@/shared/services/tag/tag.interface';

export interface SocialNetworkDto {
  id: number
  name: string
  link: string
}

export interface UserDto {
  id: number;
  username: string;
  name: string;
  description: string;
  birthDate: number;
  avatarPath: string;
  socialNetworks: SocialNetworkDto[];
  tags: TagDto[];
}
