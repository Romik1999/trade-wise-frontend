export const Pagination = {
  styleOverrides: {
    root: ()=>{
      return {
        '& .MuiPaginationItem-root': {
          borderRadius: '0.25rem',
          backgroundColor: '#f0f2f4',

          '&:hover': {
            backgroundColor: '#e1e4e8'
          }
        },
        '& .Mui-selected': {
          backgroundColor: '#696cff',
          boxShadow: '0 0.125rem 0.25rem rgba(105, 108, 255, 0.4)',
          color: '#fff',

          '&:hover': {
            backgroundColor: '#696cff!important'
          }
        }
      }
    }
  }
}
