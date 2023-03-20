import React, {useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel-v4';
import {Colors} from '@app/constants';

export default function DashAdCarouselPagination({
  dataArr,
  renderCarouselItem,
}) {
  const [adCarouselIndex, setAdCarouselIndex] = useState(0);
  const isCarousel = useRef(null);

  return (
    <View>
      <Carousel
        ref={isCarousel}
        data={dataArr}
        renderItem={renderCarouselItem}
        onSnapToItem={index => setAdCarouselIndex(index)}
        sliderWidth={360}
        itemWidth={350}
        disableIntervalMomentum={true} // One slide only.
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
      />

      <Pagination
        dotsLength={dataArr.length}
        activeDotIndex={adCarouselIndex}
        carouselRef={isCarousel}
        containerStyle={{
          paddingTop: 15,
        }}
        dotStyle={Styles.dotStyle}
        dotContainerStyle={Styles.dotContainerStyle}
        tappableDots={true}
        inactiveDotStyle={Styles.inactiveDotStyle}
        inactiveDotOpacity={0.2}
        inactiveDotScale={1}
      />
    </View>
  );
}

export const Styles = StyleSheet.create({
  dotStyle: {
    width: 25,
    height: 8,
    backgroundColor: Colors.textLinkColor,
    borderRadius: 5,
  },
  dotContainerStyle: {
    marginHorizontal: 4,
  },
  inactiveDotStyle: {
    width: 8,
    backgroundColor: Colors.productCardSubtitleColor,
  },
});
