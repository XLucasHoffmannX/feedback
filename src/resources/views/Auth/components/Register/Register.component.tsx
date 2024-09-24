import { FaCheck } from 'react-icons/fa';
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

import { useRegister } from './useRegister';

export function Register(): JSX.Element {
  const { methods, handleSubmit, errors } = useRegister();
  const { theme, setTheme } = useTheme();

  return (
    <div className='flex flex-col md:flex-row gap-y-6 animate-up'>
      <div className='mr-6 flex flex-col gap-5 animate-left m-3'>
        <div className='flex flex-col gap-3'>
          <h1 className='font-extralight text-5xl'>Bora lá</h1>
          <ul className='text-green-500 font-medium space-y-2'>
            <li className='flex items-center gap-2'>
              <FaCheck /> Grátis
            </li>
            <li className='flex items-center gap-2'>
              <FaCheck /> Sem cartão de crédito
            </li>
            <li className='flex items-center gap-2'>
              <FaCheck /> Suporte completo para você
            </li>
          </ul>
        </div>
        <div className='bg-neutral-50 p-5 rounded-sm w-[300px] shadow-md '>
          <ul className='text-black font-medium space-y-2'>
            <li>
              <b>100 respostas</b> por mês
            </li>
            <li>
              <b>Feedbacks</b> ilimitados
            </li>
            <li>
              <b>Websites</b> ilimitados
            </li>
            <li>
              <b>10</b> usuários
            </li>
            <li>
              <b>Todas</b> as features
            </li>
          </ul>
        </div>
      </div>

      <div className='border md:w-[450px]  rounded-sm p-5 m-3'>
        <Form {...methods}>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-4 justify-center h-full'
          >
            <FormField
              control={methods.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-base'>Nome completo</FormLabel>

                  <FormControl>
                    <Input
                      {...field}
                      className='h-[50px] rounded'
                      placeholder='Insira seu nome completo'
                      errorMessage={errors.name?.message}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

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

            <Separator className='my-3' />

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

            <FormField
              control={methods.control}
              name='confirmPassword'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-base'>Confirmar senha</FormLabel>

                  <FormControl>
                    <PasswordInput
                      {...field}
                      className='h-[50px] rounded'
                      placeholder='Confirme sua senha'
                      errorMessage={errors.password?.message}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className='mt-4 text-sm flex gap-2 items-center'>
              <span className='font-medium'>Modo noturno</span>
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={() => {
                  setTheme(theme === 'light' ? 'dark' : 'light');
                }}
              />
            </div>

            <p className='text-muted font-medium text-neutral-600 text-sm mt-6'>
              Criando uma conta, você concorda com todos os nossos {''}
              <Link
                to='/terms-of-use'
                className='underline'
              >
                termos e condições.
              </Link>
            </p>

            <Button
              type='submit'
              className='h-[50px] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-[8px] px-[24px] rounded-full transform active:scale-90 hover:opacity-[80%] w-full'
            >
              Continuar
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
