import { type FC } from 'react'
import { Stack, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

export interface IFilterPopoverHeaderProps {
    title: string
    handleClose: () => void
}

export const FilterPopoverHeader: FC<IFilterPopoverHeaderProps> = ({ title, handleClose }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap="10px"
      justifyContent="space-between"
    >
      <Typography fontWeight="bold">{title}</Typography>

      <IconButton onClick={handleClose} size="small">
        <CloseIcon/>
      </IconButton>
    </Stack>
  )
}
