import type { FC } from 'react'
import { useState } from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

export interface IFormFieldProps {
  fieldName?: string;
  label?: string;
  type?: 'password' | 'email' | 'text';
  errors?: any;
  helperText?: string;
  slotProps?: any;
  register?: any;
  requiredText?: string;
}

const FormField: FC<IFormFieldProps> = ({
  label,
  fieldName,
  type = 'text',
  errors,
  helperText,
  slotProps,
  register,
  requiredText
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  return (
    <TextField
      label={label}
      error={!!errors?.[fieldName]}
      helperText={errors?.[fieldName]?.message ?? helperText}
      fullWidth={true}
      size="small"
      type={type === 'password' && !showPassword ? 'password' : 'text'}
      {...(register ? { ...register(fieldName, { required: `Введите ${fieldName}` }) } : {})}
      slotProps={{
        ...slotProps,
        ...(type === 'password' && {
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }
        })
      }}
    />
  )
}

export default FormField
