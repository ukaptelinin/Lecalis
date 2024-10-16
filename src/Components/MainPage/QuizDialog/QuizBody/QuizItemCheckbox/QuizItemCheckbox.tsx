import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import FormGroup from '@mui/material/FormGroup/FormGroup';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import quizItems from '../../../../QuizStateContextProvider/initialItems';
import Checkbox from '@mui/material/Checkbox/Checkbox';
import Box from '@mui/material/Box/Box';

const QuizItemCheckbox: FC<{ index: number }> = ({ index }) => {
  const { control } = useFormContext();
  const checkBoxLabels = Array.from(quizItems[index].labels);
  return (
    <Box width="100%">
      <FormGroup>
        {checkBoxLabels.map((_, checkBoxIndex) => (
          <FormControlLabel
            key={checkBoxIndex}
            control={
              <Controller
                name={`checkBoxes${quizItems[index].partitionKey}.${quizItems[index].values[checkBoxIndex]}`}
                control={control}
                render={({ field }) => (
                  <Checkbox {...field} checked={!!field.value} />
                )}
              />
            }
            label={quizItems[index].labels[checkBoxIndex]}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default QuizItemCheckbox;
