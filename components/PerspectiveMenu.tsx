import React from 'react';
import { Dimensions, Platform, Text, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const TRESHOLD = SCREEN_WIDTH / 4;

interface PerstectiveMenuProps {
  style: any;
}

const PerstectiveMenu: React.FC<PerstectiveMenuProps> = ({ style }) => {
  const translateX = useSharedValue(0);

  const initialTranslateX = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onBegin((event) => {
      initialTranslateX.value = translateX.value;
    })
    .onChange((event) => {
      if (event.translationX < 0) {
        return;
      }
      translateX.value = event.translationX + initialTranslateX.value;
    })
    .onEnd((event) => {
      if (event.translationX > TRESHOLD) {
        translateX.value = withTiming(SCREEN_WIDTH / 2);
      } else {
        translateX.value = withTiming(0);
      }
    });

  const reanimatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      translateX.value,
      [0, SCREEN_WIDTH / 2],
      [0, 45],
      Extrapolation.CLAMP
    );
    const borderRadius = interpolate(
      translateX.value,
      [0, SCREEN_WIDTH / 2],
      [0, 10],
      Extrapolation.CLAMP
    );

    const shadowOpacity = interpolate(
      translateX.value,
      [0, SCREEN_WIDTH / 2],
      [0.3, 0.9],
      Extrapolation.CLAMP
    );

    const shadowRadius = interpolate(
      translateX.value,
      [0, SCREEN_WIDTH / 2],
      [5, 15],
      Extrapolation.CLAMP
    );

    const shadowStyle =
      Platform.OS === 'ios'
        ? {
            shadowColor: '#e5ff00',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity,
            shadowRadius,
          }
        : {
            shadowColor: '#e5ff00',
            elevation: interpolate(
              translateX.value,
              [0, SCREEN_WIDTH / 2],
              [0, 20],
              Extrapolation.CLAMP
            ),
          };

    return {
      borderRadius,
      transform: [
        { perspective: 500 },
        {
          translateX: translateX.value,
        },
        {
          //   rotateY: `-${translateX.value / 10}deg`,
          rotateY: `-${rotate}deg`,
        },
      ],

      ...shadowStyle,
    };
  });

  const gesture = Gesture.Exclusive(panGesture);

  const handleMenu = () => {
    if (translateX.value > 0) {
      translateX.value = withTiming(0);
    } else {
      translateX.value = withTiming(SCREEN_WIDTH / 2);
    }
  };

  return (
    <GestureHandlerRootView style={[style]}>
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[{ flex: 1, backgroundColor: '#FFF7D1', padding: 10 }, reanimatedStyle]}
        >
          <Entypo
            name="menu"
            size={32}
            color="#1e1e23"
            style={{ margin: 10 }}
            onPress={handleMenu}
          />
          <ScrollView style={{ flexGrow: 1 }}>
            <Text style={styles.text}>
              Do veniam do dolor minim incididunt mollit quis sit. Mollit reprehenderit ad laboris
              ad occaecat exercitation nulla anim. Ipsum occaecat ut reprehenderit consequat ex
              anim. Magna ipsum irure ut aute occaecat esse laboris sit mollit laborum exercitation
              duis est. Non minim duis duis dolor ea magna velit sunt culpa amet nulla eu. Ipsum
              reprehenderit est incididunt magna occaecat. Excepteur ex ullamco et excepteur culpa
              ut in ea. Mollit Lorem dolor proident duis qui magna. Irure officia consequat deserunt
              adipisicing aliqua. Tempor id fugiat esse est ut commodo officia dolore irure esse
              aliquip. Ea elit aute cillum quis reprehenderit irure laboris. Ex et veniam nulla
              voluptate commodo officia laborum ea cupidatat deserunt nisi sit pariatur. Enim sint
              eu commodo anim ut. Minim ut sunt magna consectetur labore aute incididunt cillum
              cillum mollit velit anim commodo cillum. Culpa fugiat excepteur minim adipisicing
              occaecat in. Eiusmod fugiat nostrud veniam sint. Ullamco irure enim fugiat nisi
              tempor. Nostrud velit occaecat est sunt. Dolor excepteur fugiat officia est veniam
              nostrud dolor excepteur occaecat ea aliqua. Culpa dolor magna sit eu dolor eiusmod in
              tempor Lorem consequat labore enim. Ad amet aute esse fugiat eiusmod laboris est id.
              Ea irure deserunt tempor do ullamco reprehenderit. Et occaecat tempor excepteur id
              cupidatat laborum ea aliquip. Enim aute sint excepteur qui. In sit nulla esse pariatur
              irure ut qui proident cupidatat deserunt Lorem quis magna laborum. Fugiat ea laborum
              esse consectetur sit ullamco in adipisicing quis deserunt pariatur ex sunt. Anim sunt
              cupidatat incididunt fugiat dolor officia velit aliqua irure esse et nulla do non.
              Veniam incididunt sunt non commodo laborum ea occaecat id mollit fugiat sit. Irure sit
              magna dolor nostrud velit cupidatat minim consequat. Ut cillum esse voluptate nostrud
              quis minim ut labore et reprehenderit proident excepteur consectetur minim. Aute
              pariatur cillum dolore qui et nostrud reprehenderit tempor ea voluptate dolor veniam
              elit officia. Velit magna id do do dolore sit enim labore et pariatur. Est officia
              labore eiusmod cupidatat labore velit Lorem ullamco. Aliquip ipsum tempor excepteur
              quis consectetur sit mollit adipisicing laborum. Exercitation duis labore cillum est
              quis. Occaecat laborum qui do qui ex deserunt proident. Voluptate consequat incididunt
              non consequat. Fugiat cillum elit incididunt commodo ullamco aliquip. Ipsum aliqua id
              amet dolore eiusmod non sint mollit sit. Velit excepteur laboris cillum mollit
              reprehenderit. Ullamco adipisicing nostrud deserunt ullamco reprehenderit. Consectetur
              sit minim eu tempor. Nostrud consequat Lorem ex ad eiusmod sunt cillum adipisicing
              exercitation. Nisi aliquip adipisicing incididunt non. Occaecat voluptate nostrud sit
              consectetur. Ad excepteur irure ex ullamco laborum elit consequat exercitation. Ex
              voluptate ad Lorem enim. Occaecat labore tempor mollit ea qui incididunt fugiat enim
              irure veniam nisi amet. Ex esse ea cupidatat aliqua dolor commodo ipsum elit
              consectetur commodo est. Magna adipisicing do eiusmod ea aliqua consequat mollit. Non
              dolore quis id excepteur qui veniam id magna tempor eiusmod irure id elit mollit. Ad
              pariatur consectetur aliquip dolor laboris sint. Consequat aliquip occaecat
              exercitation non. Lorem ad sint aute sit id eiusmod aliquip voluptate aliqua duis.
              Officia proident sint incididunt adipisicing commodo sunt mollit dolor ipsum cillum.
              Esse aliqua dolor consectetur in veniam irure ut. Consequat ea pariatur ut non esse
              deserunt sit sint. Mollit mollit irure duis ut dolor commodo eiusmod qui anim aute
              pariatur nostrud. Minim ad tempor eiusmod in culpa Lorem laborum id qui reprehenderit
              duis exercitation do. Cupidatat velit eu exercitation nulla cupidatat dolore. Fugiat
              commodo labore id aute et laborum nulla culpa. Qui non excepteur tempor labore.
              Laboris nisi nisi cillum nostrud ut id.
            </Text>
          </ScrollView>
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#1e1e23',
    fontSize: 20,
    margin: 10,
  },
});

export default PerstectiveMenu;
