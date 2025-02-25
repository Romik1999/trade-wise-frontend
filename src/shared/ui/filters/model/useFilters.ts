import {  useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const updatedFilters = filtersList.map((filter) => {
      const newPassedParams = { ...filter.passedParams };

      Object.keys(filter.passedParams).forEach((key) => {
        const paramValue = searchParams.get(`${filter.filterKey}[${key}]`);
        if (paramValue !== null) {
          newPassedParams[key] = isNaN(Number(paramValue)) ? paramValue : Number(paramValue);
        }
      });

      return { ...filter, passedParams: newPassedParams };
    });

    setFilters(updatedFilters);
  }, []);

  return {filters, onChangeInput, handleSubmit};
};
