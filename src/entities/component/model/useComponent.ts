import { useQuery } from '@tanstack/react-query';
import { fetchComponents } from '../api';

export const useComponent = () => {
  const { data: componentsList, isPending: isComponentsListLoading } = useQuery(
    {
      queryKey: ['components-list'],
      queryFn: fetchComponents,
      select: (data) => data.data,
    }
  );

  return { componentsList, isComponentsListLoading };
};
