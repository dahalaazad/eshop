import ProductCategoryBike from '@app/assets/svg/DashboardCategoryBike.svg';
import ProductCategoryScooter from '@app/assets/svg/DashboardCategoryScooter.svg';
import ProductCategoryCar from '@app/assets/svg/DashboardCategoryCar.svg';
import ProductCategoryAccessories from '@app/assets/svg/DashboardCategoryAccessories.svg';

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