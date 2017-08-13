import React from 'react';
import { Text, View, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => { //destructure props
  const { title, artist, thumbnail_image } = album; // I want those properties from the album
  const {thumbnailStyle, headerContentStyle } = styles; // destructure properties from styles
  return (
    <Card>
      <CardSection>
        <View>
          <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
        </View>
        <View style={headerContentStyle}>
            <Text>{title}</Text>
            <Text>{artist}</Text>
        </View>
      </CardSection>


    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  }
};
export default AlbumDetail;
