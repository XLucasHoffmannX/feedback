import { ICardPlan } from '../CardPlans/CardPlan.types';

export interface ICarouselPlan {
  cardsArray: ICardPlan[];
}

export interface ICarouselPlanProps extends ICarouselPlan {}
