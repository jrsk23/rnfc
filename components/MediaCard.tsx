import React, {useContext} from 'react';
import {Image, TouchableHighlight, View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {NavigationContext} from 'react-native-navigation-hooks';
import {slateGray} from '../styles/colors';
import {globalStyle} from '../styles/global';
import {getImageUrl} from '../util/api';

interface Props {
  item: any;
}

const MediaCard = ({item}: Props) => {
  const {componentId = ''} = useContext(NavigationContext);

  const onPress = (item) => {
    Navigation.push<Props>(componentId, {
      component: {
        name: 'com.netflixClone.Detail',
        id: componentId,
        passProps: {item},
      },
    });
  };

  return (
    <TouchableHighlight underlayColor={slateGray} onPress={() => onPress(item)}>
      <View style={globalStyle.posterContainer}>
        <Image
          source={{
            uri: getImageUrl(item.poster_path),
          }}
          style={globalStyle.poster}
        />
      </View>
    </TouchableHighlight>
  );
};

export default MediaCard;
