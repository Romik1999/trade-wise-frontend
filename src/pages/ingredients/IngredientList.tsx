import { Page } from '../../shared/ui/layout'
import { IngredientsTable } from '../../widgets/ingredients-table/ui/IngredientsTable.tsx'

export const IngredientList = () => {
  return (
    <Page title="Компоненты">
      <IngredientsTable/>
    </Page>
  )
}
