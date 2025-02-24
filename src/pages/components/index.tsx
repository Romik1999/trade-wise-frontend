import React from 'react';
import ComponentTable from '../../entities/component/ui/ComponentTable';
import SearchInput from '../../shared/ui/search/ui';
import Filters from '../../shared/ui/filters/ui/Filters';

const filtersList = [
  {
    title: 'Price',
    filterKey: 'price',
    type: 'range',
    passedParams: {
      min: null,
      max: null,
    },
  },
  {
    title: 'CreatedAt',
    filterKey: 'createdAt',
    type: 'rangeCalendar',
    passedParams: {
      from: null,
      to: null,
    },
  },
];

const Components = () => {
  return (
    <div>
      <SearchInput/>
      <Filters filtersList={filtersList} />
      <ComponentTable/>
    </div>
  );
};

export default Components;