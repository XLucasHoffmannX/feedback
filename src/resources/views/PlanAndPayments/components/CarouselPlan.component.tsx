import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/resources/components/ui/carousel';
import { ICardPlanProps } from './CardPlan.types';
import { CardPlan } from './CardPlans.component';
import { ICarouselPlanProps } from './CarouselPlan.types';

export function CarouselPlan(item: ICarouselPlanProps): JSX.Element {
  return (
    <Carousel className='w-full max-w-xs'>
      <CarouselContent>
        {item.array.map((item: ICardPlanProps, key) => (
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
