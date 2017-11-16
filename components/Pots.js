import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({

  postContainer:  {
    margin: 20,
    padding: 15,
    backgroundColor: '#ffffff',
    shadowColor: '#DA6C6C',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },

  postHeader : {
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333333',
  },
  author: {
    color: '#999999',
  },
  containerDescription:{
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    color: '#666666',
  },
});

const Post = ({ post }) => (
  <View style={styles.postContainer}>
    <View style={styles.postHeader}>
      <Text style={styles.title}>{post.title}</Text>
      <Text>{post.author}</Text>
    </View>
    <View style={styles.containerDescription}>
      <Text>{post.description}</Text>
    </View>
  </View>
);
export default Post;

