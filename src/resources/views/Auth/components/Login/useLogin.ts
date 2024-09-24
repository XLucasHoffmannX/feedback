import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { loginSchema, LoginSchemaType } from './login.schema';

export function useLogin() {
  const navigate = useNavigate();

  const methods = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema)
  });

  function onSubmit(data: LoginSchemaType) {
    if (data.email === 'teste@teste.com' && data.password === 'password*') {
      return navigate('/home');
    }

    console.log(data);
    toast.success('Deu bao!');
  }

  const disabledContinue =
    !methods.watch('email') || !methods.watch('password');

  return {
    handleSubmit: methods.handleSubmit(onSubmit),
    errors: methods.formState.errors,
    methods,
    disabledContinue
  };
}
