import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/resources/components/ui/carousel';
import { ICarouselPlanProps } from './CarouselPlan.types';
import { CardPlan } from './CardPlans/CardPlans.component';
import { ICardPlanProps } from './CardPlans/CardPlan.types';

export function CarouselPlan(item: ICarouselPlanProps): JSX.Element {
  return (
    <Carousel className='w-full max-w-xs'>
      <CarouselContent>
        {item.cardsArray.map((item: ICardPlanProps, key) => (
          <CarouselItem key={key}>
            <div className='flex justify-center items-center'>
              <CardPlan
                title={item.title}
                value={item.value}
                quantity={item.quantity}
                currency={item.currency}
                period={item.period}
                key={key}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='mx-[15px]' />
      <CarouselNext className='mx-[15px]' />
    </Carousel>
  );
}
