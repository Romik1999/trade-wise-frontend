import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useMemo } from 'react'
import { connectField } from './connectField.ts'
import { useForm as useHookForm } from 'react-hook-form'

export const useForm = ({ schema, ...input }) => {
  const form = useHookForm({
    resolver: zodResolver(schema),
    reValidateMode: 'onSubmit',
    ...input
  })

  const connect = useCallback((name) => connectField(form, name), [form])

  return useMemo(
    () => ({
      ...form,
      connect
    }),
    [form, connect]
  )
}
