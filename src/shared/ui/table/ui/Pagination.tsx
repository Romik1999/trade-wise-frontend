import { Pagination as MUIPagination } from '@mui/material'
import PaginationItem from '@mui/material/PaginationItem'
import { Link } from 'react-router'

export const Pagination = () => {
  return (
    <MUIPagination
      size="large"
      count={5}
      defaultPage={1}
      boundaryCount={2}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`?page=${item.page}`}
          {...item}
        />
      )}
    />
  )
}
