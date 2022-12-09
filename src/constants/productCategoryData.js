import {
  ProductCategoryBike,
  ProductCategoryScooter,
  ProductCategoryCar,
  ProductCategoryAccessories,
} from '@app/assets/svg';

export const productCategoryDataItems = [
  {
    id: 1,
    categoryName: 'Bike',
    categoryImage: <ProductCategoryBike width={50} height={45} />,
    isActive: true,
  },
  {
    id: 2,
    categoryName: 'Scooter',
    categoryImage: <ProductCategoryScooter width={50} height={45} />,
    isActive: false,
  },
  {
    id: 3,
    categoryName: 'Car',
    categoryImage: <ProductCategoryCar width={50} height={45} />,
    isActive: false,
  },
  {
    id: 4,
    categoryName: 'Accessories',
    categoryImage: <ProductCategoryAccessories width={50} height={45} />,
    isActive: false,
  },
];
