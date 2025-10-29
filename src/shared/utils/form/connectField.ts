import type { Control, FieldPath, FieldValues, UseFormReturn } from 'react-hook-form'

export type DeepValue<
    // The object or array in which we have the property whose type we're trying to infer
    TValue,
    // A string representing the path of the property we're trying to access
    TAccessor,
> =
// If TValue is any it will recurse forever, this terminates the recursion
    unknown extends TValue
        ? TValue
        : // Check if we're looking for the property in an array
        TValue extends ReadonlyArray<unknown>
            ? TAccessor extends `${infer TBrackets}.${infer TAfter}`
                ? /*
          Extract the first element from the accessor path (`TBrackets`)
          and recursively call `DeepValue` with it
          */
                DeepValue<DeepValue<TValue, TBrackets>, TAfter>
                : TAccessor extends `[${infer TBrackets}]`
                    ? DeepValue<TValue, TBrackets>
                    : TAccessor extends keyof TValue
                        ? TValue[TAccessor]
                        : TValue[TAccessor & number]
            : // Check if we're looking for the property in an object
            TValue extends Record<string | number, unknown>
                ? TAccessor extends `${infer TBefore}[${infer TEverythingElse}`
                    ? DeepValue<DeepValue<TValue, TBefore>, `[${TEverythingElse}`>
                    : TAccessor extends `[${infer TBrackets}]`
                        ? DeepValue<TValue, TBrackets>
                        : TAccessor extends `${infer TBefore}.${infer TAfter}`
                            ? DeepValue<DeepValue<TValue, TBefore>, TAfter>
                            : TAccessor extends string
                                ? TValue[TAccessor]
                                : never
                : // Do not allow `TValue` to be anything else
                never

export type UnitObject<K extends string, V> = {
  [key in K]: V
}

export interface IFieldConnector<Name extends string, Type> {
  name: Name
  control: Control<UnitObject<Name, Type>, Name>
}

export const connectField = <T extends FieldValues, Name extends FieldPath<T>>(
  form: UseFormReturn<T>,
  name: Name
): IFieldConnector<Name, DeepValue<T, Name>> => {
  return {
    name,
    control: form.control as unknown as Control<
        UnitObject<Name, DeepValue<T, Name>>,
        Name
    >
  }
}
