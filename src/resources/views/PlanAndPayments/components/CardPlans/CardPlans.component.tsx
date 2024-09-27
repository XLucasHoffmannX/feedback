import { ICardPlanProps } from './CardPlan.types';
import { Button } from '@/resources/components/ui';
import { Separator } from '@radix-ui/react-menubar';

export function CardPlan(card: ICardPlanProps): JSX.Element {
  return (
    <div className='bg-secondary md:flex flex-col border rounded-sm h-[360px] w-[240px] shadow-xl animate-up'>
      <div className='flex justify-between h-[140px]'>
        <div className='p-3 flex flex-col justify-between'>
          <div className='flex flex-col'>
            <h1 className='font-bold text-2xl'>{card.title}</h1>
            <span className='text-3xl font-bold'>
              {card.currency}
              <span className='text-4xl font-extrabold'>{card.value}</span>
            </span>
            <span className='text-neutral-300'>{card.period}</span>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <Button className='md:w-auto w-[120px] h-[45px] hover:scale-105 transition-all duration-200 flex items-center justify-center gap-[8px] px-[48px] transform active:scale-90 hover:opacity-[80%]'>
          <div className='font-base font-medium flex items-center gap-1'>
            <p>Ativar plano</p>
          </div>
        </Button>
      </div>
      <div className='mt-4'>
        <Separator className='border-gray-100 w-full border' />
      </div>
      <div className='m-3 text-sm'>
        <span className='text-neutral-300'>Respostas</span>
        <p>
          <strong>{card.quantity}</strong> por mês
        </p>
        <Separator className='mt-2' />
        <span className='text-neutral-300'>Uso</span>
        <p>
          <strong>Ilimitados</strong> websites
        </p>
        <p>
          <strong>Ilimitadas</strong> enquetes
        </p>
        <p>
          <strong>Ilimitados</strong> usuários
        </p>
      </div>
    </div>
  );
}
