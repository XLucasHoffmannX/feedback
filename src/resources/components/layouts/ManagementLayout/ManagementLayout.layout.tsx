import { ChevronDownIcon, PlusIcon } from '@radix-ui/react-icons';
import { BsEmojiSmile } from 'react-icons/bs';
import { IoMdMenu } from 'react-icons/io';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { LuHome, LuUser, LuUserSquare } from 'react-icons/lu';
import { RiSurveyLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  Separator
} from '../../ui';

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

          <ul className='flex items-center text-lg font-bold gap-5'>
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
            <li className='hidden md:block'>
              <Link
                to='/home'
                className='flex items-center gap-1'
              >
                <RiSurveyLine className='text-xl md:block hidden' />
                Enquentes
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
          <ul className='flex items-center text-lg font-bold gap-3'>
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

      <div className='h-full w-full flex items-center justify-center '>
        <div className='md:w-[1200px] h-full p-6 my-4'>
          <div className='flex items-center'>
            <div className='flex flex-col gap-2 w-full'>
              <div className='flex items-center justify-between w-full'>
                <h1 className='text-4xl font-bold'>Enquetes</h1>

                <Button className='md:w-auto w-[120px] h-[40px] hover:scale-105 transition-all duration-200 flex items-center justify-center gap-[8px] px-[24px] rounded-full transform active:scale-90 hover:opacity-[80%]'>
                  <div className='font-base font-medium flex items-center gap-1'>
                    <p className='hidden md:block'>Nova enquete</p>
                    <PlusIcon />
                  </div>
                </Button>
              </div>
              <div className='flex items-center gap-3'>
                <p className='font-medium '>100 enquetes</p>
                <p className='flex items-center gap-2'>
                  <BsEmojiSmile />
                  32,000 respostas
                </p>
                <p className='flex items-center gap-2'>
                  <IoChatboxEllipsesOutline />
                  32,000 comentaários
                </p>
              </div>

              <div className='flex items-center mt-5 gap-3 flex-wrap'>
                <Input
                  className='h-[50px] w-[350px]'
                  placeholder='Buscar...'
                />
                <Select defaultValue='0'>
                  <SelectTrigger className='h-[50px] w-[250px]'>
                    Enquentes
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value='0'>Enquetes</SelectItem>
                      <SelectItem
                        value='1'
                        disabled
                      >
                        {`Tour's`} (em breve 🚀)
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <Separator className='my-5' />
        </div>
      </div>
      {children}
    </div>
  );
}
