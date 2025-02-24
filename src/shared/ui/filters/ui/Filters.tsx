import React, { FC, useState } from 'react';
import { Box, Button } from '@mui/material';
import FilterItem from './FilterItem';
import { useSearchParams } from 'react-router-dom';

export type FilterItemProps = {
  title: string;
  filterKey: string;
  type: 'range' | "rangeCalendar" | string;
  passedParams: {
    [key: string]: number | string | Date | null;
  };
  onChangeInput?: (key: string, fieldStart: string, fieldEnd: string) => void;
};

export type FiltersProps = {
  filtersList: FilterItemProps[];
};

const Filters: FC<FiltersProps> = ({ filtersList }) => {
  const [filters, setFilters] = useState(filtersList);
  const [searchParams, setSearchParams] = useSearchParams();

  const onChangeInput = (filterKey: string, field: string, value: string | number) => {
    setFilters((prevState) =>
      prevState.map((filter) =>
        filter.filterKey === filterKey
          ? {
            ...filter,
            passedParams: {
              ...filter.passedParams,
              [field]: typeof value === "string" && !isNaN(Number(value)) ? Number(value) : value,
            },
          }
          : filter
      )
    );
  };

  const handleSubmit = () => {
    const queryParams = new URLSearchParams();

    filters.forEach((filter) => {
      Object.entries(filter.passedParams).forEach(([key, value]) => {
        if (value !== "" && value !== null && value !== undefined) {
          queryParams.append(`${filter.filterKey}[${key}]`, String(value));
        }
      });
    });

    setSearchParams(queryParams);
  };
  console.log({ filters });
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
      <Button>Cancel</Button>
    </Box>
  );
};
export default Filters;
