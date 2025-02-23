import React from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { useSearch } from '../model/useSearch';

const SearchInput = () => {
  const { inputValue, handleInputChange, handleKeyDown, clearSearch } =
    useSearch();

  return (
    <TextField
      label="Поиск"
      fullWidth
      size="small"
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end">
                <SearchOutlinedIcon />
              </IconButton>
              {!!inputValue && (
                <IconButton onClick={clearSearch} edge="end">
                  <HighlightOffOutlinedIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default SearchInput;
