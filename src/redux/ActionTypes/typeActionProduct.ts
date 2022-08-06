export interface ProductType {
  title: string;
  position: string;
  description: string;
  status: string;
  duration: number;
  isClosable: boolean;
}
type Rating = {
  rate: number;
  count: number;
};

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: Rating;
  forHome?: boolean | undefined;
  forHome3?: boolean | undefined;
}
