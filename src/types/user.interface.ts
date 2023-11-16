import { TagDto } from '@/types/tag.interface';
import { SocialNetworkDto } from '@/types/social-network.interface';

export interface UserDto {
  id: number;
  username: string;
  password: string;
  name: string;
  age: number;
  phoneNumber: string;
  email: string;
  avatarPath: string;
  socialNetworks: SocialNetworkDto[];
  tags: TagDto[];
}
