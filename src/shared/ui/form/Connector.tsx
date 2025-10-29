import { Controller, useFormContext } from 'react-hook-form'
import type { ReactElement } from 'react'
import type { IEventValue } from '../../utils/common.ts'
import type { IFieldConnector } from '../../utils/form'

export interface IConnectorRenderProps<Value> {
  name: string
  value: Value
  error?: string
  invalid: boolean
  onReset: () => void
  onBlur: () => void
  onChange: (event: IEventValue | Value) => void
  // Совместимость с инпутами mos-cat
  hasError: boolean
}

export interface IConnectorProps<Name extends string, Value> {
  connector: IFieldConnector<Name, Value>
  render: (props: IConnectorRenderProps<Value>) => ReactElement
}

export const Connector = <Name extends string, Value>({
  connector,
  render
}: IConnectorProps<Name, Value>) => {
  const formContext = useFormContext()

  return (
    <Controller
      control={connector.control}
      name={connector.name as never}
      render={({ field, fieldState, formState }) => {
        const handleChange = (event: IEventValue | Value) => {
          field.onChange(event)
          if (fieldState.invalid && formContext) {
            formContext.clearErrors(field.name)
          }
        }

        return render({
          name: field.name,
          value: field.value as never,
          error: fieldState.error?.message ?? fieldState.error?.root?.message,
          invalid: fieldState.invalid,
          onBlur: field.onBlur,
          onChange: handleChange,
          hasError: fieldState.invalid,
          onReset: () => field.onChange(formState.defaultValues?.[field.name])
        })
      }}
    />
  )
}
