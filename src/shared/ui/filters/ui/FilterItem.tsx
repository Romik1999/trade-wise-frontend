import React, { FC } from 'react';
import { FilterItemProps } from './Filters';
import { Box } from '@mui/material';
import FilterItemRange from './FilterItemRange';
import FilterItemRangeCalendar from './FilterItemRangeCalendar';

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
        <FilterItemRange
          title={title}
          filterKey={filterKey}
          type={type}
          passedParams={passedParams}
          onChangeInput={onChangeInput}
        />
      );
    case 'rangeCalendar':
      return (
        <FilterItemRangeCalendar
          title={title}
          filterKey={filterKey}
          type={type}
          passedParams={passedParams}
          onChangeInput={onChangeInput}
        />
      );
    default:
      return <Box>{title}</Box>;
  }
};

export default FilterItem;
