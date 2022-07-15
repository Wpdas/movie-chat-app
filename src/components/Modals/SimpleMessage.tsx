import React from 'react';
import { Body, Overlay } from './styles';

type Props = {
  message: string;
  onConfirm?: () => void;
};

const SimpleMessage: React.FC<Props> = ({ message, onConfirm }) => {
  return (
    <Overlay>
      <Body>
        <p>{message}</p>
        <button type="button" onClick={onConfirm}>
          Okay
        </button>
      </Body>
    </Overlay>
  );
};

export default SimpleMessage;
