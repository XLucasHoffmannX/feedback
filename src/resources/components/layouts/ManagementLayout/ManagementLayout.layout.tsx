import { ChevronDownIcon, PlusIcon } from '@radix-ui/react-icons';
import { IoMdMenu } from 'react-icons/io';
import { LuHome, LuUser, LuUserSquare } from 'react-icons/lu';
import { Link } from 'react-router-dom';

import { Button } from '../../ui';

import { IManagementLayoutProps } from './ManagementLayout.types';

export function ManagementLayout({
  children
}: IManagementLayoutProps): JSX.Element {
  return (
    <div className='w-screen h-screen flex flex-col overflow-x-hidden'>
      <div className='border-b h-[75px] flex items-center justify-between px-5 gap-3'>
        <div className='flex items-center'>
          {/* Menu */}
          <IoMdMenu className='md:hidden text-xl block mr-4 cursor-pointer hover:opacity-[80%] hover:scale-110 transition-all duration-200' />

          <Link
            className='font-bold text-xl text-primary mr-12 hidden md:block'
            to='/'
          >
            FeedbackHub
          </Link>

          <ul className='flex items-center text-md font-bold gap-5'>
            <li className='md:block hidden'>
              <Link
                to='/home'
                className='flex items-center gap-1'
              >
                <LuHome className='text-xl md:block hidden' /> Inicio
              </Link>
            </li>
            <li className='hidden md:block'>
              <Link
                to='/home'
                className='flex items-center gap-1'
              >
                <LuUserSquare className='text-xl md:block hidden' />
                Contas
              </Link>
            </li>
            <li>
              <Button className='md:w-auto w-[120px] h-[40px] hover:scale-105 transition-all duration-200 flex items-center justify-center gap-[8px] px-[24px] rounded-full transform active:scale-90 hover:opacity-[80%]'>
                <div className='font-base font-medium flex items-center gap-1'>
                  <p className='hidden md:block'>Criar</p>
                  <PlusIcon />
                </div>
              </Button>
            </li>
          </ul>
        </div>

        <div className='flex items-center'>
          <ul className='flex items-center text-md font-bold gap-3'>
            <li className='md:block hidden'>
              <Link to='/home'>Suporte</Link>
            </li>
            <li className='flex items-center gap-1 cursor-pointer hover:opacity-[80%] hover:scale-110 transition-all duration-200'>
              <LuUser className='md:hidden block' />

              <Link
                to='/home'
                className='max-w-[110px] truncate items-center md:block hidden'
              >
                Lucas Hoffmann
              </Link>
              <ChevronDownIcon />
            </li>
          </ul>
        </div>
      </div>

      {children}
    </div>
  );
}
