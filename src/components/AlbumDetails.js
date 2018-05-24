// import node modules
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// component creation

const AlbumDetails = ({ album }) => {
  const { title, artist, image, thumbnail_image, url } = album;
  const { imageViewContainer,
          imageThumbnail,
          textViewContainer,
          textContentHeader,
          imageStyle
        } = styles;
  return (
    <Card>
      <CardSection>
        <View style={imageViewContainer} >
          <Image source={{ uri: thumbnail_image }} style={imageThumbnail} />
        </View>
        <View style={textViewContainer}>
          <Text style={textContentHeader}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <View style={imageViewContainer} >
          <Image source={{ uri: image }} style={imageStyle} />
        </View>
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy
        </Button>
      </CardSection>
    </Card>
  );
};

// components styling
const styles = {

  imageViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },

  imageThumbnail: {
    width: 50,
    height: 50
  },

  imageStyle: {
    height: 350,
    flex: 1,
    width: 370
  },

  textViewContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  textContentHeader: {
    fontSize: 18
  }

};

// component export
export default AlbumDetails;
