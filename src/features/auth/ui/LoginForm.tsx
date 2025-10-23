import { Button, Stack } from '@mui/material'
import { useAuth } from '../model/useAuth'
import { Form } from '../../../shared/ui/forms/form.tsx'
import LabelledField from '../../../shared/ui/forms/LabelField.tsx'
import FormField from '../../../shared/ui/forms/FormField.tsx'

const LoginForm = () => {
  const { form, loginFormSubmitFunction, onSubmit } = useAuth()

  return (
    <Form form={form} onSubmit={onSubmit}>
      <Stack spacing={'12px'}>
        <LabelledField
          label="Почта"
          connector={form.connect('email')}
          render={(field) => (
            <FormField {...field} />
          )}
        />

        <LabelledField
          label="Пароль"
          connector={form.connect('password')}
          render={(field) => (
            <FormField fieldName={field?.name} type="password" {...field}/>
          )}
        />

      </Stack>

      <Stack spacing={'12px'} direction={'row'}>
        <Button
          type={'submit'}
          variant={'contained'}
          color={'primary'}
          disabled={form.formState.isSubmitting}
          loading={form.formState.isSubmitting}
          fullWidth
        >
            Войти
        </Button>
      </Stack>
    </Form>
  )
}

export default LoginForm
