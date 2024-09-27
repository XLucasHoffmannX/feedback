import { CardPlan } from './components/CardPlans/CardPlans.component';
import { ICardPlanProps } from './components/CardPlans/CardPlan.types';
import { ManagementLayout } from '@/resources/components/layouts';
import { CardSubscription, CarouselPlan, Plan } from './components';
import { useIsMobile } from '@/shared/hooks';

export function PlanAndPayments(): JSX.Element {
  const isMobile: boolean = useIsMobile({ display: 1024 });
  const array: ICardPlanProps[] = [
    {
      title: 'Empresa',
      value: '99',
      currency: '€',
      quantity: 'Ilimitado',
      period: 'Por mês'
    },
    {
      title: 'Essencial',
      value: '15',
      currency: '€',
      quantity: '5000',
      period: 'Por mês'
    },
    {
      title: 'Básico',
      value: 'Free',
      currency: '',
      quantity: '1000',
      period: ''
    }
  ];

  return (
    <ManagementLayout>
      <div className='md:w-[1200px] h-full p-6 my-4'>
        <div className='w-full flex justify-center'>
          <div className='w-full max-w-4xl'>
            <div className='flex items-center justify-between w-full'>
              <h1 className='md:text-4xl text-3xl font-bold mb-4'>
                Planos e pagamento
              </h1>
            </div>

            <div className='bg-gray-50 shadow-sm p-5 grid grid-cols-1 gap-4 lg:grid-cols-3 justify-items-center border rounded-sm'>
              {isMobile ? (
                <CarouselPlan cardsArray={array} />
              ) : (
                <>
                  {array.map((item, key) => (
                    <CardPlan
                      title={item.title}
                      value={item.value}
                      quantity={item.quantity}
                      currency={item.currency}
                      period={item.period}
                      key={key}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>

        <Plan
          title='Essencial'
          currency='R$'
          value='15'
          percentage='46'
          period='por mês'
          quantity='5,000'
          responses='2,175'
          total='27,561'
        />

        <CardSubscription
          title='Atualizar assinatura'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          buttonText='Atualizar assinatura'
          variant='default'
        />

        <CardSubscription
          title='Cancelar assinatura'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          buttonText='Cancelar assinatura'
          variant='destructive'
          lasItem
        />
      </div>
    </ManagementLayout>
  );
}
