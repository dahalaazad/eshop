import {productCategoryDataItems} from './productCategoryData';
import productCardData from './ProductCardData';

const partsData = [
  {
    id: 1,
    productId:'engineFilter',
    productCardCategory: 'Engine Filter',
    productCardTitle: 'Castrol Engine Filter',
    productCardSubTitle:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.... See More',
    productCardPrice: 1999,
  },
  {
    id: 2,
    productId:'brakePad',
    productCardCategory: 'Brake Pad',
    productCardTitle: 'FZ Brake Pad',
    productCardSubTitle: 'Lorem ipsum',
    productCardPrice: 2500,
  },
  {
    id: 3,
    productId:'engineFilter',
    productCardCategory: 'Engine Filter',
    productCardTitle: 'Chevron Engine Filter',
    productCardSubTitle:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.... See More',
    productCardPrice: 1999,
  },
  {
    id: 4,
    productId:'brakePad',
    productCardCategory: 'Brake Pad',
    productCardTitle: 'TVS Brake Pad',
    productCardSubTitle: 'Lorem ipsum',
    productCardPrice: 2500,
  },
];

export const AllProductList = {
  dashboardProducts: partsData,
  shopProducts: productCardData,
};
