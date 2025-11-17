import { Page } from '../../shared/ui/layout'
import { IngredientsTable } from '../../widgets/ingredients-table/ui/IngredientsTable.tsx'

export const Ingredients = () => {
  return (
    <Page title="Компоненты">
      <IngredientsTable/>
    </Page>
  )
}
