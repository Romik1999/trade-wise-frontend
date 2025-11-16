export const Drawer = {
  styleOverrides: {
    root: ()=>{
      return {
        '& .MuiDrawer-paper': {
          overflowY: 'visible'
        },
        '& .MuiBackdrop-root': {
          backgroundColor: 'rgba(67, 89, 113, 0.5)'
        }
      }
    }
  }
}
