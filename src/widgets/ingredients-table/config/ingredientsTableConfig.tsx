import { Avatar, Box, ListItemIcon, ListItemText, MenuItem, Stack, Typography } from '@mui/material'
import type { IIngredientDTO } from '../../../entities/ingredient/model/type.ts'
import { formatDateTime } from '../../../shared/utils/dateFormatter.ts'
import { createColumnHelper } from '@tanstack/react-table'
import { Popover } from '../../../shared/ui/popover'
import EditIcon from '@mui/icons-material/Edit'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import ShareIcon from '@mui/icons-material/Share'
import DeleteIcon from '@mui/icons-material/Delete'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import { Fragment } from 'react'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto'

export const actionMenuConfig = [
  {
    id: 'open',
    label: 'Открыть',
    icon: <RemoveRedEyeIcon fontSize="small" />
  },
  {
    id: 'edit',
    label: 'Редактировать',
    icon: <EditIcon fontSize="small" />
  },
  {
    id: 'copy',
    label: 'Копировать',
    icon: <ContentCopyIcon fontSize="small" />,
    disabled: true
  },
  {
    id: 'share',
    label: 'Поделиться',
    icon: <ShareIcon fontSize="small" />,
    disabled: true
  },
  {
    id: 'delete',
    label: 'Удалить',
    icon: <DeleteIcon fontSize="small" />
  }
]

const columnHelper = createColumnHelper<IIngredientDTO>()

export const ingredientsTableConfig = [
  columnHelper.accessor('name', {
    header: 'Компонент',
    size: 400,
    minSize: 300,
    cell: ({ row: { original } }) => {
      return (
        <Stack direction="row" spacing="8px">
          <Avatar variant="rounded" >
            {original?.images?.[0]?.url ? (
              <img alt="ingridient-image" src={original?.images?.[0]?.url ?? ''}/>
            ) : (
              <InsertPhotoIcon/>
            )}
          </Avatar>

          <Stack>
            <Typography variant="body1" color="#384551">{original.name}</Typography>
            <Typography variant="body2">{original.description}</Typography>
          </Stack>
        </Stack>
      )
    }
  }),
  columnHelper.accessor('sku', {
    header: 'Артикул',
    size: 170,
    minSize: 170,
    cell: (ctx) => <Box>{ctx.getValue()}</Box>,
    enableSorting: false
  }),
  columnHelper.accessor('quantity', {
    header: 'Кол-во',
    size: 100,
    minSize: 100,
    cell: (ctx) => <Box>{ctx.getValue()}</Box>
  }),
  columnHelper.accessor('price', {
    header: 'Цена',
    size: 100,
    minSize: 100,
    cell: (ctx) => <Box>{ctx.getValue()}</Box>
  }),
  columnHelper.accessor('created_at', {
    header: 'Создан',
    size: 100,
    minSize: 100,
    cell: (ctx) => <Box>{formatDateTime(ctx.getValue())}</Box>
  }),
  columnHelper.display({
    id: 'actions',
    header: '',
    size: 50,
    minSize: 50,
    cell: ({ row: { original } }) => (
      <Stack direction="row" spacing={1}>
        <Popover maxPopoverWidth="200px">
          {actionMenuConfig.map((item, index) => (
            <Fragment key={`ingredient-${item.id}-${index}`}>
              <MenuItem
                disabled={item.disabled}
              >
                <ListItemIcon sx={{ color: 'inherit' }}>
                  {item.icon}
                </ListItemIcon>

                <ListItemText primary={item.label} />
              </MenuItem>
            </Fragment>
          ))}
        </Popover>
      </Stack>
    )
  })
]
