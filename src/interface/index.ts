export type RecentOrderProps = {
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
