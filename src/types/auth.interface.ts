import { UserDto } from '@/types/user.interface';

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IAuthResponse extends ITokens {
  user: UserDto;
}

export interface ILoginRequest extends Pick<UserDto, 'username'> {
  password: string;
}

export interface IRegisterRequest extends UserDto {}
