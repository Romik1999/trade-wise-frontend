import { type Control, Controller, useFormContext } from 'react-hook-form'
import type { ReactElement, RefCallback } from 'react'

interface IEventValue {
    target: {
        value: any
    }
}

export interface IConnectorRenderProps {
    ref: RefCallback<unknown>
    name: string
    value: any
    error?: string
    invalid: boolean
    onBlur: () => void
    onChange: (event: IEventValue) => void
    hasError?: boolean
}

interface IConnectorProps {
    connector: {
        name: string
        control: Control

    }
    render: (props: IConnectorRenderProps) => ReactElement
}

export const Connector = ({ connector, render }: IConnectorProps) => {
  const context = useFormContext()
  return (
    <Controller
      control={connector.control}
      name={connector.name}
      render={({ field, fieldState }) => {
        return render({
          ref: field.ref,
          name: field.name,
          value: field.value,
          error: fieldState.error?.message ?? fieldState.error?.root?.message,
          invalid: fieldState.invalid,
          onBlur: field.onBlur,
          onChange: (value) => {
            context.clearErrors(field.name)
            field.onChange(value)
          },
          hasError: fieldState.invalid
        })
      }}
    />
  )
}
