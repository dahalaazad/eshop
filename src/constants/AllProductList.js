import {
  EngineFilterImage,
  BrakePadImage,
  ProductCategoryBike,
  ProductCategoryScooter,
  ProductCategoryCar,
  ProductCategoryAccessories,
} from '@app/assets/svg';

import {productCategoryDataItems} from './productCategoryData';
import productCardData from './ProductCardData';

const partsData = [
  {
    id: 1,
    productCardCategory: 'Engine Filter',
    productCardImage: <EngineFilterImage />,
    productCardTitle: 'Castrol Engine Filter',
    productCardSubTitle:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.... See More',
    productCardPrice: 1999,
  },
  {
    id: 2,
    productCardCategory: 'Brake Pad',
    productCardImage: <BrakePadImage />,
    productCardTitle: 'FZ Brake Pad',
    productCardSubTitle: 'Lorem ipsum',
    productCardPrice: 2500,
  },
  {
    id: 3,
    productCardCategory: 'Engine Filter',
    productCardImage: <EngineFilterImage />,
    productCardTitle: 'Chevron Engine Filter',
    productCardSubTitle:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.... See More',
    productCardPrice: 1999,
  },
  {
    id: 4,
    productCardCategory: 'Brake Pad',
    productCardImage: <BrakePadImage />,
    productCardTitle: 'TVS Brake Pad',
    productCardSubTitle: 'Lorem ipsum',
    productCardPrice: 2500,
  },
];

export const AllProductList = {
  dashboardProducts: partsData,
  shopProducts: productCardData,
};
