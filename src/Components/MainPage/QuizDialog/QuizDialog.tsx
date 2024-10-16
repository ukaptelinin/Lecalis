import Dialog from '@mui/material/Dialog/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { FC, useContext } from 'react';
import QuizBody from './QuizBody/QuizBody';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { IFormInput } from '../../QuizStateContextProvider/initialItems';
import { QuizStateContext } from '../../QuizStateContextProvider/context';

const QuizDialog: FC<{ open: boolean; cancel: () => void }> = ({
  open,
  cancel,
}) => {
  const { handleReset } = useContext(QuizStateContext);
  const methods = useForm<IFormInput>({
    defaultValues: {
      checkBoxes1: {
        apartment: false,
        land: false,
        car: false,
        otherProperty: false,
        none: false,
      },
      checkBoxes2: {
        mfo: false,
        carLoan: false,
        kingLoan: false,
        bailiff: false,
        privateLoans: false,
        other: false,
      },
      radioButtons1: {
        options: '',
      },
      radioButtons2: {
        options: '',
      },
      radioButtons3: {
        options: '',
      },
      radioButtons4: {
        options: '',
      },
      radioButtons5: {
        options: '',
      },
      radioButtons6: {
        options: '',
      },
      textFields: {
        name: '',
        phone: '',
        email: '',
      },
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log('Form Data:', data);
    cancel();
    handleReset();
  };

  return (
    <Dialog open={open} onClose={cancel}>
      <DialogContent>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Box
              sx={{
                overflowX: 'hidden',
                width: 550,
                height: 350,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <QuizBody />
            </Box>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default QuizDialog;
