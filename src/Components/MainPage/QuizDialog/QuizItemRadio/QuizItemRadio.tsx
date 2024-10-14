import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import Radio from '@mui/material/Radio/Radio';
import RadioGroup from '@mui/material/RadioGroup/RadioGroup';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import quizItems from '../../../QuizStateContextProvider/initialItems';
import Box from '@mui/material/Box/Box';

const QuizItemRadio: FC<{ index: number }> = ({ index }) => {
  const { control } = useFormContext();
  const radioLabels = Array.from(quizItems[index].labels);
  return (
    <Box>
      <Controller
        name={`radioButtons${quizItems[index].partitionKey}.options`}
        control={control}
        render={({ field }) => (
          <RadioGroup {...field}>
            {radioLabels.map((_, radioIndex) => (
              <FormControlLabel
                key={radioIndex}
                value={quizItems[index].values[radioIndex]}
                control={<Radio />}
                label={quizItems[index].labels[radioIndex]}
              />
            ))}
          </RadioGroup>
        )}
      />
    </Box>
  );
};

export default QuizItemRadio;
