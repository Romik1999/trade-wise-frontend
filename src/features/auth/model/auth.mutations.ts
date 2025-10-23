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
    onSuccess: (response) => {
      if (response.data.accessToken) {
        saveTokenStorage(response.data.accessToken)
      }
      navigate(PRIVATE_PAGES.HOME)
    },
    onError: (error) => {
      console.log('error: ', error)
    }
  })
}
