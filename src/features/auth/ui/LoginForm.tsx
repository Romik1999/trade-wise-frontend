import { Button, Stack, TextField } from '@mui/material'
import { useAuth } from '../model/useAuth'
import { Form, LabelledField } from '../../../shared/ui/form'

const LoginForm = () => {
  const { form, onSubmit } = useAuth()

  return (
    <Form form={form} onSubmit={onSubmit}>
      <Stack spacing={'12px'}>
        <LabelledField
          label="Почта"
          connector={form.connect('email')}
          render={(field) => (
            <TextField {...field} />
          )}
        />

        <LabelledField
          label="Пароль"
          connector={form.connect('password')}
          render={(field) => (
            <TextField type="password" {...field}/>
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
