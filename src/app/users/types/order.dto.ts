import { EnumType } from "typescript";

export interface OrderDto  {
  id: number;
  createdAt: number;
  updatedAt: number;
  status:EnumType;
  items: any[];
  total: number;
}
