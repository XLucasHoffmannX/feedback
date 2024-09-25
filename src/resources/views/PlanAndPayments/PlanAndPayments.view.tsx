import { CardPlan } from './components/CardPlans.component';
import { ICardPlanProps } from './components/ICardPlan.component';
import { ManagementLayout } from '@/resources/components/layouts';

export function PlanAndPayments(): JSX.Element {
  const array: ICardPlanProps[] = [
    { title: 'Empresa', value: '99', currency: '€', quantity: 'Ilimitado' },
    { title: 'Essencial', value: '15', currency: '€', quantity: '5000' },
    { title: 'Básico', value: 'Free', currency: '', quantity: '1000' }
  ];

  return (
    <ManagementLayout>
      <div className="h-full w-full flex items-center justify-center">
        <div className="w-full max-w-4xl h-full p-6 my-4">
          <div className="flex items-center">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center justify-between w-full">
                <h1 className="md:text-4xl text-3xl font-bold">Planos e pagamento</h1>
              </div>
              {/* Cards Responsivos Centralizados */}
              <div className="bg-gray-50 rounded-sm shadow-sm p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {array.map((item, key) => (
                  <CardPlan
                    title={item.title}
                    value={item.value}
                    quantity={item.quantity}
                    currency={item.currency}
                    key={key}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ManagementLayout>
  );
}
