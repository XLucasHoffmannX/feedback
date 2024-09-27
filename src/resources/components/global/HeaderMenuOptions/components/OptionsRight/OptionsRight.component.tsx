import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/resources/components/ui';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { LuUser } from 'react-icons/lu';
import { Link } from 'react-router-dom';

export function OptionsRight(): JSX.Element {
  return (
    <div className='flex items-center'>
      <ul className='flex items-center text-md font-bold gap-3'>
        <li className='md:block hidden'>
          <Link to='/home'>Suporte</Link>
        </li>
        <Popover>
          <PopoverTrigger asChild>
            <div className='flex items-center gap-1 cursor-pointer hover:opacity-[80%] hover:scale-110 transition-all duration-200 select-none'>
              Usuário
              <ChevronDownIcon />
              <LuUser className='md:hidden block' />
            </div>
          </PopoverTrigger>
          <PopoverContent className='border mr-4'>
            <ul className='font-medium flex flex-col gap-3 '>
              <li>
                <Link to='#'>Configurações da conta</Link>
              </li>
              <li>
                <Link to='/plan-and-payments'>Meu plano</Link>
              </li>
              <li>Sair</li>
            </ul>
          </PopoverContent>
        </Popover>
        {/*         <li className='flex items-center gap-1 cursor-pointer hover:opacity-[80%] hover:scale-110 transition-all duration-200'>
          <LuUser className='md:hidden block' />

          <Link
            to='/home'
            className='max-w-[110px] truncate items-center md:block hidden'
          >
            Usuário
          </Link>
          <ChevronDownIcon />
        </li> */}
      </ul>
    </div>
  );
}
