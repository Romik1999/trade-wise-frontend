import { useIngredientsTable } from '../model/useIngredientsTable.ts'
import { Table } from '../../../shared/ui/table'
import { ingredientsTableConfig } from '../config/ingredientsTableConfig.tsx'

export const IngredientsTable = () => {
  const { isPending, items, pagination } = useIngredientsTable()

  return (
    <Table
      tableConfig={ingredientsTableConfig}
      items={items}
      isItemsLoading={isPending}
      itemsTotal={pagination?.total}
    />
  )
}
