import React, { FC, useEffect, useState } from 'react';
import { FilterItemProps } from './Filters';
import { Box } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { formatISO } from 'date-fns';

const FilterItemRangeCalendar: FC<FilterItemProps> = ({
  title,
  filterKey,
  passedParams,
  onChangeInput,
}) => {
  const [cleared, setCleared] = useState<boolean>(false);

  useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  return (
    <Box>
      {title}
      <Box display="flex" columnGap="10px" key={filterKey}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="From"
            openTo="day"
            disableFuture={true}
            minDate={new Date('1900-01-01')}
            slotProps={{
              textField: {
                size: 'small',
              },
              field: { clearable: true, onClear: () => setCleared(true) },
            }}
            format="dd-MM-yyyy"
            value={passedParams.from ? new Date(passedParams.from) : null}
            onChange={(newValue) =>
              onChangeInput &&
              newValue &&
              onChangeInput(filterKey, 'from', formatISO(newValue))
            }
          />
          <DatePicker
            label="To"
            openTo="day"
            disableFuture={true}
            slotProps={{
              textField: {
                size: 'small',
              },
              field: { clearable: true, onClear: () => setCleared(true) },
            }}
            format="dd-MM-yyyy"
            value={passedParams.to ? new Date(passedParams.to) : null}
            onChange={(newValue) =>
              onChangeInput &&
              newValue &&
              onChangeInput(filterKey, 'to', formatISO(newValue))
            }
          />
        </LocalizationProvider>
      </Box>
    </Box>
  );
};

export default FilterItemRangeCalendar;
