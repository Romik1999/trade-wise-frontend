import { createEffect, createEvent, createStore, sample } from 'effector'
import type { IUserDTO } from '../model/type.ts'
import { getAccessToken } from '../../../shared/api/axios.ts'
import { currentUser } from '../../../shared/mocks/currentUser.ts'

export const userSet = createEvent<IUserDTO>()
export const userCleared = createEvent()
export const userInit = createEvent()

export const fetchUserFx = createEffect(async() => {
  // const response = fetchCurrentUser()
  // TODO: расскомментить как только бек добавит запрос на получение текущего юзера
  return currentUser
})

export const $user = createStore<IUserDTO | null>(null)
  .on(userSet, (_, user) => user)
  .on(fetchUserFx.doneData, (_, user) => user)
  .reset(userCleared)

export const $userLoading = fetchUserFx.pending

sample({
  clock: userInit,
  filter: () => !!getAccessToken(),
  target: fetchUserFx
})

sample({
  clock: fetchUserFx.fail,
  target: userCleared
})
