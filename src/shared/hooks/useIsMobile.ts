import { useWindowSize } from 'usehooks-ts';

export function useIsMobile({ display }: { display: number }): boolean {
  const { width } = useWindowSize();
  const isMobile = width <= display;

  return isMobile;
}
