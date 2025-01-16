export type ProductDataProps = {
  order_id: string;
  amount: number;
  order_items: number;
  product_name: string;
  category: string;
  phone: string;
  date: Date;
  image: string;
  status: "shipped" | "delivered" | "returned" | "cancelled";
  email: string;
};

export interface PaginationType {
  pageIndex: number;
  pageSize: number;
}

export type RecentDataProps = {
  order_id: string;
  payment_id: string;
  name: string;
  address: string;
  pin_code: string;
  total_amount: number;
  email: string;
  user_id: string;
  status: "shipped" | "delivered" | "returned" | "cancelled";
  date: Date;
};

export type OrderProductProps = {
  product_id: string;
  product_title: string;
  image: string;
  quantity: number;
  price: number;
  sub_total: number;
};
