import React from 'react';
import ComponentTable from '../../entities/component/ui/ComponentTable';
import SearchInput from '../../shared/ui/search/ui';

const Components = () => {
  return (
    <div>
      <SearchInput/>
      <ComponentTable/>
    </div>
  );
};

export default Components;