import { FilterType } from '../../../shared/ui/filters'

export const ingredientsFiltersConfig = [
  {
    id: 'createdAtRange',
    type: FilterType.DATE_RANGE,
    title: 'Дата создания',
    label: 'Диапазон дат',
    placeholder: 'Выберите период',
    filterKeys: {
      from: 'created_at_from',
      to: 'created_at_to'
    }
  },
  {
    id: 'priceRange',
    type: FilterType.NUMBER_RANGE,
    title: 'Цена',
    label: 'Диапазон цен',
    filterKeys: {
      min: 'price_min',
      max: 'price_max'
    },
    placeholder: 'Укажите диапазон'
  },
  {
    id: 'widthRange',
    type: FilterType.NUMBER_RANGE,
    title: 'Ширина',
    label: 'Ширина',
    filterKeys: {
      min: 'width_min',
      max: 'width_max'
    },
    placeholder: 'Укажите диапазон'
  },
  {
    id: 'heightRange',
    type: FilterType.NUMBER_RANGE,
    title: 'Высота',
    label: 'Высота',
    filterKeys: {
      min: 'height_min',
      max: 'height_max'
    },
    placeholder: 'Укажите диапазон'
  },
  {
    id: 'lengthRange',
    type: FilterType.NUMBER_RANGE,
    title: 'Длинна',
    label: 'Длинна',
    filterKeys: {
      min: 'length_min',
      max: 'length_max'
    },
    placeholder: 'Укажите диапазон'
  },
  {
    id: 'weightRange',
    type: FilterType.NUMBER_RANGE,
    title: 'Вес',
    label: 'Вес',
    filterKeys: {
      min: 'weight_min',
      max: 'weight_max'
    },
    placeholder: 'Укажите диапазон'
  }
  //TODO: доделать работу всех фильтров которые ниже, добавить для них компоненты и логику согласовав с беком формат
  // {
  //   id: 'categories',
  //   type: FilterType.SELECT,
  //   title: 'Категории',
  //   label: 'Выберите категории',
  //   filterKey: 'categories',
  //   options: [
  //     { id: 'cat-1', title: 'Электроника', value: 'electronics' },
  //     { id: 'cat-2', title: 'Мебель', value: 'furniture' },
  //     { id: 'cat-3', title: 'Одежда', value: 'clothing' },
  //     { id: 'cat-4', title: 'Продукты', value: 'food' }
  //   ],
  //   multiple: true,
  //   defaultValue: 'active'
  // },
  // {
  //   id: 'hasImages',
  //   type: FilterType.BOOLEAN,
  //   title: 'Наличие фото',
  //   label: 'С фотографиями',
  //   filterKey: 'has_images',
  //   defaultValue: true
  // },
  // {
  //   id: 'supplier',
  //   type: FilterType.AUTOCOMPLETE,
  //   title: 'Поставщик',
  //   label: 'Выберите поставщика',
  //   filterKey: 'supplier_id',
  //   placeholder: 'Начните вводить название...',
  //   loadOptions: async(query: string) => {
  //     // Асинхронная загрузка опций
  //     const response = await fetch(`/api/suppliers?search=${query}`)
  //     const data = await response.json()
  //     return data.map((item: any) => ({
  //       id: item.id,
  //       title: item.name,
  //       value: item.id
  //     }))
  //   }
  // }
]
