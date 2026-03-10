import type { Product } from "./ProductTypes";
import type { Address, User } from "./UserTypes";

export interface OrderState {
    orders: Order[];
    orderItem: OrderItem | null;
    currentOrder: Order | null;
    paymentOrder: any | null;
    loading: boolean;
    error: string | null;
    orderCanceled: boolean;
}

export interface Order {
    id: number;
    orderId: string;
    user: User;
    sellerId: number;
    orderItems: OrderItem[];
    orderDate: string;
    shippingAddress: Address;
    paymentDetails: any;
    totalMrpPrice: number;
    totalSellingPrice?: number;
    discount?: number;
    totalItem: number;
    orderStatus: OrderStatus;
    deliverDate: string;
}

export const OrderStatus = {
  PENDING: 'PENDING',
  SHIPPED: 'SHIPPED',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED',
} as const;

export type OrderStatus = keyof typeof OrderStatus;

export interface OrderItem {
    id: number;
    order: Order;
    product: Product;
    size: string;
    quantity: number;
    mrpPrice: number;
    sellingPrice: number;
    userId: number;
}