import type { FC } from 'react'
import { Pagination as MUIPagination } from '@mui/material'
import PaginationItem from '@mui/material/PaginationItem'
import { Link } from 'react-router'
import { usePagination } from '../model/usePagination.ts'

interface IPaginationProps {
    pagesCount?: number
}

export const Pagination:FC<IPaginationProps> = ({ pagesCount }) => {
  const { createPageUrl, page } = usePagination()
  const totalPages = pagesCount && pagesCount > 0 ? pagesCount : 1

  return (
    <MUIPagination
      variant="outlined"
      shape="rounded"
      size="large"
      count={totalPages}
      page={page}
      defaultPage={1}
      boundaryCount={2}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={createPageUrl(item.page)}
          {...item}
        />
      )}
    />
  )
}
