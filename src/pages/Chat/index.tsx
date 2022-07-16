import React, { useEffect } from 'react';
import useMessages from '@app/hooks/useMessages';
import getUserId from '@app/utils/genUserId';
import randomKey from '@app/utils/randomKey';
import { BoxContainer } from '../Home/styles';
import Header from './components/Header';
import Message from './components/Message';
import MessageInput from './components/MessageInput';
import { MessageBox } from './styles';

const userId = getUserId();

const scrollToBottom = () => {
  const messageBoxElement = document.getElementById('message-box');
  messageBoxElement?.scrollTo(0, messageBoxElement?.clientHeight || 0);
};

const Chat: React.FC = () => {
  const { messages, addMessage } = useMessages();

  const onSendMessage = async (message: string) => {
    await addMessage({
      message,
      userId,
      createdAt: new Date(),
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <BoxContainer>
      <Header />
      <MessageBox id="message-box">
        {messages &&
          messages.map(message => (
            <Message
              key={randomKey()}
              text={message.message}
              userId={message.userId}
            />
          ))}
      </MessageBox>
      <MessageInput onSend={onSendMessage} />
    </BoxContainer>
  );
};

export default Chat;
