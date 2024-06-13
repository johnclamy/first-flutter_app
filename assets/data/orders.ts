import dayjs from "dayjs";
import products, { Product, PizzaSize } from "./products";

type OrderStatus = "Pending" | "Processing" | "Transit" | "Completed";

interface OrderItem {
  id: number;
  productId: number;
  products: Product;
  orderId: number;
  size: PizzaSize;
  quantity: number;
}

interface Order {
  id: number;
  userId: string;
  status: OrderStatus;
  items: OrderItem[];
  total: number;
  createdAt: string;
}

const orders: Order[] = [
  {
    id: 2005102978470879,
    userId: "4d2b88e6-de72-4cec-8ac9-06d4dc644f88",
    status: "Processing",
    items: [
      {
        id: 4025707793426445,
        productId: products[0].id,
        products: products[0],
        orderId: 2005102978470879,
        size: "md",
        quantity: 2,
      },
      {
        id: 7702350141558155,
        productId: products[1].id,
        products: products[1],
        orderId: 2005102978470879,
        size: "lg",
        quantity: 1,
      },
    ],
    total: 31.4,
    createdAt: dayjs().subtract(1, "hour").toISOString(),
  },
  {
    id: 991582004936265,
    userId: "a19373a0-1a99-4e0b-ae9e-0221b077223b",
    status: "Completed",
    items: [
      {
        id: 1625489332335805,
        productId: products[3].id,
        products: products[3],
        orderId: 991582004936265,
        size: "md",
        quantity: 2,
      },
    ],
    total: 11.4,
    createdAt: dayjs().subtract(3, "days").toISOString(),
  },
  {
    id: 4284699421099721,
    userId: "637462e9-d7f4-4b85-86b2-5a5f5e248698",
    status: "Completed",
    items: [
      {
        id: 862681021829645,
        productId: products[3].id,
        products: products[3],
        orderId: 4284699421099721,
        size: "md",
        quantity: 1,
      },
      {
        id: 1159579168516233,
        productId: products[7].id,
        products: products[7],
        orderId: 4284699421099721,
        size: "md",
        quantity: 1,
      },
      {
        id: 2395941585436723,
        productId: products[8].id,
        products: products[8],
        orderId: 4284699421099721,
        size: "lg",
        quantity: 1,
      },
    ],
    total: 11.4,
    createdAt: dayjs().subtract(3, "weeks").toISOString(),
  },
];

export default orders;
