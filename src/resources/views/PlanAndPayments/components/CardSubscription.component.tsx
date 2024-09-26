import { Button } from '@/resources/components/ui';
import { ICardSubscriptionProps } from './CardSubscription.types';

export function CardSubscription(card: ICardSubscriptionProps): JSX.Element {
  return (
    <div className='w-full flex items-center justify-center mt-6'>
      <div className='w-full max-w-4xl'>
        <div className='bg-gray-50 rounded-sm shadow-sm p-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 justify-between items-center'>
          <div>
            <h1 className='text-xl font-bold'>{card.title}</h1>
            <div className='w-full md:flex flex-col text-sm'>
              <span className='text-neutral-400'>{card.description}</span>
            </div>
          </div>
          <div className='flex justify-center'>
            <Button
              className='md:w-auto hover:scale-105 transition-all duration-200 gap-[8px] px-[48px] transform active:scale-90 hover:opacity-[80%]'
              variant={card.variant}
              size='lg'
            >
              {card.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
