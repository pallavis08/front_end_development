import { MessageCreateForm } from '@/components/messageCreateForm';
import { MessageList } from '@/components/messageList';

export default function Home() {
  return (
    <main className="p-4">
      <MessageCreateForm />
      <MessageList />
    </main>
  );
}