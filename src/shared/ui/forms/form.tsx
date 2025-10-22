import { type FC, type ReactNode, useLayoutEffect, useRef } from 'react'
import { FormProvider, type UseFormReturn, useFormState } from 'react-hook-form'
import { noop } from '../../utils/common.ts'
import { Stack } from '@mui/material'

interface IFormProps {
    onSubmit: ()=>void
    children: ReactNode
    form: UseFormReturn
}

export const Form: FC<IFormProps> = ({ onSubmit, children, form }) => {
  const ref = useRef<HTMLFormElement | null>(null)

  const state = useFormState({
    control: form.control
  })

  useLayoutEffect(() => {
    if (!state.errors) {
      const label = ref.current?.querySelector('*[aria-invalid=true]')
      const input = label?.querySelector('input, select, textarea')

      label?.scrollIntoView({
        block: 'nearest'
      })
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      input?.focus()
    }
  }, [state.errors])

  return (
    <FormProvider {...form}>
      <form ref={ref} onSubmit={form.handleSubmit(onSubmit ?? noop)}>
        <Stack spacing={'24px'}>
          {children}
        </Stack>
      </form>
    </FormProvider>
  )
}
