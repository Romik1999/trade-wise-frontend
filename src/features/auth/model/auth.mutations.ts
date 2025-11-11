import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { AuthApi } from '../api/auth.api.ts'
import { saveTokenStorage } from '../../../shared/api/axios.ts'
import { FULL_ROUTES } from '../../../shared/constants/routes.ts'
import { userSet } from '../../../entities/user/store'

export const useLoginMutation = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationKey: ['auth user'],
    mutationFn: AuthApi.login,
    onSuccess: ({ data }) => {
      if (data?.data?.token) {
        saveTokenStorage(data?.data?.token)
        userSet(data?.data?.user)
        navigate(FULL_ROUTES.PRIVATE.HOME, { replace: true })
      }
    },
    onError: (error) => {
      console.log('error: ', error)
    }
  })
}
