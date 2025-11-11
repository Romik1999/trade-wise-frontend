import { useUnit } from 'effector-react'
import { $user, $userLoading, userInit } from '../store'
import { useEffect } from 'react'

export const useUser = ()=>{
  const [user, isLoading, initUser] = useUnit([$user, $userLoading, userInit])

  useEffect(() => {
    initUser()
  }, [initUser])

  return {
    user,
    isLoading,
    isAuthenticated: !!user
  }
}
