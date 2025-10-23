import { useForm } from '../../../shared/utils/form'
import { authSchema } from './auth.schema.ts'
import { useLoginMutation } from './auth.mutations.ts'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export enum EnumTokens {
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken'
}

export const useAuth = () => {
  const form = useForm({
    defaultValues: { email: '', password: '' },
    schema: authSchema
  })

  const { mutate } = useLoginMutation()

  const onSubmit = (data) => {
    console.log({ data })
    mutate(data)
  }

  return { form, loginFormSubmitFunction: form.handleSubmit(onSubmit), onSubmit }
}
