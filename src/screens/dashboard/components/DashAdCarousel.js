import React from 'react';
import {View, Text} from 'react-native';
import DashAdCarouselButton from '@app/screens/dashboard/components/DashAdCarouselButton';
import {Styles} from '@app/screens/dashboard/components/DashAdCarouselStyles';
import LinearGradient from 'react-native-linear-gradient';

export default function DashAdCarousel({adTitle, adSubTitle, adImage}) {
  return (
    <View style={Styles.mainContainer}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#000000', '#43573D', '#E7DDDC']}
        locations={[0.5, 0.7, 0.9]}
        style={Styles.imageContainer}>
        <View style={Styles.leftContainer}>
          <View>
            <Text style={Styles.adTitle}>{adTitle}</Text>
          </View>

          <View>
            <Text style={Styles.adSubTitle}>{adSubTitle}</Text>
          </View>

          <View style={Styles.buttonContainer}>
            <DashAdCarouselButton
              buttonLabel="Buy Now"
              buttonHeight={50}
              buttonWidth={120}
              onPressHandler={() => {
                console.log('Buy Now Button');
              }}
            />
          </View>
        </View>
        <View style={Styles.rightContainer}>{adImage}</View>
      </LinearGradient>
    </View>
  );
}
