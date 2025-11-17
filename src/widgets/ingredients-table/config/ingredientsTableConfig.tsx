import { Box } from '@mui/material'
import type { IIngredientDTO } from '../../../entities/ingredient/model/type.ts'

export const ingredientsTableConfig = {
  cells: [
    {
      title: 'Название',
      columnKey: 'title',
      getContent: (ingredient: IIngredientDTO) => (<Box>{ingredient.name}</Box>)
    },
    {
      title: '',
      columnKey: 'actions',
      width: '50px',
      getContent: () => (
        <Box>42342</Box>
        // <ComponentPopover component={component} />
      )
    }
  ]
}
