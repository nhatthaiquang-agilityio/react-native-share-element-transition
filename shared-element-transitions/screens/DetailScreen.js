import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';


const DetailScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const { height } = Dimensions.get('window');
  const ITEM_HEIGHT = height * 0.5;

  return (
    <View style={{ flex: 1, backgroundColor: '#0f0f0f' }}>
      <Image
        source={{ uri: item.image_url }}
        style={{
          width: '100%',
          height: ITEM_HEIGHT,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20
        }}
        resizeMode='cover'
      />

      <MaterialCommunityIcons
        name='close'
        size={28}
        color='#fff'
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          zIndex: 2
        }}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View
        style={{ flexDirection: 'row', marginTop: 10, paddingHorizontal: 20 }}
      >
        <SimpleLineIcons size={30} color='white' name={item.iconName} />

        <View style={{ flexDirection: 'column', paddingLeft: 6 }}>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              fontWeight: 'bold',
              lineHeight: 28
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
              lineHeight: 18
            }}
          >
            {item.description}
          </Text>
        </View>
      </View>

      <ScrollView
        indicatorStyle='white'
        style={{
          paddingHorizontal: 20,
          backgroundColor: '#0f0f0f'
        }}
        contentContainerStyle={{ paddingVertical: 20 }}
      >
        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            lineHeight: 24,
            marginBottom: 4
          }}
        >
          {item.content}
        </Text>
      </ScrollView>
    </View>
  );
 };

export default DetailScreen;