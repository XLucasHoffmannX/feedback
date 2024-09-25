import { Fragment } from 'react';

import { PlusIcon } from '@radix-ui/react-icons';
import { BsEmojiSmile } from 'react-icons/bs';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';

import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  Separator
} from '@/resources/components/ui';

export function FilterAndSearch(): JSX.Element {
  return (
    <Fragment>
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
    </Fragment>
  );
}
