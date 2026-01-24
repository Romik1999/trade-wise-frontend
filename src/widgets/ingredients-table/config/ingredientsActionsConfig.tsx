import EditIcon from '@mui/icons-material/Edit'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import ShareIcon from '@mui/icons-material/Share'
import DeleteIcon from '@mui/icons-material/Delete'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'

export const ingredientsActionsConfig = [
  {
    id: 'open',
    label: 'Открыть',
    icon: <RemoveRedEyeIcon fontSize="small" />
  },
  {
    id: 'edit',
    label: 'Редактировать',
    icon: <EditIcon fontSize="small" />
  },
  {
    id: 'copy',
    label: 'Копировать',
    icon: <ContentCopyIcon fontSize="small" />,
    disabled: true
  },
  {
    id: 'share',
    label: 'Поделиться',
    icon: <ShareIcon fontSize="small" />,
    disabled: true
  },
  {
    id: 'delete',
    label: 'Удалить',
    icon: <DeleteIcon fontSize="small" />
  }
]
