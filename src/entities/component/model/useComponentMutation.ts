import { useMutation } from '@tanstack/react-query';
import { deleteComponent, patchComponent } from '../api';

export const useComponentMutation = () => {
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
    onUpdateComponent,
    onDeleteComponent,
  };
};
