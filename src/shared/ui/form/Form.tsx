import { type PropsWithChildren, useLayoutEffect, useRef } from 'react'
import { type FieldValues, FormProvider, useFormState } from 'react-hook-form'
import { Stack } from '@mui/material'
import { noop } from '../../utils/common.ts'
import type { UseFormResult } from '../../utils/form'

export interface IFormProps<T extends FieldValues> {
  onSubmit?: () => void
  maxWidth?: (number | string)[]
  form: UseFormResult<T>
}

export const Form = ({ onSubmit, children, form }: PropsWithChildren<IFormProps<T>>) => {
  const ref = useRef(null)

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
      input?.focus()
    }
  }, [state.errors])

  return (
    <FormProvider {...form}>
      <form ref={ref} onSubmit={form.handleSubmit(onSubmit ?? noop)}>
        <Stack spacing="16px">
          {children}
        </Stack>
      </form>
    </FormProvider>
  )
}
