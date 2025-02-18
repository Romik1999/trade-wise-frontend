import React from 'react';
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMutation } from '@tanstack/react-query';
import { axiosClassic, saveTokenStorage } from '../../../shared/api/axios';
import { useNavigate } from 'react-router-dom';
import { PRIVATE_PAGES } from '../../../app/routes';

interface IFormInput {
  firstName: string;
  lastName: string;
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

interface IAuthResponse {
  accessToken: string;
  user: IUser;
}

const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const login = async (data) => {
    const response = await axiosClassic.post<IAuthResponse>(
      `/auth/login`,
      data
    );

    if (response.data.tokens.accessToken)
      saveTokenStorage(response.data.tokens.accessToken);

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
      console.log('Success');
      // reset();
      navigate(PRIVATE_PAGES.HOME);
    },
    onError: (error) => {
      console.log('Error');
      console.log('error: ', error);
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    mutate(data);
  };

  return (
    <Box
      padding="10px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      height="100%"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap="10px"
        margin="auto"
        maxWidth="500px"
      >
        <Typography variant="h3" color="textPrimary" textAlign="center">
          Enter in Trade Wise
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          <TextField
            label="Email"
            {...register('email', { required: 'Введите email' })}
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth={true}
            size="small"
          />
          <TextField
            size="small"
            fullWidth={true}
            label="Password"
            type={showPassword ? 'text' : 'password'}
            {...register('password', { required: 'Введите пароль' })}
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            size="medium"
            type="submit"
            loading={isPending}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;
