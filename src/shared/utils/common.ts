export const noop = () => {}

export interface IEventValue<Value = string> {
    target: {
        value: Value
    }
}
