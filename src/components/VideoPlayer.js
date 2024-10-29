import React, { useRef, useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';

const VideoPlayer = ({ uri }) => {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const togglePlayPause = () => setIsPaused(!isPaused);

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{ uri }}
        style={styles.video}
        resizeMode="cover"
        repeat
        paused={isPaused} // Control play/pause with state
        muted={false}
      />

      {/* Play/Pause Button */}
      <TouchableOpacity onPress={togglePlayPause} style={styles.playPauseButton}>
        <Icon name={isPaused ? 'play' : 'pause'} size={40} color="white" />
      </TouchableOpacity>

      {/* Right Sidebar with Icons */}
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="heart" size={30} color="white" />
          <Text style={styles.iconLabel}>1.2k</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Icon name="chatbubble" size={30} color="white" />
          <Text style={styles.iconLabel}>345</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Icon name="share" size={30} color="white" />
          <Text style={styles.iconLabel}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  playPauseButton: {
    position: 'absolute',
    top: '45%',
    left: '45%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 25,
    padding: 10,
  },
  iconContainer: {
    position: 'absolute',
    right: 20,
    bottom: 100,
    alignItems: 'center',
  },
  iconButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  iconLabel: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
  },
});

export default VideoPlayer;
