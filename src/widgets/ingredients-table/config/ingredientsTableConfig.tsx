import { Avatar, ListItemIcon, ListItemText, MenuItem, Stack, Typography } from '@mui/material'
import type { IIngredientDTO } from '../../../entities/ingredient/model/type.ts'
import { formatDateTime } from '../../../shared/utils/dateFormatter.ts'
import { createColumnHelper } from '@tanstack/react-table'
import { Popover } from '../../../shared/ui/popover'
import { Fragment } from 'react'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto'
import { ingredientsActionsConfig } from './ingredientsActionsConfig.tsx'
import { NavLink } from 'react-router-dom'

const columnHelper = createColumnHelper<IIngredientDTO>()

export const ingredientsTableConfig = [
  columnHelper.accessor('name', {
    header: 'Компонент',
    size: 400,
    minSize: 400,
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
            <Typography
              component={NavLink}
              to={`${original.id}`}
              variant="body1"
              color="#384551"
              sx={{
                textDecoration: 'none',
                ':hover': {
                  color: '#696cff'
                }
              }}
            >
              {original.name}
            </Typography>

            <Typography variant="body2">{original.description}</Typography>
          </Stack>
        </Stack>
      )
    }
  }),
  columnHelper.accessor('sku', {
    header: 'Артикул',
    size: 200,
    minSize: 200,
    cell: (ctx) => <Typography>{ctx.getValue()}</Typography>,
    enableSorting: false
  }),
  columnHelper.accessor('quantity', {
    header: 'Кол-во',
    size: 120,
    minSize: 120,
    enableResizing: false,
    cell: (ctx) => <Typography>{ctx.getValue()}</Typography>
  }),
  columnHelper.accessor('price', {
    header: 'Цена',
    size: 100,
    minSize: 100,
    enableResizing: false,
    cell: (ctx) => <Typography>{ctx.getValue()}</Typography>
  }),
  columnHelper.accessor('created_at', {
    header: 'Создан',
    size: 150,
    minSize: 150,
    enableResizing: false,
    cell: (ctx) => <Typography>{formatDateTime(ctx.getValue())}</Typography>
  }),
  columnHelper.display({
    id: 'actions',
    header: '',
    size: 50,
    minSize: 50,
    enableResizing: false,
    cell: () => (
      <Stack direction="row" spacing={1}>
        <Popover maxPopoverWidth="200px">
          {ingredientsActionsConfig.map((item, index) => (
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
    ),
    meta: {
      cellStyles: {
        padding: '.782rem 8px'
      }
    }
  })
]
