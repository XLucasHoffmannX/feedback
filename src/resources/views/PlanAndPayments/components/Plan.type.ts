export interface IPlan {
    title: string;
    value: string;
    currency: string;
    quantity: string;
    period: string;
    responses: string;
    percentage: string;
    total: string;
  }
  
export interface IPlanProps extends IPlan {}