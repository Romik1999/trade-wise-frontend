import { useIngredientsTable } from '../model/useIngredientsTable.ts'
import { Box, Paper } from '@mui/material'
import { ingredientsTableConfig } from '../config/ingredientsTableConfig.tsx'
import { Table } from '../../../shared/ui/table'

export const IngredientsTable = () => {
  const { items, isLoading, pagination } = useIngredientsTable()

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: '0 2px 6px 0 rgba(67, 89, 113, 0.12)', borderRadius: '0.375rem' }}>
      <Box>
        Filters
      </Box>

      <Box>
        search
        select per page
        export
        add button
      </Box>

      <Table
        items={items}
        columnsConfig={ingredientsTableConfig}
        pagination={pagination}
        isLoading={isLoading}
      />
    </Paper>
  )
}
