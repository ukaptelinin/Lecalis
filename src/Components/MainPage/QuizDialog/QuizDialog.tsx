import Dialog from '@mui/material/Dialog/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText/DialogContentText';
import DialogActions from '@mui/material/DialogActions/DialogActions';
import Button from '@mui/material/Button/Button';
import { FC } from 'react';

const QuizDialog: FC<{ open: boolean; cancel: () => void; title: string }> = ({
  open,
  // confirm,
  cancel,
  title,
}) => (
  <Dialog open={open} onClose={cancel}>
    <DialogContent>
      <DialogContentText variant="h6" color="blue">
        {title}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={cancel}>Нет</Button>
    </DialogActions>
  </Dialog>
);

export default QuizDialog;
