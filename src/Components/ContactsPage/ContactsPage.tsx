import type { FC } from 'react';
import { Box, Typography } from '@mui/material';

const ContactsPage: FC = () => (
  <Box
    id="contacts"
    sx={{
      flexGrow: 1,
      maxWidth: '100%',
      margin: 2,
      paddingTop: 2,
      align: 'center',
      height: 500,
    }}
  >
    <Typography variant="h4" align="center">
      Контакты
    </Typography>
  </Box>
);

export default ContactsPage;
