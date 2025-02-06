'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import {
  FormState,
  fromErrorToFormState,
  toFormState,
} from '@/utils/toFormState';

type Message = {
  id: string;
  text: string;
};

let messages: Message[] = [
  {
    id: crypto.randomUUID(),
    text: 'First Message',
  },
  {
    id: crypto.randomUUID(),
    text: 'Second Message',
  },
  {
    id: crypto.randomUUID(),
    text: 'Third Message',
  },
];

export const getMessages = async (): Promise<Message[]> => {
  await new Promise((resolve) => setTimeout(resolve, 250));

  return Promise.resolve(messages);
};

const createMessageSchema = z.object({
  title: z.string().min(1).max(191),
  text: z.string().min(1).max(191),
});

// export const createMessage = async (formState: FormState, formData: FormData): Promise<FormState> => {
// export const createMessage = async (
//   formState: FormState,
//   formData: FormData
// ): Promise<FormState> => {
//   await new Promise((resolve) => setTimeout(resolve, 250));

//   try {
//     const data = createMessageSchema.parse({
//       title: formData.get('title'),
//       text: formData.get('text'),
//     });

//     messages.push({
//       id: crypto.randomUUID(),
//       ...data,
//     });
//   } catch (error) {
//     const formState = fromErrorToFormState(error);
//     const validFieldErrors: Record<string, string[]> = {};
//     for (const key in formState.fieldErrors) {
//       if (formState.fieldErrors[key]) {
//         validFieldErrors[key] = formState.fieldErrors[key]!;
//       }
//     }
//     return { ...formState, fieldErrors: validFieldErrors, timestamp: Date.now() };
//   }

//   revalidatePath('/');

//   return toFormState('SUCCESS', 'Message created');
// };

export const createMessage = async (
  formState: FormState,
  formData: FormData
) => {
  await new Promise((resolve) => setTimeout(resolve, 250));

  try {
    const data = createMessageSchema.parse({
      title: formData.get('title'),
      text: formData.get('text'),
    });

    messages.push({
      id: crypto.randomUUID(),
      ...data,
    });
  } catch (error) {
    return fromErrorToFormState(error);
  }

  revalidatePath('/');

  return toFormState('SUCCESS', 'Message created');
};