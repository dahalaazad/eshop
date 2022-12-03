import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import DashAdCarousel from '@app/screens/dashboard/components/DashAdCarousel';
import Carousel, {Pagination} from 'react-native-snap-carousel-v4';
import {Colors} from '@app/constants';
import CastrolImage from '@app/assets/svg/DashboardAdCastrol.svg';
import EngineFilterImage from '@app/assets/svg/EngineFilter.svg';
import BrakePadImage from '@app/assets/svg/BrakePad.svg';

const adData = [
  {
    id: 1,
    adTitle: 'CASTROL MAGNATEC',
    adSubTitle: 'Non-stop protection from every start',
    adImage: <CastrolImage />,
  },
  {
    id: 2,
    adTitle: 'LOREM IPSUM',
    adSubTitle: 'Non-stop protection from every threat',
    adImage: <EngineFilterImage />,
  },
  {
    id: 3,
    adTitle: 'FIRE STYLE',
    adSubTitle: 'Non-stop protection from every threat',
    adImage: <BrakePadImage />,
  },
];

export default function DashAdCarouselPagination() {
  const [adCarouselIndex, setAdCarouselIndex] = useState(0);
  const isCarousel = useRef(null);

  return (
    <View>
      <Carousel
        ref={isCarousel}
        data={adData}
        renderItem={({item}) => {
          return (
            <View>
              <DashAdCarousel
                key={item.id}
                adTitle={item.adTitle}
                adSubTitle={item.adSubTitle}
                adImage={item.adImage}
              />
            </View>
          );
        }}
        onSnapToItem={index => setAdCarouselIndex(index)}
        sliderWidth={360}
        itemWidth={350}
      />

      <Pagination
        dotsLength={adData.length}
        activeDotIndex={adCarouselIndex}
        carouselRef={isCarousel}
        containerStyle={{
          paddingTop: 15,
        }}
        dotStyle={{
          width: 25,
          height: 8,
          backgroundColor: Colors.textLinkColor,
          borderRadius: 5,
        }}
        dotContainerStyle={{
          marginHorizontal: 4,
        }}
        tappableDots={true}
        inactiveDotStyle={{
          width: 8,
          backgroundColor: Colors.productCardSubtitleColor,
        }}
        inactiveDotOpacity={0.2}
        inactiveDotScale={1}
      />
    </View>
  );
}
