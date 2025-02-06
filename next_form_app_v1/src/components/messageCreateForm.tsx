
'use client';

import { useFormState } from 'react-dom';
import { createMessage } from '@/app/actions';
import { SubmitButton } from './submitButton';
import { EMPTY_FORM_STATE } from '@/utils/toFormState';
import { useToastMessage } from '@/hooks/useToastMessage';
import { FieldError } from './fieldError';
import { useFormReset } from '@/hooks/useFormReset';

const MessageCreateForm = () => {
  const [formState, action] = useFormState(
    createMessage,
    EMPTY_FORM_STATE
  );

  const noScriptFallback = useToastMessage(formState);
  const formRef = useFormReset(formState);

  return (
    <form
      action={action}
      ref={formRef}
      className="flex flex-col gap-y-2 mx-80 my-20"
    >
      <label htmlFor="title">Title</label>
      <input id="title" name="title" className="border-2 text-gray-700" />
      <FieldError formState={formState} name="title" />

      <label htmlFor="text">Text</label>
      <textarea id="text" name="text" className="border-2 text-gray-700" />
      <FieldError formState={formState} name="text" />

      <SubmitButton label="Create" loading="Creating ..." />

      {noScriptFallback}
    </form>
  );
};

export { MessageCreateForm };
