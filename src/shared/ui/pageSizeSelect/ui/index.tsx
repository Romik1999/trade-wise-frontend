import { type FC } from 'react'
import { NativeSelect } from '@mui/material'
import { usePageSizeSelect } from '../model/usePageSizeSelect.ts'

export interface IPageSizeSelectProps {
    pageSizesConfig?: number[]
}

const pageSizes = [15, 25, 50, 100]

export const PageSizeSelect: FC<IPageSizeSelectProps> = ({ pageSizesConfig = pageSizes }) => {
  const { pageSize, handlePageSizeChange } = usePageSizeSelect()

  return (
    <NativeSelect
      defaultValue={pageSize ?? 15}
      onChange={handlePageSizeChange}
    >
      {pageSizesConfig.map((pageSize, index) => (
        <option key={`page-size-item-${index}`} value={pageSize}>{pageSize}</option>
      ))}
    </NativeSelect>
  )
}
