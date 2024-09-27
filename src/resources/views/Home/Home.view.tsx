import { ManagementLayout } from '@/resources/components/layouts';

import { CardSurvey, FilterAndSearch, PaginationSurvey } from './components';

export function Home(): JSX.Element {
  return (
    <ManagementLayout>
      <div className='md:w-[1200px] h-full p-6 my-4'>
        <FilterAndSearch />

        <div className='flex flex-col gap-3 pb-32'>
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
    </ManagementLayout>
  );
}
