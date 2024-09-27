import { ManagementLayout } from '@/resources/components/layouts';

import { CardSurvey } from './components/CardSurvey/CardSurvey.component';
import { FilterAndSearch } from './components';

export function Home(): JSX.Element {
  return (
    <ManagementLayout>
      <div className='h-full w-full flex items-center justify-center overflow-auto mb-18'>
        <div className='md:w-[1200px] h-full p-6 my-4'>
          <FilterAndSearch />

          <div className='flex flex-col gap-3'>
            {Array.from({ length: 5 }).map((item, key) => (
              <CardSurvey
                title={`Cadastro por percurso ${key}`}
                comments={'32,000'}
                responses={'32,000'}
                link='https://google.com'
                type='Enquente'
                key={key}
              />
            ))}
          </div>
        </div>
      </div>
    </ManagementLayout>
  );
}
