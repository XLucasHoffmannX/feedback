import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Switch
} from '@/resources/components/ui';
import { useTheme } from '@/shared/styles/theme/theme-provider';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { LuUser } from 'react-icons/lu';
import { Link } from 'react-router-dom';

export function OptionsRight(): JSX.Element {
  const { theme, setTheme } = useTheme();

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

              <li
                className='flex items-center justify-between w-full cursor-pointer'
                onClick={() => {
                  setTheme(theme === 'light' ? 'dark' : 'light');
                }}
              >
                <Link to='/plan-and-payments'>Meu noturno</Link>
                <Switch checked={theme === 'dark'} />
              </li>

              <li className='text-red-500 font-bold text-lg cursor-pointer mt-4'>
                <Button
                  variant='destructive'
                  className='w-full'
                >
                  Sair
                </Button>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      </ul>
    </div>
  );
}
