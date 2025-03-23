import { useQuery } from '@tanstack/react-query';
import { fetchComponents } from '../api';
import { useSearchParams } from 'react-router-dom';

export const useComponentsList = () => {
  const [searchParams] = useSearchParams();

  const { data: componentsList, refetch: componentsListRefetch, isPending: isComponentsListLoading } = useQuery(
    {
      queryKey: ['components-list', searchParams.toString()],
      queryFn: () => fetchComponents(searchParams),
      select: (data) => data.data,
    }
  );

  return {
    componentsList: componentsList?.items,
    componentsListTotal: componentsList?.total,
    isComponentsListLoading,
    componentsListRefetch
  };
};
