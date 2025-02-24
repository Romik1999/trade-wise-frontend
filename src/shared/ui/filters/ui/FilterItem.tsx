import React, { FC } from 'react';
import { FilterItemProps } from './Filters';
import { Box, TextField } from '@mui/material';

const FilterItem: FC<FilterItemProps> = ({
  title,
  filterKey,
  type,
  passedParams,
  onChangeInput,
}) => {
  switch (type) {
    case 'range':
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
                  onChange={(e) =>
                    onChangeInput &&
                    onChangeInput(filterKey, key, e.target.value)
                  }
                />
              );
            })}
          </Box>
        </Box>
      );
    default:
      return <Box>{title}</Box>;
  }
};

export default FilterItem;
