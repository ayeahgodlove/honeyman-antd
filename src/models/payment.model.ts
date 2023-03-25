import { IBaseState } from "./base-state.model";
import { IResponseBase } from "./response-base.model";

export interface IPayment {
  id: string;
  userId: number;
  orderNo: string;
  amount: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export const emptyPayment: IPayment = {
  id: "",
  userId: 0,
  orderNo: "",
  amount: 0,
  status: "",
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: new Date(),
};

export interface IPaymentState extends IBaseState {
  readonly payments: IPayment[];
  readonly payment: IPayment;
}

export interface IPaymentResponse extends IResponseBase {
  data: IPayment
}