// ContinuousSlide.js
import React, { useEffect, useRef } from 'react';
import {
  Animated,
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Dimensions,
  Easing,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const ContinuousSlide = () => {
  const translateX = useRef(new Animated.Value(width)).current;

  useEffect(() => {
    const animate = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(translateX, {
            toValue: -width,
            duration: 2500,
            useNativeDriver: true,
            easing: Easing.linear,
          }),

          Animated.timing(translateX, {
            toValue: width,
            duration: 2500,
            useNativeDriver: true,
            easing: Easing.linear,
          }),

          Animated.timing(translateX, {
            toValue: -width,
            duration: 2500,
            useNativeDriver: true,
            easing: Easing.linear,
          }),

          Animated.timing(translateX, {
            toValue: width,
            duration: 2500,
            useNativeDriver: true,
            easing: Easing.linear,
          }),
        ])
      ).start();
    };

    animate();
  }, [translateX]);

  
  return (
    <>
      <Animated.View style={[styles.slider, { transform: [{ translateX }] }]}>
        <ImageBackground
          source={{
            uri: 'https://image.ibb.co/ky3Y0S/teee.png',
          }}
          style={styles.image}
          // resizeMode="cover"
          resizeMode="repeat"
        />
      </Animated.View>

      <View>
        <Text style={{ color: 'white' }}>Hello</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  slider: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
  },

  image: {
    height: height * 1.5,
    marginRight: -width*2,
    marginLeft: -width*2,
    margin: 0,
    padding: 0,
    paddingTop: 120,
    paddingBottom: 120,
    paddingLeft: width
  },
});

export default ContinuousSlide;
