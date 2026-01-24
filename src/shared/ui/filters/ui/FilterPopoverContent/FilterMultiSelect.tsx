import { type FC } from 'react'
import type { ISelectMultipleFilter, ISelectOption } from '../../types'
import { Checkbox, FormControlLabel, Stack } from '@mui/material'

export interface IFilterSelectProps {
    filter: ISelectMultipleFilter
    localSelectedValue: any
    setLocalSelectedValue: (value: any) => void
}

export interface IFilterMultiSelectItemProps {
  option: ISelectOption
  isChecked: boolean,
  handleChange: () => void
}

const FilterMultiSelectItem:FC<IFilterMultiSelectItemProps> = ({ option, isChecked, handleChange })=>{
  return (
    <FormControlLabel
      value={option.value}
      control={
        <Checkbox
          checked={isChecked}
          onChange={()=> handleChange(option)}
        />
      }
      label={option.title}
      labelPlacement="end"
    />
  )
}

export const FilterMultiSelect: FC<IFilterSelectProps> = ({ filter, localSelectedValue, setLocalSelectedValue }) => {
  const { options, filterKey } = filter

  const handleChange = (multiselectItem) => {
    const currentArray = localSelectedValue[filterKey] || []
    const isChecked = !!currentArray.find((item) => item.value === multiselectItem.value)

    if (isChecked) {
      setLocalSelectedValue((prev) => ({
        ...prev,
        [filterKey]: prev[filterKey].filter((item) => item.value !== multiselectItem.value)
      }))
    } else {
      setLocalSelectedValue((prev) => ({
        ...prev,
        [filterKey]: [...(prev[filterKey] || []), multiselectItem]
      }))
    }
  }

  if (!options?.length) {
    return null
  }

  return (
    <Stack spacing={0}>
      {options.map((option, index)=>{
        return (
          <FilterMultiSelectItem
            key={`filter-${filterKey}-multiselect-option-${option.id}-${index}`}
            option={option}
            handleChange={handleChange}
            isChecked={!!localSelectedValue[filterKey].find((item)=> item.value === option.value)}
          />
        )
      })}
    </Stack>
  )
}
