import { createGlobalState } from 'react-hooks-global-state'

const initialState = {
  sessionToken: null as null | undefined | string,
  isAuth: false,
}
export type InitialStateType = typeof initialState

export const { useGlobalState } = createGlobalState(initialState)
