import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import FormField from '../../../shared/ui/formField';
import { useAuth } from '../model/useAuth';

const LoginForm = () => {
  const {register, errors, isPending, loginFormSubmitFunction} = useAuth();

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
          onSubmit={loginFormSubmitFunction}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          <FormField
            fieldName="email"
            type="email"
            register={register}
            errors={errors}
          />
          <FormField
            fieldName="password"
            type="password"
            register={register}
            errors={errors}
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
