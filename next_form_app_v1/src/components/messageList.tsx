import { getMessages } from '@/app/actions';

type Message = {
  id: string;
  text: string;
};

const MessageList =  async () => {
    const messages = await getMessages();
  return (
    <ul>
        {messages.map((message:Message) => (  
            <li key={message.id}>{message.text}</li>
        ))}
    </ul>
  );
};

export { MessageList };