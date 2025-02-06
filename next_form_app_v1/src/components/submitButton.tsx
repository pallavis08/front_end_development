'use client';

import { useFormStatus } from 'react-dom';

type SubmitButtonProps = {
  label: string;
  loading: React.ReactNode;
};

const SubmitButton = ({ label, loading }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit" className="w-2/6 h-10 px-3  ml-80 my-10 text-indigo-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-800">
      {pending ? loading : label}
    </button>
  );
};

export { SubmitButton };