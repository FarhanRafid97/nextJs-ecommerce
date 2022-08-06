import data from '../product.json';
import { Product } from '../src/redux/ActionTypes/typeActionProduct';

export enum CategoryType {
  ALL = '',
  MEN = "men's clothing",
  WOMEN = 'jewelery',
  ACCESSORIS = "women's clothing",
}

interface PropsDataProduct {
  category: CategoryType;
}

export const dataProduct = ({ category }: PropsDataProduct): Product[] => {
  if (category === CategoryType.WOMEN) {
    return data.products.filter((data) => data.category === CategoryType.WOMEN);
  }
  if (category === CategoryType.MEN) {
    return data.products.filter((data) => data.category === CategoryType.MEN);
  }
  if (category === CategoryType.ACCESSORIS) {
    return data.products.filter((data) => data.category === CategoryType.MEN);
  }
  return data.products;
};
