import React, { useState } from 'react';
import { View, Dimensions, FlatList, StyleSheet } from 'react-native';
import VideoPlayer from '../components/VideoPlayer';



const { height } = Dimensions.get('window');

const VideoFeed = () => {
  const [videos] = useState([
    { id: '1', uri: 'https://videos.pexels.com/video-files/1321208/1321208-uhd_2560_1440_30fps.mp4' },
    { id: '2', uri: 'https://videos.pexels.com/video-files/1536322/1536322-hd_1920_1080_30fps.mp4' },
    { id: '3', uri: 'https://videos.pexels.com/video-files/3833491/3833491-hd_1080_1920_30fps.mp4' },
    // Add more video URIs here
  ]);

  const renderItem = ({ item }) => (
    <View style={{ height }}>
      <VideoPlayer uri={item.uri} />
    </View>
  );

  return (
    <FlatList
      data={videos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      pagingEnabled
      showsVerticalScrollIndicator={false}
    />
  );
};

export default VideoFeed;
