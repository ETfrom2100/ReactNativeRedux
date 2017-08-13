import React from 'react';
import { Text, View, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => { //destructure props
  const { title, artist, thumbnail_image } = album; // I want those properties from the album
  return (
    <Card>
      <CardSection>
        <View>
          <Image source={{ uri: thumbnail_image }} />
        </View>
        <View style={styles.headerContentStyle}>
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
  }
};
export default AlbumDetail;
