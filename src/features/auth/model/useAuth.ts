import { useNavigate } from 'react-router-dom';
import { axiosClassic, saveTokenStorage } from '../../../shared/api/axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { PRIVATE_PAGES } from '../../../app/routes';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export enum EnumTokens {
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken'
}

const authFormScheme = yup.object({
  email: yup.string().required('Поле обязательно').min(3, 'Length min 3'),
  password: yup.string().required('Поле обязательно').min(6, 'Length min 6'),
});

export interface IUser {
  id: number;
  name?: string;
  email: string;
  avatarPath?: string;
  verificationToken?: string;
}

interface IAuthRequest {
  email: string;
  password: string;
}

interface IAuthResponse {
  accessToken: string;
  user: IUser;
}

export const useAuth = () => {
  const navigate = useNavigate();

  const login = async (data: IAuthRequest) => {
    const response = await axiosClassic.post<IAuthResponse>(
      `/auth/login`,
      data
    );

    if (response.data.accessToken)
      saveTokenStorage(response.data.accessToken);

    return response;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authFormScheme),
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { isPending, mutate } = useMutation({
    mutationKey: ['auth user'],
    mutationFn: (data) => {
      return login(data);
    },
    onSuccess: () => {
      navigate(PRIVATE_PAGES.HOME);
    },
    onError: (error) => {
      console.log('error: ', error);
    },
  });

  const onSubmit: SubmitHandler<IAuthRequest> = (data) => {
    mutate(data);
  };

  return {register, errors, isPending, loginFormSubmitFunction: handleSubmit(onSubmit)}
}