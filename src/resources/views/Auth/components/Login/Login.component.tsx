import { Link } from 'react-router-dom';

import {
  Button,
  Input,
  PasswordInput,
  Separator
} from '@/resources/components/ui';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/resources/components/ui/form';
import { Switch } from '@/resources/components/ui/switch';
import { useTheme } from '@/shared/styles/theme/theme-provider';

import { useLogin } from './useLogin';

export function Login(): JSX.Element {
  const { methods, handleSubmit, errors } = useLogin();
  const { theme, setTheme } = useTheme();

  return (
    <div className='flex flex-col animate-up'>
      <div className='border md:w-[450px] rounded-sm p-5'>
        <p className='mb-5 font-bold text-2xl'>Login</p>
        <Form {...methods}>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-4 justify-center h-full'
          >
            <FormField
              control={methods.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-base'>Email</FormLabel>

                  <FormControl>
                    <Input
                      {...field}
                      className='h-[50px] rounded'
                      placeholder='Insira seu email'
                      errorMessage={errors.email?.message}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={methods.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-base'>Senha</FormLabel>

                  <FormControl>
                    <PasswordInput
                      {...field}
                      className='h-[50px] rounded'
                      placeholder='Insira sua senha'
                      errorMessage={errors.password?.message}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className='flex items-center justify-end'>
              <Link
                to=''
                className='text-primary text-sm'
              >
                Esqueceu sua senha?
              </Link>
            </div>

            <div className='mt-4 text-sm flex gap-2 items-center'>
              <span className='font-medium'>Modo noturno</span>
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={() => {
                  setTheme(theme === 'light' ? 'dark' : 'light');
                }}
              />
            </div>

            <Separator className='my-3' />

            <Button
              type='submit'
              className='h-[50px] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-[8px] px-[24px] rounded-full transform active:scale-90 hover:opacity-[80%] w-full'
            >
              Acessar minha conta
            </Button>
          </form>
        </Form>
      </div>
      <p className='mt-4 text-sm'>
        Não tem uma conta?{' '}
        <Link
          to='/register'
          className='text-blue-500 underline'
        >
          Cadastra-se
        </Link>
      </p>
    </div>
  );
}
