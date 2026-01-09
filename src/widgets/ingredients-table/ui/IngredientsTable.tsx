import { useIngredientsTable } from '../model/useIngredientsTable.ts'
import { Box, Button, Paper, Stack } from '@mui/material'
import { ingredientsTableConfig } from '../config/ingredientsTableConfig.tsx'
import { Table } from '../../../shared/ui/table'
import type { IIngredientDTO } from '../../../entities/ingredient/model/type.ts'
import type { ColumnDef } from '@tanstack/react-table'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import { Search } from '../../../shared/ui/search'

export const filterConfig = [
  {
    id: 'createdAtRange',
    type: 'date-range',
    title: 'Дата создания диапазон',
    filterKeys: {
      firstKey: 'created_at_from',
      lastKey: 'created_at_to'
    }
  },
  {
    id: 'createdAtSingle',
    type: 'date-single',
    title: 'Дата создания один',
    filterKeys: {
      firstKey: 'created_at_from'
    }
  },
  {
    id: 'price',
    type: 'range',
    title: 'Цена',
    filterKeys: {
      firstKey: 'price_min',
      lastKey: 'price_max'
    }
  },
  {
    id: 'status',
    type: 'select-single',
    title: 'Статус',
    filterKey: 'status-select-single',
    filterValues: [
      { id: 'status-select-1', title: 'status-select-1' },
      { id: 'status-select-2', title: 'status-select-2' }
    ]
  },
  {
    id: 'status',
    type: 'select-multiple',
    title: 'Статус',
    filterKey: 'status-select-multiple',
    filterValues: [
      { id: 'status-select-1', title: 'status-select-1' },
      { id: 'status-select-2', title: 'status-select-2' },
      { id: 'status-select-3', title: 'status-select-3' },
      { id: 'status-select-4', title: 'status-select-4' }
    ]
  }
]

export const Filters = ()=>{
  return (
    <Box>
        Filters
    </Box>
  )
}

export const IngredientsTable = () => {
  const { items, isLoading, pagination } = useIngredientsTable()

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: '0 2px 6px 0 rgba(67, 89, 113, 0.12)', borderRadius: '0.375rem' }}>

      <Stack spacing={2}>
        <Filters/>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignItems="flex-start"
          padding="0 16px"
        >
          <Box maxWidth="400px" width="100%">
            <Search/>
          </Box>

          <Stack direction="row" alignItems="center" spacing="8px">

            <IconButton color="primary">
              <FileDownloadIcon/>
            </IconButton>

            <Button color="primary" variant="contained">
              <AddIcon fontSize="small" />
              Добавить компонент
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Table<IIngredientDTO>
        items={items}
        columnsConfig={ingredientsTableConfig as ColumnDef<IIngredientDTO>[]}
        pagination={pagination}
        isLoading={isLoading}
      />
    </Paper>
  )
}
