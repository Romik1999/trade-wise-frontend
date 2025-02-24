import React, { FC, useEffect, useState } from 'react';
import { FilterItemProps } from './Filters';
import { Box, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { format, formatISO } from 'date-fns';

const FilterItem: FC<FilterItemProps> = ({
  title,
  filterKey,
  type,
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
    case 'rangeCalendar':
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
                  onChangeInput(
                    filterKey,
                    'from',
                    formatISO(newValue)
                  )
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
                  onChangeInput(
                    filterKey,
                    'to',
                    formatISO(newValue)
                  )
                }
              />
            </LocalizationProvider>
          </Box>
        </Box>
      );
    default:
      return <Box>{title}</Box>;
  }
};

export default FilterItem;
