import { IButtonProps } from '@/resources/components/ui';

export interface ICardSubscription {
  title: string;
  description: string;
  buttonText: string;
  variant: IButtonProps['variant'];
}

export interface ICardSubscriptionProps extends ICardSubscription {}
