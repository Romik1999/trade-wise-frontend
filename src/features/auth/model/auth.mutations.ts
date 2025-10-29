import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { AuthApi } from '../api/auth.api.ts'
import { saveTokenStorage } from '../../../shared/api/axios.ts'
import { PRIVATE_PAGES } from '../../../app/routes'

export const useLoginMutation = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationKey: ['auth user'],
    mutationFn: AuthApi.login,
    onSuccess: ({ data }) => {
      console.log({ data })
      if (data?.data?.token) {
        saveTokenStorage(data?.data?.token)
      }
      navigate(PRIVATE_PAGES.HOME)
    },
    onError: (error) => {
      console.log('error: ', error)
    }
  })
}
