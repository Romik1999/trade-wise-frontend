import type { CSSProperties, JSX } from 'react'
import { type ReactNode, useId } from 'react'
import { Connector, type IConnectorRenderProps } from './Connector.tsx'
import type { IFieldConnector } from '../../utils/form'

export type ILabelConnectorProps<Value> = IConnectorRenderProps<Value> & {
    label: string | undefined
    id: string
}

export interface IFieldProps<Name extends string, Value> {
    label?: string
    actions?: (props: IConnectorRenderProps<Value>) => JSX.Element
    hint?: string | ReactNode
    additionalHint?: string | ReactNode
    maxWidth?: (number | string)[]
    ml?: number | string
    showError?: boolean | 'reserve-space'
    connector: IFieldConnector<Name, Value>
    render: (props: ILabelConnectorProps<Value>) => JSX.Element
    renderAs?: 'label' | 'div'
    space?: string
    errorStyle?: CSSProperties
}

export const LabelledField = <Name extends string, Value> ({ label, render, connector }: IFieldProps<Name, Value>) => {
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
