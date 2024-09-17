import { type FC } from 'react';
import { Box, Typography } from '@mui/material';

const MainPage: FC = () => (
  <Box
    id="main"
    sx={{
      flexGrow: 1,
      maxWidth: '100%',
      marginTop: 10,
      marginLeft: 2,
      marginRight: 2,
      paddingTop: 2,
      align: 'center',
      height: 500,
    }}
  >
    <Typography variant="h4" align="center" mt="5">
      Главная
    </Typography>
  </Box>
);

export default MainPage;
