import React, { FC } from 'react';
import { Box, Button } from '@mui/material';
import FilterItem from './FilterItem';
import { useFilters } from '../model/useFilters';

export type FilterItemProps = {
  title: string;
  filterKey: string;
  type: 'range' | 'rangeCalendar' | string;
  passedParams: {
    [key: string]: number | string | Date | null;
  };
  onChangeInput?: (key: string, fieldStart: string, fieldEnd: string) => void;
};

export type FiltersProps = {
  filtersList: FilterItemProps[];
};

const Filters: FC<FiltersProps> = ({ filtersList }) => {
  const {filters, onChangeInput, handleSubmit, handleClearFilters} = useFilters(filtersList)

  return (
    <Box>
      {filters.map((item) => (
        <FilterItem
          title={item.title}
          filterKey={item.filterKey}
          type={item.type}
          passedParams={item.passedParams}
          onChangeInput={onChangeInput}
        />
      ))}
      <Button onClick={handleSubmit}>Ok</Button>
      <Button onClick={handleClearFilters}>Cancel</Button>
    </Box>
  );
};
export default Filters;
