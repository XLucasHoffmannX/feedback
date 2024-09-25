import { BsEmojiSmile } from 'react-icons/bs';
import { FiChevronRight } from 'react-icons/fi';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';

import { ICardSurveyProps } from './CardSurvey.types';

export function CardSurvey(card: ICardSurveyProps): JSX.Element {
  return (
    <div className='border rounded-sm h-[180px] flex justify-between w-full shadow-xl'>
      <div className='p-3 flex flex-col justify-between'>
        <div className='flex flex-col'>
          <h1
            className='font-bold text-2xl max-w-[158px] truncate'
            title={card.title}
          >
            {card.title}
          </h1>
          <span>Enquete</span>
        </div>
        <span className='text-neutral-500'>Em {card.link}</span>
      </div>

      <div className='flex items-center h-full gap-2 '>
        <div className='h-full flex flex-col p-3 '>
          <p className='flex items-center gap-2'>
            <IoChatboxEllipsesOutline />
            {card.comments} comentários
          </p>
          <p className='flex items-center gap-2'>
            <BsEmojiSmile />
            {card.responses} respostas
          </p>
        </div>
        <div className='bg-primary h-full w-[40px] flex items-center justify-center rounded-r-sm cursor-pointer'>
          <FiChevronRight className='text-3xl text-secondary' />
        </div>
      </div>
    </div>
  );
}
