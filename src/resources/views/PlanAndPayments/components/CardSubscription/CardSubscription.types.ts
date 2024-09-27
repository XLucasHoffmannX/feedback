import { IButtonProps } from '@/resources/components/ui';

export interface ICardSubscription {
  title: string;
  description: string;
  buttonText: string;
  buttonColor: string;
  variant: IButtonProps['variant'];
  lasItem?: boolean;
}

export interface ICardSubscriptionProps extends ICardSubscription {}
