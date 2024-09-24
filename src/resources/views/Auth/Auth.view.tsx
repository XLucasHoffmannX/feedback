import { Link } from 'react-router-dom';

import { Login, Register } from './components';

import { IAuthProps } from './Auth.types';

export function AuthView({ context }: IAuthProps): JSX.Element {
  return (
    <div className='w-screen h-screen flex flex-col overflow-x-hidden'>
      <div className='border-b h-[75px] flex items-center justify-center'>
        <Link
          className='font-bold text-2xl text-primary'
          to='/'
        >
          FeedbackHub
        </Link>
      </div>

      <div className='w-full h-full flex items-center justify-center overflow-y-auto overflow-x-hidden flex-wrap'>
        {context === 'login' && <Login />}

        {context === 'register' && <Register />}
      </div>
    </div>
  );
}
