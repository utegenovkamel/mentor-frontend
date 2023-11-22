import { TagDto } from '@/types/tag.interface';
import { SocialNetworkDto } from '@/types/social-network.interface';

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
