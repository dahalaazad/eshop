import ProductImages from '@app/constants/ProductImages';

export default getImage = imageId => {
  switch (imageId) {
    case 'brakepad':
      return ProductImages.brakePad;
    case 'engineFilter':
      return ProductImages.engineFilter;
    case 'hondaGearBoxImage1':
      return ProductImages.hondaGearBoxImage1;
    case 'hondaGearBoxImage2':
      return ProductImages.hondaGearBoxImage2;
    case 'hondaGearBoxImage3':
      return ProductImages.hondaGearBoxImage3;

    case 'hondaGearBoxImage4':
      return ProductImages.hondaGearBoxImage4;

    default:
      return ProductImages.brakePad;
  }
};
