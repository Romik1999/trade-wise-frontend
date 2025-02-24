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
      min: 0,
      max: 0,
    },
  },
  {
    title: 'CreatedAt',
    filterKey: 'createdAt',
    type: 'range',
    passedParams: {
      from: "",
      to: "",
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