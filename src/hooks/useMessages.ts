import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCollection, useDocument } from '@nandorojo/swr-firestore';

export type MessageInfo = {
  userId: string;
  message: string;
  createdAt: Date;
};

const useMessages = () => {
  const { title } = useParams<{ title: string }>();

  const { data: doc, set, loading } = useDocument(`movies/${title}`);

  useEffect(() => {
    if (!loading) {
      if (!doc?.exists) {
        // Create the document in case it doesn't exists
        set({});
      }
    }
  }, [loading]);

  const { data, add } = useCollection<MessageInfo>(`movies/${title}/messages`, {
    listen: true,
    orderBy: ['createdAt', 'asc'],
  });

  return {
    messages: data,
    addMessage: add,
  };
};

export default useMessages;
