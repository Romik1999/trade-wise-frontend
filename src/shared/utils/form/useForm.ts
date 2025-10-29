import { zodResolver } from '@hookform/resolvers/zod'
import { connectField, type DeepValue, type IFieldConnector } from './connectField.ts'
import {
  type FieldPath,
  type FieldValues,
  type Resolver,
  useForm as useHookForm,
  type UseFormProps,
  type UseFormReturn
} from 'react-hook-form'
import type { Schema } from 'zod'

export type UseFormInput<T extends FieldValues, Output> = Omit<
    UseFormProps<T>,
    'resolver'
> & {
  schema: Schema<Output>
}

export type UseFormResult<
    T extends FieldValues,
    Output extends FieldValues = object,
> = UseFormReturn<T, unknown, Output> & {
  connect: <Name extends FieldPath<T>>(
      name: Name,
  ) => IFieldConnector<Name, DeepValue<T, Name>>
}

export const useForm = <T extends FieldValues, Output extends FieldValues>({
  schema,
  ...input
}: UseFormInput<T, Output>): UseFormResult<T, Output> => {
  const form = useHookForm<T>({
    resolver: zodResolver(schema) as unknown as Resolver<T>,
    reValidateMode: 'onSubmit',
    ...input
  })

  const connect = <Name extends FieldPath<T>>(name: Name) =>
    connectField(form, name)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return {
    ...form,
    connect
  }
}
