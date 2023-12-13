import { User } from '~/shared/services/user/types.ts';

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthResponse extends Tokens {
  user: User;
}

export interface LoginRequest extends Pick<User, 'username'> {
  password: string;
}

export interface RegisterRequest extends User {}
