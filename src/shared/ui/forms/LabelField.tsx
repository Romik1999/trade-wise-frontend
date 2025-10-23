import type { JSX, RefCallback } from 'react'
import { useId } from 'react'
import { Connector } from './connector.tsx'
import type { Control } from 'react-hook-form'

export interface IEventValue<Value = string> {
    target: {
        value: Value
    }
}

export interface IFieldConnector<Type> {
    name: string
    control: Control
    defaultValue?: Type
}

export interface ILabelConnectorProps<Value> {
    label: string | undefined
    ref: RefCallback<unknown>
    name: string
    value: Value
    error?: string
    invalid: boolean
    onBlur: () => void
    onChange: (event: IEventValue | Value) => void
    id: string
}

export interface IFieldProps<Value> {
    label?: string
    connector: IFieldConnector<Value>
    render: (props: ILabelConnectorProps<Value>) => JSX.Element
}

const LabelledField = ({ label, render, connector }: IFieldProps<Value>) => {
  const id = useId()

  return (
    <Connector
      connector={connector}
      render={(props) => {
        return (
          <>
            {render({
              ...props,
              label,
              id
            })}
          </>
        )
      }}
    />
  )
}

export default LabelledField
