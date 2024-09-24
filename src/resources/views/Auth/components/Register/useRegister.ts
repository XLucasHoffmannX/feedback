import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { registerSchema, RegisterSchemaType } from './register.schema';

export function useRegister() {
  const methods = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema)
  });

  function onSubmit(data: RegisterSchemaType) {
    console.log(data);
    toast.success('Deu bao!');
  }

  return {
    handleSubmit: methods.handleSubmit(onSubmit),
    errors: methods.formState.errors,
    methods
  };
}
