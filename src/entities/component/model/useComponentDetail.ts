import { useQuery } from '@tanstack/react-query';
import { fetchComponentById } from '../api';
import { useParams } from 'react-router-dom';

export const useComponentDetail = () => {
  const { componentId } = useParams();

  const { data: componentDetail, isPending: isComponentDetailLoading } =
    useQuery({
      queryKey: ['todos', componentId],
      queryFn: () => fetchComponentById(componentId ?? ''),
      select: (data) => data.data,
      enabled: !!componentId,
    });

  return {
    componentDetail,
    isComponentDetailLoading,
  };
};
