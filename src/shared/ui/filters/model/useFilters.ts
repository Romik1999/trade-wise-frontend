import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { FilterItemProps } from '../ui';

export const useFilters = (filtersList: FilterItemProps[]) => {
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
  return {filters, onChangeInput, handleSubmit};
};
