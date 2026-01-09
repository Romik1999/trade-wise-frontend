import { type FC } from 'react'
import { InputAdornment, TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import ClearIcon from '@mui/icons-material/Clear'
import { useSearch } from '../model/useSearch.ts'

export interface ISearchProps {
    placeholder?: string
    helperTextIsTyping?: string
    helperTextIsNotTyping?: string
}

export const Search: FC<ISearchProps> = ({
  placeholder = 'Поиск...',
  helperTextIsTyping = 'Вводите текст для поиска...',
  helperTextIsNotTyping = 'Введите название компонента'
}) => {
  const { searchValue, isTyping, handleChange, handleClear, handleKeyDown } = useSearch()

  return (
    <TextField
      label="Название"
      helperText={isTyping ? helperTextIsTyping : helperTextIsNotTyping}
      value={searchValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      fullWidth
      placeholder={placeholder}
      InputProps={{
        endAdornment: searchValue && (
          <InputAdornment position="end">
            <IconButton
              onClick={handleClear}
              edge="end"
              size="small"
              aria-label="очистить поиск"
            >
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  )
}
