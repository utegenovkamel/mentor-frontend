import Cookies from 'js-cookie'
import { IAuthResponse, ITokens } from '@/types/auth.interface.ts'
import { localStorageWrapper } from '@/shared/helpers'
import { UserDto } from '@/types/user.interface.ts'

export const getAccessToken = () => Cookies.get('accessToken')

export const getRefreshToken = () => Cookies.get('refreshToken')

export const getUserFromStorage = () => {
	return localStorageWrapper.get<UserDto>('user')
}

export const saveTokensStorage = (data: ITokens) => {
	Cookies.set('accessToken', data.accessToken)
	Cookies.set(' refreshToken', data.refreshToken)
}
export const removeFromStorage = () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
	localStorageWrapper.remove('user')
}
export const saveToStorage = (data: IAuthResponse) => {
	saveTokensStorage(data)
	localStorageWrapper.set('user', data.user)
}
