import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/resources/components/ui';

export function PaginationSurvey(): JSX.Element {
  return (
    <Pagination className='mt-3'>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href='#' />
        </PaginationItem>
        {Array.from({ length: 2 }).map((item, key) => (
          <PaginationLink
            href='#'
            className='tex-lg'
          >
            {key + 1}
          </PaginationLink>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href='#' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
