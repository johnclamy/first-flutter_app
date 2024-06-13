export type PizzaSize = "sm" | "md" | "lg" | "xl";

export interface Product {
  id: number;
  name: string;
  image: string | null;
  price: number;
}

const products: Product[] = [
  {
    id: 7665807686715617,
    name: "Ultimate Pepperoni",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png",
    price: 12.99,
  },
  {
    id: 8312074975548631,
    name: "ExtravaganZZa",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/extravaganzza.png",
    price: 14.99,
  },
  {
    id: 7046928926103841,
    name: "MeatZZa",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png",
    price: 13.47,
  },
  {
    id: 2984880336579019,
    name: "Margarita",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/margarita.png",
    price: 9.9,
  },
  {
    id: 447448150100503,
    name: "Pacific Veggie",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/veggie.png",
    price: 12.99,
  },
  {
    id: 6567167007981579,
    name: "Hawaiian",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/hawaiin.png",
    price: 10.49,
  },
  {
    id: 7466301765809471,
    name: "Deluxe",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/deluxe.png",
    price: 16.99,
  },
  {
    id: 5598353444557157,
    name: "BBQ Chicken",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/veggie.png",
    price: 12.89,
  },
  {
    id: 7403683521328743,
    name: "Chicken Bacon Ranch",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/extravaganzza.png",
    price: 13.99,
  },
  {
    id: 8692972712887753,
    name: "6 Cheese",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/6cheese.png",
    price: 13.29,
  },
];

export default products;
