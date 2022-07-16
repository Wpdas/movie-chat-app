import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import getUserId from '@app/utils/genUserId';

type Props = {
  text?: string;
  userId?: string;
};

const myUserId = getUserId();

const Message: React.FC<Props> = ({ text, userId }) => {
  if (!userId) {
    return null;
  }

  const itsMe = myUserId === userId;

  return (
    <Box
      sx={{
        mt: '12px',
        alignSelf: itsMe ? 'flex-end' : 'flex-start',
      }}>
      <Stack
        direction={itsMe ? 'row-reverse' : 'row'}
        spacing={2}
        alignItems="center">
        <Avatar
          alt="Remy Sharp"
          src={`https://i.pravatar.cc/120?u=${userId}`}
          sx={{ width: 44, height: 44 }}
        />

        <Typography
          variant="body1"
          bgcolor={itsMe ? '#5618d2' : '#1875D2'}
          color="#fff"
          padding="12px"
          gutterBottom>
          {text}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Message;
