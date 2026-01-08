import { Box, ListItemIcon, ListItemText, MenuItem, Stack } from '@mui/material'
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
    header: 'Название',
    size: 300,
    cell: (ctx) => {
      return <Box>{ctx.getValue()}</Box>
    }
  }),
  columnHelper.accessor('description', {
    header: 'Описание',
    size: 300,
    cell: (ctx) => <Box>{ctx.getValue()}</Box>,
    enableSorting: false
  }),
  columnHelper.accessor('quantity', {
    header: 'Кол-во',
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
