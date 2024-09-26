import { Separator } from '@radix-ui/react-menubar';
import { IPlanProps } from './Plan.type';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';

export function Plan(item: IPlanProps): JSX.Element {
  return (
    <div className='w-full flex items-center justify-center mt-6'>
      <div className='w-full max-w-4xl'>
        <div className='bg-gray-50 rounded-sm shadow-sm p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 justify-between'>
          <div>
            <h1 className='text-xl font-bold'>Plano</h1>
            <div className='w-full bg-neutral-100 p-4'>
              <h1 className='text-primary text-xl font-bold'>{item.title}</h1>
              <span className='text-xl'>{item.currency}</span>
              <span className='text-xl font-extrabold'>{item.value} </span>
              <span className='text-neutral-400'>{item.period}</span>
            </div>
            <Separator className='mt-4' />
            <div>
              <p className='text-gray-600'>O plano inclui:</p>
              <ul className='list-disc ml-8 mt-1 text-gray-600'>
                <li>
                  <strong>{item.quantity}</strong> respostas por mês
                </li>
                <li>
                  <strong>Ilimitados</strong> websites
                </li>
                <li>
                  <strong>Ilimitadas</strong> enquetes
                </li>
                <li>
                  <strong>Ilimitado</strong> usuários
                </li>
              </ul>
            </div>
          </div>
          <div className='w-full'>
            <h1 className='text-xl font-bold'>Uso</h1>
            <div className='text-gray-600 w-full h-full flex flex-col mt-3'>
              <p className='flex items-center gap-2'>
                <IoChatboxEllipsesOutline />
                Respostas <strong>mensal:</strong> {item.responses} de{' '}
                {item.quantity}
              </p>
              <div className='w-[90%] bg-gray-300 h-2'>
                <div
                  className='bg-blue-600 h-2 transition-all duration-300'
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
              <p className='flex items-center gap-2 mt-3'>
                <IoChatboxEllipsesOutline />
                <strong>Total</strong> de respostas: {item.total}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
