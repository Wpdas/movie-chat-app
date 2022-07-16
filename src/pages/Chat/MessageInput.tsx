import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

type Props = {
  onSend: (message: string) => void;
};

const MessageInput: React.FC<Props> = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const onChangeHandler = (value: string) => {
    setMessage(value);
  };

  const onClickSendHandler = () => {
    onSend(message);
    setMessage('');
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      onClickSendHandler();
    }
  };

  return (
    <TextField
      placeholder="Message"
      variant="outlined"
      value={message}
      onChange={event => onChangeHandler(event.target.value)}
      onKeyPress={onKeyPress}
      fullWidth
      InputProps={{
        endAdornment: (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onClickSendHandler}
            sx={{
              background: '#1875D2',
              color: '#fff',
            }}>
            <SendIcon />
          </IconButton>
        ),
      }}
    />
  );
};

export default MessageInput;
