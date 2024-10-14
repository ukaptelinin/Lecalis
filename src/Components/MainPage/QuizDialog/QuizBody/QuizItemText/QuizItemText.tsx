import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import quizItems from '../../../../QuizStateContextProvider/initialItems';
import TextField from '@mui/material/TextField/TextField';
import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import { Typography } from '@mui/material';
import React from 'react';

const QuizItemText: FC<{ index: number }> = ({ index }) => {
  const { control } = useFormContext();
  const textLabels = Array.from(quizItems[index].labels);
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {textLabels.map((_, textIndex) => (
        <React.Fragment key={textIndex}>
          <Typography>{quizItems[index].labels[textIndex]}</Typography>
          <Controller
            name={`textFields.${quizItems[index].values[textIndex]}`}
            control={control}
            render={({ field }) => {
              console.log(field);
              return <TextField {...field} variant="outlined" size="small" />;
            }}
          />
        </React.Fragment>
      ))}

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2, width: '20%', alignSelf: 'center' }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default QuizItemText;
