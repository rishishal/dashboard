export type RecentOrderProps = {
  order_id: string;
  amount: number;
  order_items: number;
  product_name: string;
  date: Date;
  status: "shipped" | "delivered" | "returned" | "cancelled";
  email: string;
};
