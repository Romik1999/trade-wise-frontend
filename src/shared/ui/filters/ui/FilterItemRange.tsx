import React, { FC } from 'react';
import { Box, TextField } from '@mui/material';
import { FilterItemProps } from './Filters';

const FilterItemRange: FC<FilterItemProps> = ({
  title,
  filterKey,
  type,
  passedParams,
  onChangeInput,
}) => {
  return (
    <Box>
      {title}
      <Box display="flex" columnGap="10px" key={filterKey}>
        {Object.entries(passedParams).map(([key, value]) => {
          return (
            <TextField
              label={key}
              fullWidth={true}
              size="small"
              value={value ?? ""}
              onChange={(e) =>
                onChangeInput && onChangeInput(filterKey, key, e.target.value)
              }
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default FilterItemRange;
