import { Button } from '@/resources/components/ui';
import { ICardSubscriptionProps } from './CardSubscription.types';
import { cn } from '@/shared/lib/utils';

export function CardSubscription(card: ICardSubscriptionProps): JSX.Element {
  return (
    <div
      className={cn(
        `w-full flex items-center justify-center mt-6 bir ${
          card.lasItem && 'pb-32'
        }`
      )}
    >
      <div className='w-full max-w-4xl border rounded-sm'>
        <div className='bg-gray-50 rounded-sm shadow-sm p-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 justify-between items-center'>
          <div>
            <h1 className='text-xl font-bold'>{card.title}</h1>
            <div className='w-full md:flex flex-col text-sm'>
              <span className='text-neutral-400'>{card.description}</span>
            </div>
          </div>
          <div className='flex justify-center'>
            <Button
              className={card.buttonColor}
              variant={card.variant}
            >
              {card.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
