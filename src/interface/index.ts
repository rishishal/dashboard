export type ProductDataProps = {
  product_id: string;
  product_name: string;
  category: string;
  date: Date;
  image: string;
  status: "published" | "draftlist" | "stockout" | "inactive";
  price: number;
  stock: number;
  size: string;
  description: string;
};

export interface PaginationType {
  pageIndex: number;
  pageSize: number;
}

export type RecentDataProps = {
  order_id: string;
  payment_id: string;
  name: string;
  product_name: string;
  image: string;
  phone: number;
  address: string;
  pin_code: string;
  total_amount: number;
  email: string;
  user_id: string;
  status: "shipped" | "delivered" | "returned" | "cancelled";
  date: Date;
  payment_status: string;
  quantity: number;
  delivery_number: string;
};

export type BannerDataProps = {
  bannerImage: string;
  active: boolean;
  url: string;
};
