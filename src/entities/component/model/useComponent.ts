import { useMutation, useQuery } from '@tanstack/react-query';
import {
  deleteComponent,
  fetchComponentById,
  fetchComponents,
  patchComponent,
} from '../api';

export const useComponent = () => {
  const { data: componentsList, isPending: isComponentsListLoading } = useQuery(
    {
      queryKey: ['components-list'],
      queryFn: fetchComponents,
      select: (data) => data.data,
    }
  );

  const useGetComponent = (id: string) => {
    return useQuery({
      queryKey: ['todos', id],
      queryFn: () => fetchComponentById(id),
    });
  };

  const patchComponentMutation = useMutation({
    mutationFn: ({ id, data }) => patchComponent(id, data),
    onSuccess: (data) => {
      console.log({ data });
    },
    onError: (error) => {
      console.log({ error });
    },
  });

  const onUpdateComponent = (id: string, data) => {
    patchComponentMutation.mutate({ id, data });
  };

  const deleteComponentMutation = useMutation({
    mutationFn: (id: string) => deleteComponent(id),
    onSuccess: (data) => {
      console.log({ data });
    },
    onError: (error) => {
      console.log({ error });
    },
  });

  const onDeleteComponent = (id: string) => {
    deleteComponentMutation.mutate(id);
  };

  return {
    componentsList,
    isComponentsListLoading,
    useGetComponent,
    onUpdateComponent,
    onDeleteComponent,
  };
};
