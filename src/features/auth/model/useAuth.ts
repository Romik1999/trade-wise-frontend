import { useForm } from '../../../shared/utils/form'
import { authSchema } from './auth.schema.ts'
import { useLoginMutation } from './auth.mutations.ts'
import type { IAuthRequest } from './types.ts'

export const useAuth = () => {
  const form = useForm({
    defaultValues: { email: '', password: '' },
    schema: authSchema
  })

  const { mutate } = useLoginMutation()

  const onSubmit = (data: IAuthRequest) => {
    mutate(data)
  }

  return { form, onSubmit }
}
