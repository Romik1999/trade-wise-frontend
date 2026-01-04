import { Box } from '@mui/material'
import type { IIngredientDTO } from '../../../entities/ingredient/model/type.ts'

export const ingredientsTableConfig = [
  {
    header: 'Название',
    accessorKey: 'name',
    size: 100,
    getContent: (ingredient: IIngredientDTO) => (<Box>{ingredient.name}</Box>)
  }
]
