import { createContext, useContext } from 'react'

export const createCtxHook = <A extends {} | null>() => {
	const ctx = createContext<A | undefined>(undefined)

	const useCtx = () => {
		const c = useContext(ctx)
		if (c === undefined) {
			throw new Error(
				'useCtx должна находиться внутри провайдера с каким-либо значением'
			)
		}
		return c
	}

	return { values: useCtx, Provider: ctx.Provider } as const
}
