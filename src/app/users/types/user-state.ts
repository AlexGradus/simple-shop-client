import { BaseState } from "types/base-state.type";
import { UserDto } from "./user.dto";
import { OrderDto } from "./order.dto";


export interface UserState extends BaseState {
  user: UserDto | null;
  userOrders: OrderDto[] | null;
  pending: {
    user: boolean;
    userOrders: boolean;
  };
  errors: {
   user: string | null;
   userOrders: string | null;
  };
  success: {
   user: string | null;
   userOrders: string | null;
  };
}
